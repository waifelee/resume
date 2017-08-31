import React,{ Component } from 'react'

import styles from './index.scss'
class Home extends Component{
    state = {
        name: "WaiFu",
        text: ["PERSONAL","WEB RESUME"]
    };
    render(){
        const { name,text } = this.state;
        return(
            <div className="pr">
                <div className={"bg gray "+styles.bg}></div>
                <div className="black pa"></div>
                <section>
                    <div className={"pa "+styles.triangle}></div>
                    <div className={"pa "+styles.line}></div>
                    <div className={"pa "+styles.white}></div>
                    <div className={"pa "+styles.yellow}></div>
                    <div className={"pa "+styles.c}>
                        <h1>{name}</h1>
                        {
                            text.map((item,index) =>
                            <p key={index}>{item}</p>
                            )
                        }
                        <i>
                            <b className={styles.b0}>></b>
                            <b className={styles.b1}>></b>
                            <b className={styles.b2}>></b>
                            <b className={styles.b3}>></b>
                            <b className={styles.b4}>></b>
                        </i>
                        <div className={"gray pa "+styles.user}></div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Home