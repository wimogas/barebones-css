import React from "react";

import BorderRadius, { BorderRadiusProps } from "../index";

export default {
        title: "UTILITIES/BorderRadius",
        component: BorderRadius,
};

const Template: React.FC<BorderRadiusProps> = (args) => (
    <>
            <BorderRadius variant="0"/>
            <BorderRadius variant="100"/>
            <BorderRadius variant="300"/>
            <BorderRadius variant="500"/>
            <BorderRadius variant="700"/>
            <BorderRadius variant="900" round/>
    </>
);


export const All = Template.bind({});