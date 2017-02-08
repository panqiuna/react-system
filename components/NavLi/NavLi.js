import React, { Component } from 'react'
import style from './NavLi.scss'

export default class extends Component {
	render() {

		let { children } = this.props;

		console.log(this.props);

		return (
			<li><a href="javascript:;" onClick={()=>this.getDate()} >{ children }</a></li>
		)
	}
	getDate() {
		console.log(1);
	}
}
