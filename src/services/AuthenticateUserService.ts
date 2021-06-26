import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
import {compare} from "bcryptjs"
import { sign } from "jsonwebtoken"
interface IAuthenticateRequest{
    email:string;
    password: string;
}


class AuthenticateUserService{

    async execute({email,password}: IAuthenticateRequest){
        const userRepositories = getCustomRepository(UserRepositories);
        
        // verufucar se email existe
        const user = await userRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect")
            }
        //verificar se senha está correta usando compare (bcrypt)
            const passwordMatch = await compare(password, user.password)
            
            if(!passwordMatch){
                throw new Error("Email/Password incorrect")
            }

                        //Gerar JRR tolken
            const token = sign(
            {
                email: user.email,
            },"04b6e1a104ba0ed5e7985abde3e13140", // senha abacate ( MonkaS )
            {        
                subject: user.id,
                expiresIn: "1d" ,
            } 
        ); 
        return token;
    }

}

export {AuthenticateUserService}