import React from "react";

export type BorderProps = {
    variant: any
}
const Border = ({variant}: BorderProps) => {

    return (
        <div className={`bb-w-100 bb-p-200 bb-mb-200 bb-border-1 bb-border-${variant}`}>
            .bb-border-{variant}
        </div>
    );
};

export default Border;
