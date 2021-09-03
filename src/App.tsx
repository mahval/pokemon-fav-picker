import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MainContainer } from './styled-components/styled-components'
import Welcome from './pages/welcome/Welcome'
import ErrorPage from './pages/error/Errorpage'

const App = () => (
    <React.StrictMode>
        <Router>
            <MainContainer>
                <Switch>
                    <Route exact={true} path="/">
                        <Welcome />
                    </Route>
                    <Route component={ErrorPage} />
                </Switch>
            </MainContainer>
        </Router>
    </React.StrictMode>
)

export default App
