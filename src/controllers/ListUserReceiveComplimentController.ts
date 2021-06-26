import { Request, Response } from "express" //ja tem user_id
import { ListUserReceiveComplimentsService} from "../services/ListUserReceiveComplimentsService"

class ListUserReceiveComplimentscontroller{
    async handle(request: Request, response: Response) {
        const {user_id} = request;
        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserReceiveComplimentscontroller };