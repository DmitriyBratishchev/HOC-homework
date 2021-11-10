import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        // console.log(inputRef);
        inputRef.current.focus()
    }
    const handleWider = () => {
        inputRef.current.style.width = `${inputRef.current.offsetWidth + 50}px`
    }
    const handleNarrow = () => {
        inputRef.current.style.width = `${inputRef.current.offsetWidth - 50}px`
    }
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={inputRef} id="email" className="form-control mb-3" type="email"></input>
            <button className="btn btn-secondary me-4" onClick={handleClick}>BUTTON</button>
            <button className="btn btn-warning me-2" onClick={handleNarrow}>-</button>
            <button className="btn btn-primary" onClick={handleWider}>+</button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
