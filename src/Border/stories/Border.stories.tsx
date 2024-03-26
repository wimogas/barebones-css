import React from "react";

import Border, { BorderProps } from "../index";

export default {
        title: "UTILITIES/Border",
        component: Border,
};

const TemplatePrimary: React.FC<BorderProps> = (args) => (
    <>
            <Border variant="primary-50"/>
            <Border variant="primary-100"/>
            <Border variant="primary-200"/>
            <Border variant="primary-300"/>
            <Border variant="primary-400"/>
            <Border variant="primary-500"/>
            <Border variant="primary-600"/>
            <Border variant="primary-700"/>
            <Border variant="primary-800"/>
            <Border variant="primary-900"/>
    </>
);

const TemplateSecondary: React.FC<BorderProps> = (args) => (
    <>
            <div className={"bb-p-200 bb-mb-200 bb-bg-neutral-500"}>
                    <Border variant="secondary-100"/>
                    <Border variant="secondary-200"/>
            </div>
            <Border variant="secondary-300"/>
            <Border variant="secondary-400"/>
            <Border variant="secondary-500"/>
            <Border variant="secondary-700"/>
            <Border variant="secondary-900"/>
    </>
);

const TemplateNeutral: React.FC<BorderProps> = (args) => (
    <>
            <div className={"bb-p-200 bb-mb-200 bb-bg-neutral-500"}>
                    <Border variant="neutral-50"/>
                    <Border variant="neutral-100"/>
                    <Border variant="neutral-200"/>
            </div>
            <Border variant="neutral-300"/>
            <Border variant="neutral-400"/>
            <Border variant="neutral-500"/>
            <Border variant="neutral-600"/>
            <Border variant="neutral-700"/>
            <Border variant="neutral-800"/>
            <Border variant="neutral-900"/>
    </>
);

const TemplateError: React.FC<BorderProps> = (args) => (
    <>
            <div className={"bb-p-200 bb-mb-200 bb-bg-neutral-500"}>
                    <Border variant="error-50"/>
                    <Border variant="error-100"/>
            </div>
            <Border variant="error-200"/>
            <Border variant="error-300"/>
            <Border variant="error-500"/>
            <Border variant="error-600"/>
            <Border variant="error-700"/>
            <Border variant="error-800"/>
            <Border variant="error-900"/>
    </>
);

const TemplateSuccess: React.FC<BorderProps> = (args) => (
    <>
            <div className={"bb-p-200 bb-mb-200 bb-bg-neutral-500"}>
                    <Border variant="success-50"/>
                    <Border variant="success-100"/>
            </div>
            <Border variant="success-200"/>
            <Border variant="success-500"/>
            <Border variant="success-600"/>
            <Border variant="success-700"/>
            <Border variant="success-800"/>
            <Border variant="success-900"/>
    </>
);

const TemplateWarning: React.FC<BorderProps> = (args) => (
    <>
            <div className={"bb-p-200 bb-mb-200 bb-bg-neutral-500"}>
                    <Border variant="warning-50"/>
                    <Border variant="warning-100"/>
            </div>
                    <Border variant="warning-500"/>

            <Border variant="warning-600"/>
            <Border variant="warning-700"/>
            <Border variant="warning-800"/>
            <Border variant="warning-900"/>
    </>
);

const TemplateInfo: React.FC<BorderProps> = (args) => (
    <>
            <div className={"bb-p-200 bb-mb-200 bb-bg-neutral-500"}>
                    <Border variant="info-50"/>
                    <Border variant="info-100"/>
            </div>
            <Border variant="info-500"/>
            <Border variant="info-600"/>
            <Border variant="info-700"/>
            <Border variant="info-800"/>
            <Border variant="info-900"/>
    </>
);


export const Primary = TemplatePrimary.bind({});
export const Secondary = TemplateSecondary.bind({});

export const Neutral = TemplateNeutral.bind({});

export const Error = TemplateError.bind({});

export const Success = TemplateSuccess.bind({});

export const Warning = TemplateWarning.bind({});

export const Info = TemplateInfo.bind({});