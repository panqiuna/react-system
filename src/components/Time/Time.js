import React, { Component } from 'react'
import style from './Time.scss'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.updateTime(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    updateTime() {
        this.setState({
            date: new Date()
        });
    }

    render() {

        return(
            <span className={ style.time }>{ this.state.date.toLocaleTimeString() }</span>
        )
    }
}
