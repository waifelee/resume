import React,{ Component } from 'react'
import styles from './index.scss'

class Contact extends Component{

    render(){
        const { isPC } = this.props;
        return(
            <div className="pr">
                <div className={"bg gray "+styles.bg}></div>
                <div className="black pa"></div>
                <section>
                    <div className={"pa "+ `${isPC ? styles.cont : styles.contPhone}`}>
                        <h1>CONTACT <br/>
                            <b>FOR ME</b></h1>
                        <ul>
                            <li>TEL:15986737846</li>
                            <li>E-MAIL:liwaifuy@sina.com</li>
                            <li>深圳·宝安区</li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
export default Contact