import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import withSuspense from './hoc/withSuspense'

import Home from './components/Home/Home'

import * as container from './container'

const TodoContainer = React.lazy(() => import('./container/TodoContainer'))
const DeletedContainer = React.lazy(() => import('./container/DeletedContainer'))

const Routers = ({ isAuth }) => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Home />} />
            <Route exact path={'/cars'} render={() => <container.CarsContainer />} />
            
            <Route exact path={'/todos'} render={withSuspense(TodoContainer)} />
            <Route exact path={'/todos/deleted'} render={withSuspense(DeletedContainer)} />

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