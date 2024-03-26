import React from "react";

export default {
        title: "LAYOUT/Block/Row",
};


const TemplateRow: React.FC = (args) => (

    <div className="bb-p-200 bb-bg-primary-900">
        <div className="bb-block-row-start">
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-start</div></div>
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-start</div></div>
        </div>
        <div className="bb-block-row-end">
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-end</div></div>
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-end</div></div>
        </div>
        <div className="bb-block-row-center">
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-center</div></div>
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-center</div></div>
        </div>
        <div className="bb-block-row-between">
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-between</div></div>
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-between</div></div>
        </div>
        <div className="bb-block-row-around">
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-around</div></div>
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-around</div></div>
        </div>
        <div className="bb-block-row-evenly">
            <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-evenly</div></div>
        <div className="bb-block"><div className="bb-bg-primary-500 bb-m-200">bb-block-row-evenly</div></div>
        </div>
    </div>

);

export const Row = TemplateRow.bind({});
