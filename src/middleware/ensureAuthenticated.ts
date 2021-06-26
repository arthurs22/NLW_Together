import { Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    //receber o token
    const authToken = request.headers.authorization
   
    // validar se o token ta preenchido
    if(!authToken){
        return response.status(401).end();
    }
    const [,token] = authToken.split(" ") // posição 0 - Bearer posição 1 - token
    
    try{
    const {sub} =verify(token, "04b6e1a104ba0ed5e7985abde3e13140") as IPayload;
    
    request.user_id = sub;
    
}catch(err){
        return response.status(401).end();
    }
    //recuperar informações do usuário
    return next();
}

