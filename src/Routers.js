import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home/Home'

import {
    CarContainer,
    CartContainer,
    RegistrationContainer,
    LoginContainer,
    AccountContainer
} from "./container";

import withSuspense from './hoc/withSuspense'

const ShopContainer = React.lazy(() => import('./container/ShopContainer'))
const TodoContainer = React.lazy(() => import('./container/TodoContainer'))
const History = React.lazy(() => import('./components/Todo/History/History'))

const Routers = (props) => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Home />} />
            <Route exact path={'/todo'} render={withSuspense(TodoContainer)} />
            <Route exact path={'/todo/history'} render={withSuspense(History)} />
            <Route exact path={'/car/:id?'} render={withSuspense(CarContainer)} />
            <Route exact path={'/shop/cart'} render={() => <CartContainer />} />
            <Route exact path={'/shop/:brand?'} render={withSuspense(ShopContainer)} />
            {!props.isAuth && <Route exact path={'/login'} render={() => <LoginContainer />} />}
            {!props.isAuth && <Route exact path={'/registration'} render={() => <RegistrationContainer />} />}
            {props.isAuth && <Route exact path={'/account'} render={() => <AccountContainer />} />}
            <Redirect from={'/'} to={'/'} />
        </Switch>
    )
}

export default Routers