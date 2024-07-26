/**
 * * This class is made to handle Prisma Response
 * @param code Error code from Prisma, 200 if OK
 * @param message Error message, 'Success' if OK
 */

export default class CustomResponse {
  code: string
  message: string

  constructor(code: string, message: string) {
    this.code = code
    this.message = message
  }

  public toString = (): string => {
    return `CustomResponse (code: ${this.code}, message: ${this.message})`
  }
}
