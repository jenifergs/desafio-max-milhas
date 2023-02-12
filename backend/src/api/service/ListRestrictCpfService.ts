import Cpf from '../../database/models/Cpf';
import { ExistsCpfException, NotFoundCpfException } from '../exceptions/Exceptions';

export default class ListRestrictCpfService {
  addCpfInList = async (cpf: string) => {
    const customerCpfExists = await Cpf.findOne({ where: { cpf } })
    if (customerCpfExists) {
    throw new ExistsCpfException()
    }
    const customerCpf = Cpf.create({ cpf, createdAt: new Date() })
    return customerCpf;
  }

  getCpf = async (cpf: string) => {
    const customerCpf = await Cpf.findOne({ where: { cpf } })
    if (!customerCpf) {
    throw new NotFoundCpfException()    }
    return customerCpf ;
  }

  deleteCpf = async (cpf: string) => {
    const customerCpf = await Cpf.destroy({ where: { cpf } })
    if (!customerCpf) {
      throw new NotFoundCpfException()
    }
  }

  getAllCpfs = async () => {
    const customerCpf = await Cpf.findAll()      
    return customerCpf;
  }
} 