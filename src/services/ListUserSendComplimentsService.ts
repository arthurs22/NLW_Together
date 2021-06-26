import { getCustomRepository } from "typeorm";
import { CopmplimentsRepositories } from "../repositories/ComplimentsRepositories";




class ListUserSendComplimentsService {

    async execute(user_id:string) {
        const complimentRepositories = getCustomRepository(CopmplimentsRepositories);

        const compliments = await complimentRepositories.find({
            where:{
                user_sender: user_id,
            },
            // aqui vc pode mudar como vai ser a busca, mas cuidado para não deixar lento!
            relations: ["userSender", "userReceiver", "tag"],
        });
        return compliments;

    }
}

export {ListUserSendComplimentsService}