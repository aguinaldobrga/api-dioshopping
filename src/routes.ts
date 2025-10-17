import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";

const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();

router.get('/', (req: Request, res: Response) => {
    return res.status(201).send('API DioShopping está rodando!')
})

router.get('/message', listMessageController.hanle)
router.post('/message', createMessageController.handle)

export { router }
