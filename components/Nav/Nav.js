import React, { Component } from 'react'
import NavLi from '../NavLi/NavLi'
import style from './Nav.scss'
import Time from '../Time/Time'

export default class extends Component{
    render() {

        let arr = [];

        for(let i = 0; i < 4; i++) {
            arr.push(i);
        }

        let newList = arr.map((data) => {
            return <NavLi key={ data.toString() }>列表{ data }</NavLi>;
        })

        return (
          <div className={ style.nav }>
            <div className={ style.title }>当前时间：<Time /></div>
            <div className={ style.lis }>
                <ul>
                    { newList }
                </ul>
            </div>
          </div>
        )
    }
}
