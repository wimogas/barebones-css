import React from "react";

import Background, { BackgroundProps } from "../index";

export default {
        title: "UTILITIES/Background",
        component: Background,
};

const TemplatePrimary: React.FC<BackgroundProps> = (args) => (
    <>
            <Background variant="primary-50"/>
            <Background variant="primary-100"/>
            <Background variant="primary-200"/>
            <Background variant="primary-300"/>
            <Background variant="primary-400"/>
            <Background variant="primary-500"/>
            <Background variant="primary-600"/>
            <Background variant="primary-700"/>
            <Background variant="primary-800"/>
            <Background variant="primary-900"/>
    </>
);

const TemplateSecondary: React.FC<BackgroundProps> = (args) => (
    <>

            <Background variant="secondary-100"/>
            <Background variant="secondary-200"/>
            <Background variant="secondary-300"/>
            <Background variant="secondary-400"/>
            <Background variant="secondary-500"/>
            <Background variant="secondary-700"/>
            <Background variant="secondary-900"/>
    </>
);

const TemplateNeutral: React.FC<BackgroundProps> = (args) => (
    <>

            <Background variant="neutral-50"/>
            <Background variant="neutral-100"/>
            <Background variant="neutral-200"/>
            <Background variant="neutral-300"/>
            <Background variant="neutral-400"/>
            <Background variant="neutral-500"/>
            <Background variant="neutral-600"/>
            <Background variant="neutral-700"/>
            <Background variant="neutral-800"/>
            <Background variant="neutral-900"/>
    </>
);

const TemplateError: React.FC<BackgroundProps> = (args) => (
    <>
            <Background variant="error-50"/>
            <Background variant="error-100"/>
            <Background variant="error-200"/>
            <Background variant="error-300"/>
            <Background variant="error-500"/>
            <Background variant="error-600"/>
            <Background variant="error-700"/>
            <Background variant="error-800"/>
            <Background variant="error-900"/>
    </>
);

const TemplateSuccess: React.FC<BackgroundProps> = (args) => (
    <>
            <Background variant="success-50"/>
            <Background variant="success-100"/>
            <Background variant="success-200"/>
            <Background variant="success-500"/>
            <Background variant="success-600"/>
            <Background variant="success-700"/>
            <Background variant="success-800"/>
            <Background variant="success-900"/>
    </>
);

const TemplateWarning: React.FC<BackgroundProps> = (args) => (
    <>
            <Background variant="warning-50"/>
            <Background variant="warning-100"/>
            <Background variant="warning-500"/>
            <Background variant="warning-600"/>
            <Background variant="warning-700"/>
            <Background variant="warning-800"/>
            <Background variant="warning-900"/>
    </>
);

const TemplateInfo: React.FC<BackgroundProps> = (args) => (
    <>
            <Background variant="info-50"/>
            <Background variant="info-100"/>
            <Background variant="info-500"/>
            <Background variant="info-600"/>
            <Background variant="info-700"/>
            <Background variant="info-800"/>
            <Background variant="info-900"/>
    </>
);


export const Primary = TemplatePrimary.bind({});
export const Secondary = TemplateSecondary.bind({});

export const Neutral = TemplateNeutral.bind({});

export const Error = TemplateError.bind({});

export const Success = TemplateSuccess.bind({});

export const Warning = TemplateWarning.bind({});

export const Info = TemplateInfo.bind({});