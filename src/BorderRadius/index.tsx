import React from "react";

export type BorderRadiusProps = {
    variant: any,
    round?: boolean
}
const BorderRadius = ({variant, round}: BorderRadiusProps) => {

    return (
        <div
            className={`bb-w-100 bb-p-200 bb-mb-200 bb-border-1 bb-border-primary-500 bb-border-radius-${variant}`}
            style={round ? {
                "width" : "50px",
                "height" : "50px",
            } : {}}
        >
            .bb-border-radius-{variant}
        </div>
    );
};

export default BorderRadius;
