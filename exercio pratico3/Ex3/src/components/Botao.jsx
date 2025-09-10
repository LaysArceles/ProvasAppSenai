import { useState } from "react"

export const Botao = () => {
    const [count,setcount] = useState(0)

    const resultmenos = () => {
        setcount(count => count - 1)
    }
    const resultmais = () =>{
        setcount(count => count + 1)
    }
    return (
        <div>
            <button onClick={resultmais}>+</button>
            Count {count}
             <button onClick={resultmenos}>-</button>
        </div>
    );
};