import React, { useRef } from "react";
export default function Temp() {

    let inp1 = useRef();
    let inp2 = useRef();
    let inp3 = useRef();
    let inp4 = useRef();

    let handleChange = (e, inp, inpB) => {
        if (e.target.value.length === 4) {
            inp.current.focus();
        }

        if (e.target.value.length === 0) {
            inpB.current.focus();
        }
    }



    return (
        <div>
            <h1>Card</h1>


            <input type="text" maxLength="4" onChange={(e) => handleChange(e, inp2, inp1)} ref={inp1} />
            <input type="text" maxLength="4" onChange={(e) => handleChange(e, inp3, inp1)} ref={inp2} />
            <input type="text" maxLength="4" onChange={(e) => handleChange(e, inp4, inp2)} ref={inp3} />
            <input type="text" maxLength="4" onChange={(e) => handleChange(e, inp4, inp3)} ref={inp4} />

        </div>
    )
}
