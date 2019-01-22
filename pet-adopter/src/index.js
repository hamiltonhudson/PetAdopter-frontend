import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Dashboard from './Dashboard';
import Signin from './components/Signin'
import Signup from './components/Signup'
// import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
//npm add semantic-ui-css

// const routing = (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/pets">Pets</Link>
//         </li>
//       </ul>
//       <Route exact path="/" component={App} />
//       {/* <Route path="/pets" component={PetContainer} /> */}
//     </div>
//   </Router>
// )

ReactDOM.render(<Router><Fragment> <Route path='/' exact component={Dashboard}/> <Route path='/signin' component={Signin}/> <Route path='/signup' component={Signup}/> </Fragment></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
