import React,{ Component } from 'react'
import styles from './index.scss'

class About extends Component{
    state = {
        name: "WaiFu",
        text: ["1989.02.09","good good study,day day up"],
        about: {
            title: ["WEB","ENGINNEER"],
            cont: ["熟悉使用HTML5、CSS3、JS，能准确还原设计稿，提升兼容性,友好性和易用性",
                "理解MVC&MMVM设计模式，熟悉React技术栈。了解前端工程化，模块化，前后端分离",
                "熟悉响应式、自适应布局，移动端开发",
                "了解ES6语法，了解less、sass等CSS语言格式，了解Node.js",
                "会点设计，有点审美能力，重视用户体验"]
        }
    };
    render(){
        const { name,text,about } = this.state;
        const { isPC } = this.props;
        return(
            <div className="pr">
                <div className={"bg gray "+styles.bg}></div>
                <div className="black pa"></div>
                <section>
                    <div className={"pa "+`${isPC ? styles.cont : styles.contPhone}`}>
                        <div className={styles.left}>
                            <div>
                                <div className={"pa gray bg "+styles.bg2}>
                                    <div className="black pr"></div>
                                </div>
                                {isPC? <div className={"pa "+styles.text}>
                                    <h2>{name}</h2>
                                    <p>{text[0]}<br/>
                                        {text[1]}</p>
                                </div> :
                                null}

                            </div>
                        </div>
                        <div className={styles.right}>
                            <h1>{about.title[0]}<b>{about.title[1]}</b></h1>
                            {
                                about.cont.map((item,index)=>
                                index< about.cont.length-1 ?
                                    <p key={index}>{`${index+1}.${item}。`}</p>:
                                    <p key={index} style={{marginTop: `40px`}}>{item}</p>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default About