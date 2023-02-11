import RegisterCpfService from '../src/api/service/RegisterCpfService';
import Cpf from '../src/database/models/Cpf';
import CustomerCpf from '../src/api/interfaces/CustomerCpf';
import { ExistsCpfException, NotFoundCpfException } from '../src/api/exceptions/Exceptions';


describe('Camada service', () => {
  let cpfCustomer = {cpf: '85839831514', createdAt: new Date()}
  let service: RegisterCpfService;
  beforeEach(() => {
    service = new RegisterCpfService();
  })
  it('Verifica se cadastra cpf na lista', async () => {
  Cpf.findOne = jest.fn().mockResolvedValue(null);
  Cpf.create = jest.fn().mockResolvedValue(cpfCustomer)
  const cpf = await service.registerNew('85839831514')
  expect(cpf).toEqual(cpfCustomer)
  })

  it('Verifica se não cadastra na lista, caso cpf já exista', async () => {
    Cpf.findOne = jest.fn().mockResolvedValue(cpfCustomer);
    try {
      await service.registerNew('85839831514')
    } catch (e) {
      expect(e).toEqual( new ExistsCpfException())
    }
  })

  it('Verifica se retorna cpf da lista', async () => {
    Cpf.findOne = jest.fn().mockResolvedValue(cpfCustomer);
    const cpf = await service.getCpf('85839831514')
    expect(cpf).toEqual(cpfCustomer)
  }
  )

  it('Verifica se não retorna cpf da lista, caso cpf não exista', async () => {
    Cpf.findOne = jest.fn().mockResolvedValue(null);
    try {
      await service.getCpf('85839831514')
    } catch (e) {
      expect(e).toEqual( new NotFoundCpfException())
    }
  }
  )

  it('Verifica se deleta cpf da lista', async () => {
    Cpf.destroy = jest.fn().mockResolvedValue(cpfCustomer);
    await service.deleteCpf('85839831514')
    expect(Cpf.destroy).toBeCalled()
  }
  )

  it('Verifica se não deleta cpf da lista, caso cpf não exista', async () => {
    Cpf.destroy = jest.fn().mockResolvedValue(null);
    try {
      await service.deleteCpf('85839831514')
    } catch (e) {
      expect(e).toEqual( new NotFoundCpfException())
    }
  }
  )

  it('Verifica se retorna todos os cpfs da lista', async () => {
    Cpf.findAll = jest.fn().mockResolvedValue([cpfCustomer]);
    const cpf = await service.getAllCpfs()
    expect(cpf).toEqual([cpfCustomer])
  }
  )
})