import { Router } from 'express';
import ValidationCpf from '../middlewares/ValidationCpf';
import ListRestrictCpfController from '../controller/ListRestrictCpfController';

const routes = Router();
const cpfController = new ListRestrictCpfController();

routes.get('/cpf/', cpfController.getAllCpfs)
routes.get('/cpf/:cpf', ValidationCpf, cpfController.getCpf)
routes.delete('/cpf/:cpf', ValidationCpf, cpfController.deleteCpf)
routes.post('/cpf', ValidationCpf, cpfController.addCpfInList);

export default routes;