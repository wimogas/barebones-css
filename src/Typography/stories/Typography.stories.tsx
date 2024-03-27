import React from "react";

export default {
        title: "UTILITIES/Typography",
};

const TemplateHeading: React.FC = (args) => (
    <>
        <h1 className="bb-h1">.bb-h1</h1>
        <h1 className="bb-h1-semibold">.bb-h1-semibold</h1>
        <h2 className="bb-h2">.bb-h2</h2>
        <h2 className="bb-h2-semibold">.bb-h2-semibold</h2>
        <h3 className="bb-h3">.bb-h3</h3>
        <h3 className="bb-h3-semibold">.bb-h3-semibold</h3>
        <h4 className="bb-h4">.bb-h4</h4>
        <h4 className="bb-h4-semibold">.bb-h4-semibold</h4>
        <h5 className="bb-h5">.bb-h5</h5>
        <h5 className="bb-h5-semibold">.bb-h5-semibold</h5>
    </>
);

const TemplateBody: React.FC = (args) => (
    <>
        <p className="bb-body-small-regular">.bb-body-small-regular</p>
        <p className="bb-body-small-semibold">.bb-body-small-semibold</p>
        <p className="bb-body-small-bold">.bb-body-small-bold</p>
        <p className="bb-body-medium-regular">.bb-body-medium-regular</p>
        <p className="bb-body-medium-semibold">.bb-body-medium-semibold</p>
        <p className="bb-body-medium-bold">.bb-body-medium-bold</p>
        <p className="bb-body-large-regular">.bb-body-large-regular</p>
        <p className="bb-body-large-semibold">.bb-body-large-semibold</p>
        <p className="bb-body-large-bold">.bb-body-large-bold</p>
    </>
);

const TemplateLink: React.FC = (args) => (
    <>
        <a className="bb-link-medium-regular">.bb-link-medium-regular</a>
            <br/>
        <a className="bb-link-medium-semibold">.bb-link-medium-semibold</a>
    </>
);

export const Heading = TemplateHeading.bind({});
export const Body = TemplateBody.bind({});
export const Link = TemplateLink.bind({});
