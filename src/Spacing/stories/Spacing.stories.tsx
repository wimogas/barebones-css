import React from "react";
import Spacing, {SpacingProps} from "../index";

export default {
        title: "UTILITIES/Spacing",
        component: Spacing,
};

const Template: React.FC<SpacingProps> = (args) => (
    <>
        <Spacing variant="bb-p-200 bb-m-200"/>
        <Spacing variant="bb-p-300 bb-m-300"/>
        <Spacing variant="bb-p-400 bb-m-400"/>
        <Spacing variant="bb-p-500 bb-m-500"/>

    </>
);

const TemplateResponsive: React.FC<SpacingProps> = (args) => (
    <>
            <Spacing variant="bb-p-sm-400 bb-p-md-900 bb-m-sm-400 bb-m-md-900"/>
            <Spacing variant="bb-p-sm-400 bb-p-md-900 bb-m-sm-400 bb-m-md-900"/>
    </>
);

const TemplateSides: React.FC<SpacingProps> = (args) => (
    <>
            <Spacing variant="bb-m-400 bb-pt-600"/>
            <Spacing variant="bb-m-400 bb-pb-600"/>
            <Spacing variant="bb-m-400 bb-pl-600"/>
            <Spacing variant="bb-m-400 bb-pr-600"/>
            <Spacing variant="bb-m-400 bb-px-600"/>
            <Spacing variant="bb-m-400 bb-py-600"/>
    </>
);

export const Padding = Template.bind({});
export const Responsive = TemplateResponsive.bind({});

export const Sides = TemplateSides.bind({});