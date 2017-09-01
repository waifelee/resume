import React, { Component } from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import styles from './index.scss'

import Action from '../../action/action'
import Store from '../../store/store'

export default class SideBar extends Component {
    state = {
        i: 0,
        isHide: true
    };

    handleClick = (index) => {
        this.setState({
            i:index
        });
        if(!this.props.isPC){
            this.showSideBar();

        }
        Action.saveSideBarIndex(index)
    };

    showSideBar = () => {
        this.setState({
            isHide: !this.state.isHide
        })
    };
    render() {
        const { items,isPC } = this.props;
        const { i,isHide } = this.state;
        return (
            <div className={"pa "+`${isPC ? styles.sideBar : styles.sideBarPhone}`}>
                {isPC ? null : <i onClick={this.showSideBar}></i>}
                <ul style={{display: `${isHide && !isPC ? "none" : "block"}`}}>
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