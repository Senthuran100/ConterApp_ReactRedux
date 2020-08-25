import React from 'react'
import { connect } from 'react-redux'
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './store';

let Hello = (props) => {
    const add = () =>{
        const count = 'count' + props.count;
        props.update(count)
    }
    return (
        <div>
            <h1>Hello Counter ! {props.count}</h1>
            <h2>Push Data {props.data.length}</h2>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={add}>Push</button>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
        data: state.tester
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => { dispatch({ type: COUNTER_INCREMENT }) },
        decrement: () => { dispatch({ type: COUNTER_DECREMENT }) },
        update: (data) =>{dispatch({ type: 'push', value: data })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);


