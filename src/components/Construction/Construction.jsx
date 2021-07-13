import React from 'react';

const Construction = () => {
  return (
    <div id="Construction" style={styles.construction}>
      <span rol="img" aria-label="image">
        {' '}
        🚧 🚧 🚧{' '}
      </span>
      Website Under Construction
      <span rol="img" aria-label="image">
        {' '}
        🚧 🚧 🚧{' '}
      </span>
    </div>
  );
};
const styles = {
  construction: {
    background: 'gray',
    color: 'white',
    padding: '10px',
    position: 'fixed',
    zIndex: 3,
    width: '100%',
    fontSize: '15px',
  },
};
export default Construction;
