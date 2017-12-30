import React,{Component} from 'react'
import {connect} from 'react-redux'
import {carDetail} from '../actions'
import {bindActionCreators} from 'redux'

class Car extends Component{

    componentWillMount(){
        this.props.carDetail(this.props.match.params.id)
    }

    render(){
        return(
            <div>Car</div>
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