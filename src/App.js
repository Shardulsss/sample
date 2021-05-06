
import Home from './components/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home /></Route>
          </Switch>
        </BrowserRouter>
        
        
    </div>
  );
}

export default App;
