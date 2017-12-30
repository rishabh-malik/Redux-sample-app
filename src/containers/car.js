import React,{Component} from 'react'
import {connect} from 'react-redux'
import {carDetail} from '../actions'
import {bindActionCreators} from 'redux'

class Car extends Component{
    render(){
        return(
            <div>Car</div>
        )
    }
}

function mapStateToProps(state){
    return{
        car:state.carDetail
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({carDetail:carDetail},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Car);