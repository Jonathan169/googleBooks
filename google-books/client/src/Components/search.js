import React from "react";
import API from "../api";
import Nav from "./nav";

class search extends React.Component{
    state={
        results:[],
        query:""
    }
    getBooks=event=>{
        event.preventDefault();
        API.getBooks(this.state.query).then(data=>{
            console.log(data);
            this.setState({results:data})
        })
    }
    saveBook=(book)=>{
        API.saveBook(book).then(data=>{console.log(data) })
    }
    handleChange=(event)=>{
        event.preventDefault();
        console.log(event.target)
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        const {results}= this.state;
        return(
            <div className="container">
                <Nav></Nav>
                <div className="content">
                    <div className="searchbody">
                        <div className="searchnav">
                            <input type="text" className="searchbar" placeholder="Search" onChange={this.handleChange}
                             name="query" value={this.state.query} />
                            <button className="searchButton" onClick={this.getBooks}>Search</button>
                        </div>
                        <hr></hr>
                        <h2 className="heads">Results</h2>
                        <div className="searchResults">
                            {results.map((book,i)=>{return(
                                <div className="result-item" onClick={this.saveBook}>
                                <img src={book.url} alt={"index"+i} /><p className="title">{book.title}</p>
                                 <p className="summary">{this.getBooks.sum}</p>
                                </div>
                            )})||<h1>No results</h1>}
                        </div>
            
                    </div>
              </div>
            </div>
        )
    }
}
export default search;