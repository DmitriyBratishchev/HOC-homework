import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const refCount = useRef(0);
    const [btn, setBtn] = useState(false);
    const toggleBtn = () => {
        setBtn(!btn);
    };
    useEffect(() => {
        refCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <Divider />
            <p>Render count: {refCount.current}</p>
            <button className="btn btn-primary" onClick={toggleBtn}>render</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
