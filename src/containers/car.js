import React,{Component} from 'react'
import {connect} from 'react-redux'
import {carDetail} from '../actions'
import {bindActionCreators} from 'redux'

class Car extends Component{

    componentWillMount(){
        this.props.carDetail(this.props.match.params.id)
    }

    renderDetail=({detail})=>{
        if(detail){
            return detail.map((item)=>{
                return(
                    <div key={item.id} className="car_detail">
                    <img src={`/images/${item.image}`} alt="a"/>
                    <div>
                        <h2>{item.model}</h2>
                        <h4>{item.brand}</h4>
                        <p>
                            {item.description}
                        </p>   
                    </div>    
                    </div>   
                )
            })
        }
    }

    render(){
        return(
            <div>
                {this.renderDetail(this.props.carDetail)}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        carDetail:state.carDetail
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({carDetail:carDetail},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Car);