import React, { Component } from 'react'
import style from './NavLi.scss'

export default class extends Component {
	constructor(props) {
		super(props);
		this.getDate = this.getDate.bind(this);
		this.state = {test: 'Test'}
	}

	render() {

		let { children } = this.props;


		return (
			<li><a href="javascript:;" onClick={()=>this.getDate()} data-test={ this.state.test }>{ children }</a></li>
		)
	}

	getDate() {
		this.setState({
			test: this.props.children
		})
	}
}
