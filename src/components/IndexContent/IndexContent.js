import React, { Component } from 'react'
import style from './IndexContent.scss'
import IndexNav from '../IndexNav/IndexNav'
import Search from '../Search/Search'
import IndexListBox from '../IndexListBox/IndexListBox'

export default class extends Component {
    render() {
        return (
            <div className={ style.content }>
                <Search />
                <div className={ style.left }>
                    <IndexNav />
                </div>
                <div className={ style.right }>
                    <IndexListBox />
                </div>
            </div>
        )
    }
}
