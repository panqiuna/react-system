import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import redux from 'react-redux'

import Base from './pages/base'
import Index from './pages/index'
import Order from './pages/order'
import Menu from './pages/menu'

import es6Promise from 'es6-promise';
es6Promise.polyfill();

render((
	<Router history={hashHistory}>
		<Route path="/" component={Base}>
			<IndexRoute component={Index} />
			<Route path="/order" component={Order} />
			<Route path="/menu" component={Menu} />
		</Route>
	</Router>
), document.getElementById('app'))