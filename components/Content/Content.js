import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import style from './Content.scss'

export default class extends Component {
    render() {
        return (
            <div className={ style.content }>
                <Nav />
            </div>
        )
    }
}
