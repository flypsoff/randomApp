import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import withSuspense from './hoc/withSuspense'

import Home from './components/Home/Home'

import * as container from './container'

const ShopContainer = React.lazy(() => import('./container/ShopContainer'))
const TodoContainer = React.lazy(() => import('./container/TodoContainer'))
const CompletedContainer = React.lazy(() => import('./container/CompletedContainer'))

const Routers = ({ isAuth }) => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Home />} />
            <Route exact path={'/car/:id?'} render={withSuspense(container.CarContainer)} />
            <Route exact path={'/shop/cart'} render={() => <container.CartContainer />} />
            <Route exact path={'/shop/:brand?'} render={withSuspense(ShopContainer)} />

            <Route exact path={'/todos/current'} render={withSuspense(TodoContainer)} />
            <Route exact path={'/todos/completed'} render={withSuspense(CompletedContainer)} />

            <Route exact path='/account'>
                {!isAuth ? <Redirect to='login'/> :<container.AccountContainer />}
            </Route>

            <Route exact path='/login'>
                {isAuth ? <Redirect to='/account'/> : <container.LoginContainer />}
            </Route>
            <Route exact path='/registration'>
                {isAuth ? <Redirect to='/account' /> : <container.RegistrationContainer />}
            </Route>
        </Switch>
    )
}

export default Routers