export interface Cat {
  id: string
  url: string
  sub_id: string
  created_at: string
  favourite?: { id: string }
  vote?: {
    id: string
    value: 1 | 0
  }
}
