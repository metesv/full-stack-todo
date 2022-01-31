import React from 'react';
import Input from './components/Input';
import List from './components/List';
import { Box } from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="App">
      <Box>
        <Input mode="create" />
        <List />
      </Box>
    </div>
  );
}

export default App;
