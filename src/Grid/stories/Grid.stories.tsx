import React from "react";

export default {
        title: "LAYOUT/Grid",
};

const blocks = ["1", "2", "3", "4", "5", "6", "7", "8"]

const TemplateGrid: React.FC = (args) => (
    <>
    <div className="bb-cols-2 bb-cols-sm-4 bb-cols-md-8">
        {blocks.map(block =>
            <div className="bb-block">
                <div className="bb-white bb-bg-primary-500 bb-m-200 bb-p-400">{block}</div>
            </div>)}
    </div>
    </>
);


export const Grid = TemplateGrid.bind({});