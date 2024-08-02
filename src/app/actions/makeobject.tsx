export default function makeObject(data: unknown) {
  return JSON.parse(JSON.stringify(data))
}
