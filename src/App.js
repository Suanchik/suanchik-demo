import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Prilouder from './components/coummon/Prilouder/Prilouder';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/Profile.Container';
import UsersContainer from './components/Users/Users.Container';
import { initialize } from './redux/appReducer';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import WithLaziSuspense from './Hoc/WithLaziSuspense';

const MessengerContainer = React.lazy(() => import('./components/Messages/Messenger.Container'));


class App extends React.Component {

  componentDidMount () {
    this.props.initialize()
  }
  render () {
    if(!this.props.initialised) {
      return <Prilouder/>
    } else {
      return (
        <div className="Start">
              <div className="Wrapper">
                  <HeaderContainer />
                  <NavBar />
                  <div className="Content">
                  <Route path='/Profile/:userId?' render = {() => <ProfileContainer/> }/>
                  <Route path='/Messenger' render = { WithLaziSuspense(MessengerContainer)}/>
                  <Route path='/People' render = {() => <UsersContainer/>} />
                  <Route path='/Login' render = {() => <Login/>} />
                  </div>
              </div>
          </div>   
      );
    }
  }
}

let MapStateToProps = (state) => {
  return {
    initialised: state.App.initialised,
  }
};


let AppContainer = compose(
  withRouter,
  connect(MapStateToProps, { initialize }),
)(App);

const SuanchikApp = (props) => {
  return <HashRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </HashRouter>
  
}


export default SuanchikApp;