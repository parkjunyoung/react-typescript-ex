import * as React from 'react';
import CounterContainer from './containers/CounterContainer';
import Profile from './components/Profile';
import TodoList from './components/TodoList';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile 
          name="사람"
          job="hello"
        />
        <CounterContainer />
        <TodoList test="h" />
      </div>
    );
  }
}

export default App;