import React,{ Component } from 'react'
import styles from './index.scss'

class Works extends Component{
    state = {
        title: "WORKS",
        items: [
            {
                hasLink: false,
                hide: true,
                name: "qk",
                link:""
            },
            {
                hasLink: true,
                hide: true,
                name: "yd",
                link: "http://www.yd-finance.com/"
            }
        ]
    };
    handleMouseOver(index){
        var newItems = this.state.items;
        newItems[index].hide = false;
        this.setState({
            items : newItems
        })
    };
    handleMouseOut(index){
        var newItems = this.state.items;
        newItems[index].hide = true;
        this.setState({
            items : newItems
        })
    }
    render(){
        const { title,items } = this.state;
        const { isPC } = this.props;
        return(
            <div className="pr">
                <div className={"bg gray "+styles.bg}></div>
                <div className="black pa"></div>
                <section>
                    <div className={isPC? styles.cont : styles.contPhone}>
                        <h1>{title}</h1>
                        <ul>
                            {
                                items.map((item,index) =>
                                item.hasLink ?
                                    <li key={index}
                                        className={styles.yj}
                                        onMouseOver={this.handleMouseOver.bind(this,index)}
                                        onMouseOut={this.handleMouseOut.bind(this,index)}>
                                        <div style={{top: `${item.hide && isPC? "100%" : "0"}`}}>
                                            <div></div>
                                            <a target="_blank" href={item.link}>我是链接</a>
                                        </div>
                                    </li>:
                                    <li key={index}
                                        className={styles.qk}
                                        onMouseOver={this.handleMouseOver.bind(this,index)}
                                        onMouseOut={this.handleMouseOut.bind(this,index)}>
                                        <div style={{top: `${item.hide && isPC ? "100%" : "0"}`}}>
                                            <div></div>
                                            <span></span>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
export default Works