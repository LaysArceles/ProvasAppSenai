import { useState } from "react"

export const Digitar = () =>{
    const [Text,setText] = useState("text")

    return(
        <div>
            <input type="text"  placeholder="Digite um título novo" value={Text} onChange={(e) => setText(e.target.value)} />
            <h1>{Text}</h1>
        </div>

    )

}
