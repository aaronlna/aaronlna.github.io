import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Fade.css'

export default class Fade extends CSSTransition {
  render() {
    return <CSSTransition {...this.props} classNames="fade" />;
  }
}
