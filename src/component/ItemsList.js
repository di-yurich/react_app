import React from "react";
import Item from "./Item"

class ItemsList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            list: [
                {title: "one"},
                {title: "two"},
                {title: "third"},
                {title: "fourth"},
                {title: "fifth"}
            ]
        };

    }

    getList(){
        return this.state.list.forEach( item => {<Item title = {item.title}/>})
        
        // <div>
        //     {this.state.list.forEach( item => {<Item title = {item.title}/>})}
        // </div>
                
    }
    render(){
        return(
            <div>{
                this.getList()
            }</div>
        )
    }
}

export default ItemsList;