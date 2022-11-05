import react,{useState} from 'react'
export function Counter (){
    const [counter, setCounter] = useState(0)
    return (
        <>
        <h1>Count:{counter}</h1>
<button onClick={(()=>setCounter(counter+1))}>Increment</button>
<button onClick={(()=>setCounter(counter-1))}>Decrement</button>
        </>
    )
}
