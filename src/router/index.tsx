import { BrowserRouter, Route, Routes } from 'react-router-dom'

//type of router
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'

import { FormLogin, FormRegister, LoginOrRegister, OverView } from 'src/pages'
import { PathName } from 'src/const'
//component
/* import LoginForm from '../components/LoginForm/LoginForm'
import RegisterForm from '../components/RegisterForm/RegisterForm'
 */
//layout
/* import LoginOrRegister from '../Layout/LoginOrRegister/LoginOrRegister'
import User from '../Layout/User/User'
import Admin from '../Layout/Admin/Admin' */




export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={PathName.home.base} element={<PublicRouter><LoginOrRegister /></PublicRouter>}>
          <Route index element={<FormRegister />} />
          <Route path={PathName.home.login} element={<FormLogin />} />
        </Route>

        <Route path={PathName.dashboard.base} element={<PrivateRouter><OverView /></PrivateRouter>} />

      </Routes>
    </BrowserRouter>
  )
}