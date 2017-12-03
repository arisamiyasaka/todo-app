import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux'
import Home from './components/Home'
import Sub from './components/Sub'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

/** MEMO: 子コンポーネントで connect() を使用するために、ルートコンポーネントを <Provider> で包む */
/** MEMO: react-redux をインストールしたことで、 <Provider> 以外が store を明示的に参照しなくなった */
ReactDOM.render((
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/sub' component={Sub} />
        <Link to={''}>Home</Link>
        <Link to={'sub'}>Sub</Link>
      </div>
    </Router>
  </div>
), document.getElementById('root'));

/** MEMO: store.subscribe() は <Provider> が実行してくれるため不要になります。 */

registerServiceWorker();
