import { useState } from "react";
import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = ()=>{
    console.log('counter fn call');
    const [count,setCount] = useState(0);
   // let count = 0;

    const updateCount =(val)=>{
        if(val === '+'){
           setCount(count+1);
        }
        else{
            setCount(count-1);
        }
       
        console.log('count is ',count);
    }
    return (<div className = 'container'>
        <Message classname = 'alert alert-info' msg = "Counter App"/>
        <Message value ={count}classname = 'alert alert-warning' msg = "Counter Value is "/>
        <Button  fn = {updateCount} val = "+" classname = "btn btn-success me-2"/>
        <Button  fn = {updateCount} val = "-" classname = "btn btn-danger"/>
    </div>)
}