import React from 'react';
import {Link} from 'react-router-dom' 
import './header.css'

class Header extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div className="">
                <div className="header-wrapper">
                    <div></div>
                    <div className="header-left">
                        Tyler Konesky
                    </div>
                    <div className="header-right"> 
                        <Link to='/'>Home</Link>
                        <Link to='/AboutMe'>About Me</Link>
                        <Link to='/Projects'>Projects</Link>
                        <Link to='/Contact'>Contact</Link>
                    </div>

                </div>
                
                
            </div>
        )
    }
}

export default Header