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
const CompletedContainer = React.lazy(() => import('./container/CompletedContainer'))



const Routers = (props) => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Home />} />
            <Route exact path={'/todo/current'} render={withSuspense(TodoContainer)} />
            <Route exact path={'/todo/completed'} render={withSuspense(CompletedContainer)} />
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