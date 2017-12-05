import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

/** MEMO: 子コンポーネントで connect() を使用するために、ルートコンポーネントを <Provider> で包む */
/** MEMO: react-redux をインストールしたことで、 <Provider> 以外が store を明示的に参照しなくなった */
ReactDOM.render((
  <div>
    <Provider store={store}>
      <Router>
        <Route path='/:filter?' component={App} />
      </Router>
    </Provider>
  </div>
), document.getElementById('root'));

/** MEMO: store.subscribe() は <Provider> が実行してくれるため不要になります。 */

registerServiceWorker();
