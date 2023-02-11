import { Router } from 'express';
import ValidationCpf from '../middlewares/ValidationCpf';
import CustomerCpfController from '../controller/CustomerCpfController';

const routes = Router();
const cpfController = new CustomerCpfController();

routes.get('/cpf/', cpfController.getAllCpfs)
routes.get('/cpf/:cpf', ValidationCpf, cpfController.getCpf)
routes.delete('/cpf/:cpf', ValidationCpf, cpfController.deleteCpf)
routes.post('/cpf', ValidationCpf, cpfController.newRegisterCpf);

export default routes;