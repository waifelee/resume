import React, { Component } from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import Action from '../action/action'
import Store from '../store/store'

import SideBar from '../components/SideBar/index'
import Pages from '../components/Pages/index'
import ScrollAnimation from '../components/ScrollAnimation/index'

import '../../styles/App.scss'
export default class App extends Component {

    state = {
        isPC:true,
        i: 0,
        items: ["首页","个人简介","工作内容","联系方式"],
        top: 0,
        hei: document.body.offsetHeight,
    };
    scrollFun= () => {
        const { items,hei,top } = this.state;
        var startTime = 0,
            endTime = 0;

        var delta = event.detail || (-event.wheelDelta);
        startTime = new Date().getTime();
        if((endTime-startTime)<-1000){
            if(top<=0 && top>=-(items.length-1)*hei){
                if(delta>0 && top>-(items.length-1)*hei ){
                    //向下
                    this.setState({
                        top: top -hei,
                        i: parseInt(-(top -hei)/hei)
                    })
                }
                if(delta<0 && top<0){
                    //向上

                    this.setState({
                        top:top + hei,
                        i: parseInt(-(top+hei)/hei)
                    })
                }
            }

            endTime = new Date().getTime()
        }else {
            event.preventDefault();
        }
        Action.saveSideBarIndex(this.state.i)
    };
    componentDidUpdate(){
        Action.getSideBarIndex();
    }

    componentDidMount(){
        if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
            document.addEventListener("DOMMouseScroll", this.scrollFun.bind(this), false);
        }
        else if (document.addEventListener) {
            document.addEventListener("mousewheel", this.scrollFun.bind(this), false);
        }
        else if (document.attachEvent) {
            document.attachEvent("onmousewheel", this.scrollFun.bind(this));
        }
        else {
            document.onmousewheel = this.scrollFun.bind(this);
        }
        if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))) {
            this.setState({
                isPC: false
            })
        }
        else {
            this.setState({
                isPC: true
            })
        }

    }
    render(){
        const { items,top,hei,i,isPC } = this.state;
        return (
            <div className={"pr h100"} >
                <Pages top={top}
                       hei={hei}
                       len={items.length}
                       isPC={isPC}
                />
                <SideBar items={items}
                         clicked={i}
                         isPC={isPC}
                />
                <ScrollAnimation isPC={isPC} />
            </div>
        )
    }
}
ReactMixin.onClass(App,Reflux.connect(Store));