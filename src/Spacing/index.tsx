import React from "react";

export type SpacingProps = {
    variant: any
}
const Spacing = ({variant}: SpacingProps) => {

    return (
        <div className={`bb-white bb-bg-primary-500 ${variant}`} style={{"width":"fit-content", "height": "fit-content"}}>
            .{variant}
        </div>
    );
};

export default Spacing;
