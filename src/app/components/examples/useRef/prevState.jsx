import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const refCount = useRef(0);

    const prevState = useRef("");
    const [state, setState] = useState("false");
    useEffect(() => {
        refCount.current++;
    });
    useEffect(() => {
        prevState.current = state;
    }, [state]);
    const toggleBtn = () => {
        setState(prev => prev === "false" ? "true": "false");
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Render count: {refCount.current}</p>

            <p>prevState: {prevState.current}</p>
            <p>state: {state}</p>
            <button className="btn btn-primary" onClick={toggleBtn}>render</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
