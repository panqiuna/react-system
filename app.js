import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Base from './pages/base'
import Index from './pages/index'
import About from './pages/about'

render((
	<Router history={browserHistory}>
		<Route path="/" component={Base}>
			<IndexRoute component={Index} />
			<Route path="/about" component={About} />
		</Route>
	</Router>
), document.getElementById('app'))
