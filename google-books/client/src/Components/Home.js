import React from "react";
import Nav from "./nav";
function home(){
    return (
        <div className="container">
            <Nav></Nav>
              <div className="content">
                <div className="homediv">
                  <h1 className="Homeheader">About</h1><hr></hr>
                  <p className="homepara">Well the creator of this application felt like going above and beyond the 2 pages so He made
                  a Third which clearly shows his mastery over this whole react thing. And he's also gonna style tf outta this and make it look
                  Fancy like include a border radius and a opacity which doesnt affect the text in any way, cause im a bad ass like that. did i forget 
                  to mention that this genius also didnt use bootstrap. a whole solo-dolo app.</p>

                  </div>
                </div>
          </div>
        
    )
}
export default home;