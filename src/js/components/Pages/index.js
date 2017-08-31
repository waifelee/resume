import React,{ Component } from 'react'
import Home from './Home'
import About from './About'
import Works from './Works'
import Contact from './Contact'



class Pages extends Component{
    render(){
        const { top } = this.props;
        return(
            <div className="pa h100 content" style={{top: `${top}px`}}>
                <Home />
                <About />
                <Works />
                <Contact />
            </div>
        )
    }
}
export default Pages