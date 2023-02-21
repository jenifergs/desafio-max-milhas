import { Router } from 'express';
import ValidationCpf from '../middlewares/ValidationCpf';
import ListRestrictCpfController from '../controller/ListRestrictCpfController';
import ValidateTypeCpf from '../middlewares/ValidateTypeCpf';

const routes = Router();
const cpfController = new ListRestrictCpfController();

routes.get('/cpf/', cpfController.getAllCpfs)
routes.get('/cpf/:cpf', ValidationCpf, cpfController.getCpf)
routes.delete('/cpf/:cpf', ValidationCpf, cpfController.deleteCpf)
routes.post('/cpf', ValidateTypeCpf, ValidationCpf, cpfController.addCpfInList);

export default routes;