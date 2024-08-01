export type User = {
  id: string
  email: string
  username: string
  createdAt: Date
}

export type Board = {
  id: string
  title: string | null
  isPublic: boolean
  createdAt: Date
  authorId: string
  summary: string | null
}

export type Memo = {
  id: string
  createdAt: Date
  authorId: string
  boardId: string
  document: string | null
  color: string | null
}
