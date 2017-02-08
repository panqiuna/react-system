import React, { Component } from 'react'

import Content from '../components/Content/Content'
import Search from '../components/Search/Search'

export default class extends Component {
	render() {
		return (
			<div>
				<Search />
				<Content />
				{this.props.children}
			</div>
		)
	}
}
