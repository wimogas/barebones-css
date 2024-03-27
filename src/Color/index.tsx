import React from "react";

export type ColorProps = {
    variant: any
}
const Color = ({variant}: ColorProps) => {

    return (
        <div className={`bb-w-100 bb-p-200 bb-${variant}`}>
            .bb-{variant}
        </div>
    );
};

export default Color;
