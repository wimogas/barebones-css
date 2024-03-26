import React from "react";

export default {
        title: "LAYOUT/Grid",
};

const TemplateGrid: React.FC = (args) => (
    <div className="bb-col-12">
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-col-12</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-col-12</div></div>
    </div>
);


export const Grid = TemplateGrid.bind({});