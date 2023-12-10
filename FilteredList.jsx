import React, { Component } from 'react';  import {DropdownButton, MenuItem} from 'react-bootstrap' ;
import List

from './List';

class FilteredList extends Component {
	constructor(props) {

	 super(props);

	 this.state = {

search: ""
type: "All"
	};
}
onSearch = (event) => {
this.setState({search: event.target.value.toLowerCase()});

}
onFilter = (event) => {
    this.setState({ type: event });
  }
filterItem = (item) => { 

 const searchMatch = item.name.toLowerCase().search(this.state.search) !== -1;
 const typeMatch = this.state.type === "All" || item.type.toLowerCase() === this.state.type.toLowerCase();
    
 return searchMatch && typeMatch;
 }

 render(){
  return(
   <div className="filter-list">

    <h1>Produce Search</h1>
    <DropdownButton title={`Filter by ${this.state.type}`} id="dropdown">
          <MenuItem onClick={() => this.onFilter("All")}>All</MenuItem>
          <MenuItem onClick={() => this.onFilter("Fruit")}>Fruit</MenuItem>
          <MenuItem onClick={() => this.onFilter("Vegetable")}>Vegetable</MenuItem>
    </DropdownButton>

    <input type="text" placeholder="Search" onChange={this.onSearch} />

    <List items={this.props.items.filter(this.filterItem)} /> 
    </div>

   );
  }
 }
export default FilteredList;