import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController"
import {  CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middleware/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { ListUserSendComplimentscontroller} from "./controllers/ListUserSendComplimentController";
import { ListUserReceiveComplimentscontroller } from "./controllers/ListUserReceiveComplimentController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createcomplimentController = new CreateComplimentController();
const listUserReceiveComplimentController = new ListUserReceiveComplimentscontroller();
const listUserSendComplimentController = new ListUserSendComplimentscontroller();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/tags",ensureAuthenticated, ensureAdmin, createTagController.handle);//da pra passar o middleware do lado da rota
router.post("/login", authenticateUserController.handle );
router.post("/compliments", ensureAuthenticated, createcomplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle  );
router.get("/users/compliments/receive", ensureAuthenticated,  listUserReceiveComplimentController.handle );
router.get("/tags", listTagsController.handle);
router.get("/users", listUsersController.handle);



export { router };