import React from "react";

export default {
        title: "LAYOUT/Block/Column",
};

const TemplateColumnStart: React.FC = (args) => (
    <div className="bb-block-column-start bb-gap-200 bb-p-200 bb-bg-primary-900" style={{"height": "200px"}}>
        <div className="bb-bg-primary-500">bb-block-column-start</div>
        <div className="bb-bg-primary-500">bb-block-column-start</div>
        <div className="bb-bg-primary-500">bb-block-column-start</div>
    </div>
);

const TemplateColumnEnd: React.FC = (args) => (
    <div className="bb-block-column-end bb-gap-200 bb-p-200 bb-bg-primary-900" style={{"height": "200px"}}>
        <div className="bb-bg-primary-500">bb-block-column-end</div>
        <div className="bb-bg-primary-500">bb-block-column-end</div>
        <div className="bb-bg-primary-500">bb-block-column-end</div>
    </div>
);

const TemplateColumnCenter: React.FC = (args) => (
    <div className="bb-block-column-center bb-gap-200 bb-p-200 bb-bg-primary-900" style={{"height": "200px"}}>
        <div className="bb-bg-primary-500">bb-block-column-center</div>
        <div className="bb-bg-primary-500">bb-block-column-center</div>
        <div className="bb-bg-primary-500">bb-block-column-center</div>
    </div>
);

const TemplateColumnBetween: React.FC = (args) => (
    <div className="bb-block-column-between bb-gap-200 bb-p-200 bb-bg-primary-900" style={{"height": "200px"}}>
        <div className="bb-bg-primary-500">bb-block-column-between</div>
        <div className="bb-bg-primary-500">bb-block-column-between</div>
        <div className="bb-bg-primary-500">bb-block-column-between</div>
    </div>
);

const TemplateColumnAround: React.FC = (args) => (
    <div className="bb-block-column-around bb-gap-200 bb-p-200 bb-bg-primary-900" style={{"height": "200px"}}>
        <div className="bb-bg-primary-500">bb-block-column-around</div>
        <div className="bb-bg-primary-500">bb-block-column-around</div>
        <div className="bb-bg-primary-500">bb-block-column-around</div>
    </div>
);

const TemplateColumnEvenly: React.FC = (args) => (

        <div className="bb-block-column-evenly bb-gap-200 bb-p-200 bb-bg-primary-900" style={{"height": "200px"}}>
            <div className="bb-bg-primary-500">bb-block-column-evenly</div>
            <div className="bb-bg-primary-500">bb-block-column-evenly</div>
            <div className="bb-bg-primary-500">bb-block-column-evenly</div>
        </div>

);


export const ColumnStart = TemplateColumnStart.bind({});
export const ColumnEnd = TemplateColumnEnd.bind({});
export const ColumnCenter = TemplateColumnCenter.bind({});
export const ColumnBetween = TemplateColumnBetween.bind({});
export const ColumnAround = TemplateColumnAround.bind({});

export const ColumnEvenly = TemplateColumnEvenly.bind({});
