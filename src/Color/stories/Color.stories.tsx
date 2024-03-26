import React from "react";

import Color, { ColorProps } from "../index";

export default {
  title: "UTILITIES/Color",
  component: Color,
};

const TemplatePrimary: React.FC<ColorProps> = (args) => (
    <>
        <Color variant="primary-50"/>
        <Color variant="primary-100"/>
        <Color variant="primary-200"/>
        <Color variant="primary-300"/>
        <Color variant="primary-400"/>
        <Color variant="primary-500"/>
        <Color variant="primary-600"/>
        <Color variant="primary-700"/>
        <Color variant="primary-800"/>
        <Color variant="primary-900"/>
    </>
);

const TemplateSecondary: React.FC<ColorProps> = (args) => (
    <>
        <div className={"bb-bg-neutral-500"}>
            <Color variant="secondary-100"/>
            <Color variant="secondary-200"/>
            <Color variant="secondary-300"/>
        </div>
        <Color variant="secondary-400"/>
        <Color variant="secondary-500"/>
        <Color variant="secondary-700"/>
        <Color variant="secondary-900"/>
    </>
);

const TemplateNeutral: React.FC<ColorProps> = (args) => (
    <>
        <div className={"bb-bg-neutral-500"}>
            <Color variant="neutral-50"/>
            <Color variant="neutral-100"/>
            <Color variant="neutral-200"/>
            <Color variant="neutral-300"/>
        </div>
            <Color variant="neutral-400"/>
            <Color variant="neutral-500"/>
            <Color variant="neutral-600"/>
            <Color variant="neutral-700"/>
            <Color variant="neutral-800"/>
            <Color variant="neutral-900"/>
    </>
);

const TemplateError: React.FC<ColorProps> = (args) => (
    <>
        <div className={"bb-bg-neutral-500"}>
            <Color variant="error-50"/>
            <Color variant="error-100"/>
        </div>
        <Color variant="error-200"/>
        <Color variant="error-300"/>
        <Color variant="error-500"/>
        <Color variant="error-600"/>
        <Color variant="error-700"/>
        <Color variant="error-800"/>
        <Color variant="error-900"/>
    </>
);

const TemplateSuccess: React.FC<ColorProps> = (args) => (
    <>
        <div className={"bb-bg-neutral-500"}>
            <Color variant="success-50"/>
            <Color variant="success-100"/>
        </div>
        <Color variant="success-200"/>
        <Color variant="success-500"/>
        <Color variant="success-600"/>
        <Color variant="success-700"/>
        <Color variant="success-800"/>
        <Color variant="success-900"/>
    </>
);

const TemplateWarning: React.FC<ColorProps> = (args) => (
    <>
        <div className={"bb-bg-neutral-500"}>
            <Color variant="warning-50"/>
            <Color variant="warning-100"/>
            <Color variant="warning-500"/>
        </div>
        <Color variant="warning-600"/>
        <Color variant="warning-700"/>
        <Color variant="warning-800"/>
        <Color variant="warning-900"/>
    </>
);

const TemplateInfo: React.FC<ColorProps> = (args) => (
    <>
        <div className={"bb-bg-neutral-500"}>
            <Color variant="info-50"/>
            <Color variant="info-100"/>
        </div>
        <Color variant="info-500"/>
        <Color variant="info-600"/>
        <Color variant="info-700"/>
        <Color variant="info-800"/>
        <Color variant="info-900"/>
    </>
);


export const Primary = TemplatePrimary.bind({});
export const Secondary = TemplateSecondary.bind({});

export const Neutral = TemplateNeutral.bind({});

export const Error = TemplateError.bind({});

export const Success = TemplateSuccess.bind({});

export const Warning = TemplateWarning.bind({});

export const Info = TemplateInfo.bind({});