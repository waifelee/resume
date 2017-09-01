import React, { Component } from 'react'
import styles from './index.scss'

class ScrollAnimation extends Component {

    render() {
        const { isPC } = this.props;
        return (
            <div className={"pa "+ styles.cont} style={{display: `${isPC? "block" : "none"}`}}>
                <span><i></i></span>
            </div>
        )
    }
}
export default ScrollAnimation