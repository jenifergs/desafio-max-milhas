  import RegisterCpfService from "../src/api/service/RegisterCpfService";
import { ExistsCpfException, NotFoundCpfException } from "../src/api/exceptions/Exceptions";
import CustomerCpfController from "../src/api/controller/CustomerCpfController";
import { Request, Response} from 'express'
import CustomerCpf from '../src/api/interfaces/CustomerCpf';

describe('Camada controller', () => {
  let cpfCustomer = {cpf: '85839831514', createdAt: new Date()}
  let service: RegisterCpfService;
  let controller: CustomerCpfController;
  let res: Response;
  let req: Request<CustomerCpf>;
  let reqParams: Request<CustomerCpf>;

  beforeEach(() => {
    service = new RegisterCpfService();
    controller = new CustomerCpfController(service);
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    } as unknown as Response;
    req = {
      body: {
        cpf: '85839831514'
      }
    } as unknown as Request<CustomerCpf>;

    reqParams = {
      params: {
        cpf: '85839831514'
      }
    } as unknown as Request<CustomerCpf>;
  })


  it('Verifica se cadastra cpf na lista', async () => {
    service.registerNew = jest.fn().mockResolvedValue(cpfCustomer);
    const cpf = await controller.newRegisterCpf(req, res)
    expect(res.status).toBeCalledWith(201)
    expect(res.json).toBeCalledWith(cpfCustomer)
  })

  it('Verifica se não cadastra na lista, caso cpf já exista', async () => {
    const exception = new ExistsCpfException();
    service.registerNew = jest.fn().mockRejectedValue(exception);
      await controller.newRegisterCpf(req, res);
      expect(res.status).toBeCalledWith(exception.statusCode);
      expect(res.json).toBeCalledWith(exception.payload);
  }
  ) 

  it('Verifica se retorna cpf da lista', async () => {
    service.getCpf = jest.fn().mockResolvedValue(cpfCustomer);
    const cpf = await controller.getCpf(reqParams, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith(cpfCustomer)
  }
  )

  it('Verifica se não retorna cpf da lista, caso cpf não exista', async () => {
    const exception = new NotFoundCpfException();
    service.getCpf = jest.fn().mockRejectedValue(exception);
    await controller.getCpf(reqParams, res);
    expect(res.status).toBeCalledWith(exception.statusCode);
    expect(res.json).toBeCalledWith(exception.payload);
  }
  )

  it('Verifica se deleta cpf da lista', async () => {
    service.deleteCpf = jest.fn().mockResolvedValue(cpfCustomer);
    await controller.deleteCpf(reqParams, res)
    expect(res.status).toBeCalledWith(204)
  }
  )

  it('Verifica se não deleta cpf da lista, caso cpf não exista', async () => {
    const exception = new NotFoundCpfException();
    service.deleteCpf = jest.fn().mockRejectedValue(exception);
    await controller.deleteCpf(reqParams, res);
    expect(res.status).toBeCalledWith(exception.statusCode);
    expect(res.json).toBeCalledWith(exception.payload);
  }
  )

  it('Verifica se retorna todos os cpfs da lista', async () => {
    service.getAllCpfs = jest.fn().mockResolvedValue([cpfCustomer]);
    await controller.getAllCpfs(req, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith([cpfCustomer])
  }
  )


  it('Verifica se quando acontece um erro em getAllCpfs a api retorna status 500', async () => {
    service.getAllCpfs = jest.fn().mockRejectedValue(new Error('Erro inesperado'));
    await controller.getAllCpfs(req, res)
    expect(res.status).toBeCalledWith(500)
    expect(res.json).toBeCalledWith({ message: 'Internal server error' })
  }
  )

  it('verifica metodo handleError quando um erro que não é uma instancia de CpfException é lançado', async () => {
    const error = new Error('Erro inesperado');
    service.getCpf = jest.fn().mockRejectedValue(error);
    await controller.getCpf(reqParams, res);
    expect(res.status).toBeCalledWith(500);
    expect(res.json).toBeCalledWith({message: 'Internal server error'});
  }
  )

  it('Verifica se um controller instanciado sem passar um service no construtor e um objeto do tipo CustomerCpfController', () => {
    const controller = new CustomerCpfController();
    expect(controller).toBeInstanceOf(CustomerCpfController);
  })

})