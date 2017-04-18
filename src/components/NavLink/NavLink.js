import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './NavLink.scss'

export default class extends Component {
    render() {
        return (
            <li><Link { ...this.props } activeClassName={ style.current } onlyActiveOnIndex={ true } className={ style.link } ></Link></li>
        )
    }
}