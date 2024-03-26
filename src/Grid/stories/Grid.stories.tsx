import React from "react";

export default {
        title: "LAYOUT/Grid",
};

const TemplateGrid: React.FC = (args) => (
    <>
    <div className="bb-neutral-400">.bb-cols-3 .bb-cols-sm-6 .bb-cols-md-12</div>
    <div className="bb-cols-3 bb-cols-sm-6 bb-cols-md-12">
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block</div></div>
    </div>
    </>
);


export const Grid = TemplateGrid.bind({});