import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (nextPathname !== history.location.pathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname,
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
