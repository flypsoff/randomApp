import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Todo from './components/Todo/Todo'
import Other from './components/Other/Other'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={'/'} exact render={() => <Home />} />
        <Route path={'/todo'} render={() => <Todo />} />
        <Route path={'/shop'} render={() => <Shop />} />
        <Route path={'/other'} render={() => <Other />} />
        <Redirect from={'/'} to={'/'}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
