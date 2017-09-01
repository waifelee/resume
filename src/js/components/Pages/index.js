import React,{ Component } from 'react'
import Home from './Home'
import About from './About'
import Works from './Works'
import Contact from './Contact'

import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import Action from '../../action/action'
import Store from '../../store/store'

export default class Pages extends Component{
    state = {
        isTouchMove: false,
        startX: 0,
        startY: 0,
    };
    touchStart = (e) => {
        let touches = e.touches[0];
        this.setState({
            startX: touches.clientX,
            startY: touches.clientY,
        })
    };
    touchMove = (e) => {
        this.setState({
            isTouchMove : true
        });
        e.preventDefault();
    };
    touchEnd = (e) => {
        let touches = e.changedTouches[0],
            endX = touches.clientX,
            endY = touches.clientY,
            distanceX = this.state.startX - endX,
            distanceY = this.state.startY - endY,
            { hei,top,len } = this.props,
            i = 0 ;
        if(Math.abs(distanceX) <= Math.abs(distanceY)){
            if(distanceY > 20 && top > -(len-1)*hei){
                //向上
                i = -(top-hei)/hei;
                Action.saveSideBarIndex(i)
            }else if(distanceY < -20 && top < 0){
                //向下
                i = -(top+hei)/hei;
                Action.saveSideBarIndex(i)
            }
        }
    };
    render(){
        const { top,hei,len,isPC } = this.props;
        return(
            <div className="pa h100 content" style={{top: `${top}px`}}
                 onTouchStart={this.touchStart.bind(this)}
                 onTouchMove={this.touchMove.bind(this)}
                 onTouchEnd={this.touchEnd.bind(this)}>
                <Home isPC={isPC} />
                <About isPC={isPC} />
                <Works isPC={isPC} />
                <Contact isPC={isPC} />
            </div>
        )
    }
}
ReactMixin.onClass(Pages,Reflux.connect(Store));