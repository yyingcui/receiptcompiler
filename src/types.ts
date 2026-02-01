export interface Receipt {
  id: string
  subject: string
  from: string
  date: string
  amount: number
  type: 'Uber' | 'Lyft' | 'Metro' | 'Train' | 'Bus'
  preview: string
  imageUrl: string
}
