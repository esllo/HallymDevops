import { Fragment } from 'react';

const Scripter = props => {
  if (process.browser) {
    if (window.Animator) {
      window.Animator.updateRequest();
    }
  }
  return <Fragment></Fragment>;
};

export default Scripter;
