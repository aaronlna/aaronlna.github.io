import React from 'react';
import { BrowserRouter, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './containers/HomePage'
import './App.css';

class App extends React.Component<RouteComponentProps> {
  shouldComponentUpdate(nextProps: { location: { pathname: string } }) {
    return this.props.location.pathname !== nextProps.location.pathname;
  }

  render() {
    let { location } = this.props;
    return (
      <TransitionGroup className="container">
        <CSSTransition classNames="page" key={location.key} timeout={700}>
          <Switch location={location}>
            <Route component={HomePage} exact path="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default function AppWithRouter() {
  const AppWithRouter = withRouter(App);
  return <BrowserRouter><AppWithRouter /></BrowserRouter>;
}
