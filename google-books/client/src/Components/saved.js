import React from "react";
import api from "../api";
import Nav from "./nav";

class saved extends React.Component{
state={
    saved:[]
}
componentDidMount(){
    this.getBooks()
}
getBooks=()=>{
    api.savedBooks().then((data)=>{
        this.setState({saved:data})
    })
}
render(){
    const {saved}=this.state;
    return(
        <div className="container">
            <Nav></Nav>
            <div className="content">
                <div className="homediv">
                    <div className="savedNav">
                        <p className="header">Archived</p>
                    </div>
                    <hr></hr>
                    <div className="searchResults">
                        {saved.map((book,i)=>{return(
                            <div className="result-item" onClick={this.saveBook}>
                            <img src={book.url} alt={"index"+i}/><p className="title">{book.title}</p>
                            <p className="summary">{this.getBooks.sum}</p>
                            </div>
                        )})||<h1>No Books saved</h1>}
                    </div>

                </div>
            </div>
        </div>

        
    )
}

}

export default saved;