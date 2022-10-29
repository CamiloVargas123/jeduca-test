import { BrowserRouter, Route, Routes } from 'react-router-dom'

//type of router
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'

import { FormLogin, FormRegister, LoginOrRegister, OverView, SellArticle, TableArticles } from 'src/pages'
import { PathName } from 'src/const'



export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={PathName.home.base} element={<PublicRouter><LoginOrRegister /></PublicRouter>}>
          <Route index element={<FormRegister />} />
          <Route path={PathName.home.login} element={<FormLogin />} />
        </Route>

        <Route path={PathName.dashboard.base} element={<PrivateRouter><OverView /></PrivateRouter>} >
          <Route index element={<TableArticles />} />
          <Route path={PathName.dashboard.sell} element={<SellArticle />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}