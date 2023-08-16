import './App.css';
import { Route, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Nav from './components/Nav/nav';
import Home from './views/Home/home';
import About from './views/About/about';
import Detail from './views/Detail/detail';


export function App() {
  const location = useLocation();

  return (
    <div className='App'>
      { location.pathname !== "/" && <Nav/>}

      <Route exact path="/" component={Landing}/>

      <Route path="/home" component={Home}/>

      <Route path="/about" component={About}/>

      <Route path="/detail/:id" component={Detail}/>

      {/* <Route path="/create" component={Create}/> */}


    </div>
  );
}

export default App;
