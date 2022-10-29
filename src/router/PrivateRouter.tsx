import { Navigate } from "react-router-dom"
import { selectUserData } from "src/redux/slices/user"
import { useSelector } from "react-redux"
import { PathName } from "src/const"

interface Porps {
  children: JSX.Element
}
export default function PrivateRouter({ children }: Porps) {
  const userData = useSelector(selectUserData)
  return userData ? children : <Navigate to={PathName.home.login} />
}