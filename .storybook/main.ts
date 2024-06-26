const path = require("path");

import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../src/Intro.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
      },
    },
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      module.exports = {
        module: {
          rules: [
            {
              test: /\.scss$/,
              use: [
                {
                  loader: "style-loader"
                },
                {
                  loader: "css-loader"
                },
                {
                  loader: "sass-loader",
                  options: {
                    javascriptEnabled: true
                  }
                }
              ],
              include: path.resolve(__dirname, "../")
            },
            {
              test: /\.png$/,
              use: [
                {
                  loader: "file-loader"
                },
              ],
            }
          ]
        }
      };
    }

    const imageRule = config.module?.rules?.find(rule => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })



    return config;
  },
};
export default config;
