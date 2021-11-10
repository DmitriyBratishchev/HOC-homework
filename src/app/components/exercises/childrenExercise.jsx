import React from "react";
import CollapseWrapper from "../common/collapse";

const NumericList = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return (
            <div className="d-flex justify-content-start">
                <div
                    className="text-end me-1"
                    style={{ width: "2rem"}}
                >
                    {index + 1}.
                </div>
                {child}
            </div>
        )
    })
}

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumericList>
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
            </NumericList>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
