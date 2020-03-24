import React from 'react';
import {Link} from 'react-router-dom' 

class Header extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div>
                Header
                <Link to='/'>Home</Link>
                <Link to='/AboutMe'>About Me</Link>
                <Link to='/Projects'>Projects</Link>
            </div>
        )
    }
}

export default Header