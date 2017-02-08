import React, { Component } from 'react'
import style from './Search.scss'

export default class extends Component {
	render() {
		return (
			<div className={ style.head }>
				<div className={ style['h-search'] }>
					<input type="text" name="search" className={ style.search } />
					<input type="submit" className={ style.btn } defaultValue=" " />
				</div>
			</div>
		)
	}
}
