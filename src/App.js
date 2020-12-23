import Header from './components/Header/Header'
import Home from './components/Home/Home'
import TodoContainer from './container/TodoContainer'
import History from './components/Todo/History/History'
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom'
import ContactUsContainer from './container/ContactUsContainer'
import ShopContainer from './container/ShopContainer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'} render={() => <Home />} />
        <Route exact path={'/todo'} render={() => <TodoContainer />} />
        <Route exact path={'/todo/history'} render={() => <History />}/>
        <Route exact path={'/shop/:brand?'} render={() => <ShopContainer />} />
        <Route path={'/contactus'} render={() => <ContactUsContainer />} />
        <Redirect from={'/'} to={'/'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
