export class AppError {
  public readonly message: string | object;
  public readonly statusCode: number;

  constructor(message: string | object, statusCode = 400) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
