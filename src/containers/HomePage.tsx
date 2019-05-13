import React from 'react';
import { RouteChildrenProps } from 'react-router';
import Splash from '../components/Splash';
import Fade from '../transitions/Fade';
import { TransitionGroup } from 'react-transition-group';

interface HomePageState {
  showPage: boolean;
  showSplash: boolean;
};

export default class HomePage extends React.Component<RouteChildrenProps, HomePageState> {
  state: HomePageState = {
    showPage: false,
    showSplash: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ showSplash: false }), 2500);
  }

  showPage = () => {
    this.setState({ showPage: true });
  }

  renderPage() {
    return <div />;
  }

  renderSplash() {
    return (
      <Fade appear onExited={this.showPage} timeout={700}>
        <Splash />
      </Fade>
    );
  }

  render() {
    return (
      <div className="page">
        <TransitionGroup component={null}>
          { this.state.showSplash && this.renderSplash() }
          { this.state.showPage && this.renderPage() }
        </TransitionGroup>
      </div>
    );
  }
}
