import React, { Component } from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import styles from './index.scss'

import Action from '../../action/action'
import Store from '../../store/store'

export default class SideBar extends Component {
    state = {
        i: 0
    };

    handleClick = (index) => {
        this.setState({
            i:index
        });
        Action.saveSideBarIndex(index)
    };

    render() {
        const { items } = this.props;
        const { i } = this.state;
        return (
            <div className={"pa "+styles.sideBar}>
                <ul>
                    {items.map((item,index) =>
                    <li key={index}
                        className={i === index ? styles.active : ""}
                        onClick={this.handleClick.bind(this,index)}
                    >
                        {item}
                    </li>
                    )}
                </ul>
            </div>
        )
    }
}
ReactMixin.onClass(SideBar,Reflux.connect(Store));