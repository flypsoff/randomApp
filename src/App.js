import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header/Header'
import Routers from './Routers'
import { authorization } from './actions/users'

function App() {
  const isAuth = useSelector(state => state.user.isAuth) 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authorization())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <Header isAuth={isAuth} />
      <Routers isAuth={isAuth} />
    </BrowserRouter>
  )
}

export default App
