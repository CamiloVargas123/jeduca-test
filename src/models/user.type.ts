export interface User {
  id?: number,
  fullName?: string,
  cardNumber?: number,
  cash?: number,
  userName?: string,
  password?: string
}
export const EmptyUserState: User = {
  id: undefined,
  fullName: undefined,
  cardNumber: undefined,
  cash: undefined,
  userName: undefined,
  password: undefined
}