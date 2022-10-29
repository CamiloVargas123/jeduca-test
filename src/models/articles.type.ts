export interface Articles {
  name: string
  description?: string
  initialPrice: number
  bidPrice: number
  userId: number
}

export const EmptyArticles: Articles[] = []