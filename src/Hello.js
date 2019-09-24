import React from 'react'

const Hello = () => {
  React.useEffect(() => {
    console.log('render');

    return () => {
      console.log('unmount');
    }
  }, []);

  return <p>Hello</p>
}

export default Hello;