/* eslint strict: [0, "global"] */
/* eslint import/no-extraneous-dependencies: 0 */

'use strict';

const path = require('path');

const merge = require('webpack-merge');
const reactDoc = require('library-utils/react-doc');
const upperCamelCase = require('uppercamelcase');
const WEBPACK_BASE_TEMPLATE = require('./webpack.base');
const config = require('./src/index');

console.log(config);

const PORT = parseInt(process.env.PORT || 8080, 10);
const TITLE = 'arui-demo';

// Prepare styleguidist context https://react-styleguidist.js.org/docs/configuration.html#context
// For share example functionality
module.exports = {
    ...config,
    styleguideComponents: {
        StyleGuide$: path.resolve(__dirname, './src/styleguide/styleguide'),
        StyleGuideRenderer: path.resolve(__dirname, './src/styleguide/styleguide-renderer'),
        SectionHeadingRenderer: './src/section-heading/section-heading-renderer',
        Markdown: './src/markdown',
        Preview: './src/preview',
        Editor: './src/editor/editor',
        Pathline: './src/pathline',
        slots$: './src/slots',
        ReactComponent$: './src/react-component',
        ExamplePlaceholderRenderer: './src/example-placeholder',
        Logo: './src/logo'
    },
    require: [
        './src/global.css'
    ],
    title: TITLE,
    serverPort: PORT,
    skipComponentsWithoutExample: true,
    components: 'components/**/*.jsx',

    propsParser(filePath) {
        return reactDoc(filePath);
    },
    getComponentPathLine(filePath) {
        const componentDirName = path.dirname(filePath);
        const componentSourcesFileName = componentDirName.split(path.sep).pop();
        const componentName = upperCamelCase(componentSourcesFileName);

        return `import ${componentName} from '${TITLE}/${componentSourcesFileName}';`;
    },
    getExampleFilename(componentPath) {
        return path.resolve(path.dirname(componentPath), './README.md');
    },
    moduleAliases: {
        'rsg-components': path.resolve(__dirname, './node_modules/react-styleguidist/lib/client/rsg-components'),
        'arui-demo': path.resolve(__dirname, './src/')
    },
    ignore: ['**/*-test.jsx'],
    styleguideDir: path.resolve(__dirname, './demo/styleguide/'),
    webpackConfig: merge.smart(WEBPACK_BASE_TEMPLATE, {
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            disableHostCheck: true
        },
        module: {
            rules: [
                {
                    test: /\.(ico|xml)$/i,
                    loader: 'file-loader'
                },
                {
                    test: /\.tsx?/i,
                    loader: 'ts-loader'
                }
            ]
        }
    }),
    sections: [
        {
            title: 'Components',
            components: './components/**/*.jsx',
            sectionDepth: 1
        }
    ]
};
