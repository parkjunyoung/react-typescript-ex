import * as React from 'react';
import Counter from './components/Counter';
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
        <Counter test='10' />
        <TodoList test="h" />
      </div>
    );
  }
}

export default App;