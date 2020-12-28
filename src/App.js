import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import History from './components/Todo/History/History'

import TodoContainer from './container/TodoContainer'
import CarContainer from './container/CarContainer'
import CartContainer from './container/CartContainer'

import withSuspense from './hoc/withSuspense'

const ContactUsContainer = React.lazy(() => import('./container/ContactUsContainer'))
const ShopContainer = React.lazy(() => import('./container/ShopContainer'))

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'} render={() => <Home />} />
        <Route exact path={'/todo'} render={() => <TodoContainer />} />
        <Route exact path={'/todo/history'} render={() => <History />} />
        <Route exact path={'/car/:id?'} render={withSuspense(CarContainer)} />
        <Route exact path={'/shop/cart'} render={() => <CartContainer />} />
        <Route exact path={'/shop/:brand?'} render={withSuspense(ShopContainer)} />
        <Route path={'/contactus'} render={withSuspense(ContactUsContainer)} />
        <Redirect from={'/'} to={'/'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
