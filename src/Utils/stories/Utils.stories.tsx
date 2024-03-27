import React from "react";

export default {
        title: "LAYOUT/Utils",
};

const TemplateGrid: React.FC = (args) => (
    <>
            <div className="bb-cols-2 bb-cols-sm-4 bb-cols-md-8"></div>
    </>
);

export const Grid = TemplateGrid.bind({});