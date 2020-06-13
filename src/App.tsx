import React from 'react';
import './App.css';

import { useSnackbar } from 'notistack';

const MyComponent = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClick = () => {
    enqueueSnackbar('Success');
};
 return (
  <button onClick={handleClick}>Show snackbar</button>
 );
};

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
