
export abstract class CpfExceptions extends Error {
  public abstract type: string;
  public abstract message: string;
  public abstract statusCode: number;

 get payload () {
  const { type, message } = this
  return { type, message }
 }
}

export class InvalidCpfException extends CpfExceptions {
  public type = 'InvalidCpfException';
  public message = 'CPF is not valid.';
  public statusCode = 400;
}

export class NotFoundCpfException extends CpfExceptions {
  public type = 'NotFoundCpfException';
  public message = 'CPF not found';
  public statusCode = 404;
}

export class ExistsCpfException extends CpfExceptions {
  public type = 'ExistsCpfException';
  public message = 'CPF already exists';
  public statusCode = 400;
}