import React, { Component } from 'react'
import style from './IndexList.scss'

export default class extends Component {
    render() { 

        let { title, content } = this.props;

        return (
            <li className={ style.lis }>
                <div className={ style.img }><img src="./components/IndexList/test.jpg" /></div>
                <div className={ style.info }>
                    <h3 className={ style.name }>{ title }</h3>
                    <p className={ style.p }>{ content }</p>
                </div>
                <span className={ style.add }></span>
            </li>
        )
    }
}