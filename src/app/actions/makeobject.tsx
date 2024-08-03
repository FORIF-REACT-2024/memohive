import CustomResponse from '@/lib/res'

export default function makeObject(data: unknown): CustomResponse {
  return JSON.parse(JSON.stringify(data))
}
