import React, { Component } from 'react'
import style from './IndexListBox.scss'
import IndexList from '../IndexList/IndexList'

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            status: false
        }
    }

    componentDidMount() {
        fetch('test.json')
            .then(res => {
                if(res.ok) {
                    res.json().then(data => {
                        this.setState({
                            data: data.Test,
                            status: true
                        });
                    })
                } else {
                    console.log(res.status);
                }
            })
            .catch(error => console.log(error))
    }

    render() {

        let arr = this.state.data, newList = '';

        if(this.state.status) {
            newList = arr.map((data, index) => {
                return <IndexList key={ data.id } title={ data.name } content={ data.content }  />
            });
        }

        return (
            <div className={ style.box }>
                <ul>
                    { newList }
                </ul>
            </div>
        )
    }
}