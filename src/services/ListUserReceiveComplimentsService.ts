import { getCustomRepository } from "typeorm";
import { CopmplimentsRepositories } from "../repositories/ComplimentsRepositories";



class ListUserReceiveComplimentsService {

    async execute(user_id:string) {
        const complimentRepositories = getCustomRepository(CopmplimentsRepositories);

        const compliments = await complimentRepositories.find({
            where:{
                user_receiver: user_id,
            },

        });
        return compliments;

    }
}

export {ListUserReceiveComplimentsService}