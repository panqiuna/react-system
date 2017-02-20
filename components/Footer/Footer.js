import React, { Component } from 'react'
import style from './Footer.scss'
import NavLink from '../NavLink/NavLink'

export default class extends Component {
    render() {
        return (
            <div className={ style.footer }>
                <ul>
                    <NavLink to="/">点餐</NavLink>
                    <NavLink to="/order">我的订单</NavLink>
                    <NavLink to="/menu">菜单管理</NavLink>
                </ul>
            </div>
        )
    }    
}
