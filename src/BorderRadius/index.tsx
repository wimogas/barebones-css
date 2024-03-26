import React from "react";

export type BorderRadiusProps = {
    variant: any
}
const BorderRadius = ({variant}: BorderRadiusProps) => {

    return (
        <div className={`bb-w-100 bb-p-200 bb-mb-200 bb-border-1 bb-border-primary-500 bb-border-radius-${variant}`}>
            bb-border-radius-{variant}
        </div>
    );
};

export default BorderRadius;
