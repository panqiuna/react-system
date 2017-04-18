import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class extends Component {
    render() {
        return (
            <div style={{ position: "relative", height: "850px", marginBottom: "50px" }}>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        <div key={ this.props.location.pathname } style={{ position: "absolute", top: "50px", left: "50%", width: "1200px", marginLeft: "-600px"}}>
                            {this.props.children}
                        </div>
                </ReactCSSTransitionGroup>
                <Footer />
            </div>
        )
    }
} 