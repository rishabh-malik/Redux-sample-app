import React,{Component} from 'react'

class Search extends Component{
    constructor(props){
        super(props);

        this.state={
            keyword:''
        }
    }

    searchCars=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }

    handleChange=(event)=>{
        this.setState({
            keyword:event.target.value
        })
    }

    componentDidMount(){
        console.log(this.state)
    }

    render(){
        return(
            <div className="main_search">
            <form onSubmit={this.searchCars}>
                <input type="text" value={this.state.keyword} onChange={this.handleChange}/>
            </form>    
            </div>
        )
    }
}
export default Search;