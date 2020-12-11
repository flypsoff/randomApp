import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import TodoContainer from './container/TodoContainer'
import Other from './components/Other/Other'
import History from './components/Todo/History/History'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'} render={() => <Home />} />
        <Route exact path={'/todo'} render={() => <TodoContainer />} />
        <Route exact path={'/todo/history'} render={() => <History />}/>
        <Route path={'/shop/:id?'}  render={() => <Shop />} />
        <Route path={'/other'} render={() => <Other />} />
        <Redirect from={'/'} to={'/'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
