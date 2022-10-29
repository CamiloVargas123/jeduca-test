export interface Articles {
  name: string
  description?: string
  initialPrice: number
  bidPrice: number
}

export const EmptyArticles: Articles[] = []