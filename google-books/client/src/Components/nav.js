import React from "react";
import {Link} from "react-router-dom";
function nav(){
    return (
    <nav className="nav">
        <Link to="/search"><p className="navitem">Search Books <i class="fas fa-book"></i></p></Link>
        <Link to="/saved"><p className="navitem" >Archived Books <i class="far fa-bookmark"></i></p></Link>
        <Link to="/"><p className="navitem" >Home <i class="fas fa-home"></i></p></Link>
    </nav>
    )
}
export default nav;