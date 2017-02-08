import React, { Component } from 'react'
import NavLi from '../NavLi/NavLi'
import style from './Nav.scss'

export default class extends Component{
  render() {

    let arr = [];

    for(let i = 0; i < 2; i++) {
        arr.push(i);
    }

    let newList = arr.map((data) => {
        return <NavLi key={ data.toString() }>菜系{ data }</NavLi>;
    })

    return (
      <div className={ style.nav }>
        <div className={ style.title }>这里是标题哦</div>
        <div className={ style.lis }>
            <ul>
                { newList }
            </ul>
        </div>
      </div>
    )
  }
}
