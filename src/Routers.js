import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import withSuspense from './hoc/withSuspense'

import Home from './components/Home/Home'

import * as container from './container'

const ShopContainer = React.lazy(() => import('./container/ShopContainer'))
const TodoContainer = React.lazy(() => import('./container/TodoContainer'))
const CompletedContainer = React.lazy(() => import('./container/CompletedContainer'))

const Routers = (props) => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Home />} />
            { props.isAuth 
                ? <Route exact path={'/todo/current'} render={withSuspense(TodoContainer)} />
                : <Redirect from={'/todo/current'} to={'/login'} />
            }
            { props.isAuth
                ? <Route exact path={'/todo/completed'} render={withSuspense(CompletedContainer)} />
                : <Redirect from={'/todo/completed'} to={'/login'} />
            }
            { props.isAuth
                ? <Route exact path={'/account'} render={() => <container.AccountContainer />} />
                : <Redirect from={'/account'} to={'/login'} />
            }

            {!props.isAuth && <Route exact path={'/login'} render={() => <container.LoginContainer />} />}
            {!props.isAuth && <Route exact path={'/registration'} render={() => <container.RegistrationContainer />} />}

            <Route exact path={'/car/:id?'} render={withSuspense(container.CarContainer)} />
            <Route exact path={'/shop/cart'} render={() => <container.CartContainer />} />
            <Route exact path={'/shop/:brand?'} render={withSuspense(ShopContainer)} />
            
            <Redirect from={'/'} to={'/'} />
        </Switch>
    )
}

export default Routers