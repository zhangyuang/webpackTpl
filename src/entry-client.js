import React from 'react'
import ReactDOM from 'react-dom'
import dva from 'dva'
import { browserHistory, Router } from 'dva/router'
import App from './App'

const app = dva({ browserHistory,
  initialState: {
    video: {
      videoArr: window.__INITIAL_DATA__ || []
    }
  }
})
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./model/video').default)

// 4. Router
app.router(function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <App />
    </Router>
  )
}
)

const Start = app.start()
ReactDOM.render(<Start />, document.getElementById('app'))
