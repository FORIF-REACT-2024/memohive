/**
 * * This class is made to handle Prisma Response
 * @param code Error code from Prisma, 200 if OK
 * @param message Error message, 'Success' if OK
 */

export default class CustomResponse {
  code: string
  data?: any
  message: string

  constructor(code: string, message: string, data?: unknown) {
    this.code = code
    this.message = message
    this.data = data ?? null
  }

  public toString = (): string => {
    return this.data
      ? `CustomResponse (code: ${this.code}, message: ${this.message})`
      : `CustomResponse (code: ${this.code}, message: ${this.message}), data: ${this.data})`
  }
}
