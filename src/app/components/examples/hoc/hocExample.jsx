import React from "react";
import Component from "./someComponent";
// import LogOut from "./logOut";
import SimpleComponent from "./simpleComponent";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";
const HOCExample = () => {
    const ComponentWitрLogin = withLogin(Component)
    const ComponentWithPropStyles = withPropsStyles(Component)
    const NewComponent = withPropsStyles(ComponentWitрLogin)
    // const ButtonLogin = withLogin(myButton)
    // const SimpleComponentWithLogin = withLogin(LogOut)
    const SimpleComponentWithPropStyles = withPropsStyles(SimpleComponent)
    return (
        <>
            <CardWrapper>   
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWitрLogin />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <Divider />
                <ComponentWithPropStyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <Divider />
                <NewComponent />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>5. Home work</SmallTitle>
                <Divider />
                <SimpleComponentWithPropStyles />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
