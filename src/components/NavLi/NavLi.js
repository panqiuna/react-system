import React, { Component } from 'react'
import style from './NavLi.scss'

export default class extends Component {
	constructor(props) {
		super(props);
		this.getDate = this.getDate.bind(this);
	}

	render() {

		let { children } = this.props;


		return (
			<li><a href="javascript:;" onClick={()=>this.getDate()} data-test={ this.props.test }>{ children }</a></li>
		)
	}

	getDate() {
		this.setState({
			test: this.props.children
		})
	}
}
