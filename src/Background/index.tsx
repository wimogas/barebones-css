import React from "react";

export type BackgroundProps = {
    variant: any
}
const Background = ({variant}: BackgroundProps) => {

    return (
        <div className={`bb-w-100 bb-p-200 bb-bg-${variant}`}>
            bb-bg-{variant}
        </div>
    );
};

export default Background;
