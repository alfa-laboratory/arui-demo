/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */

import Editor from 'rsg-components/Editor';

/*
 * import CodeTabButton from './code-tab-button';
 * import CodeShareButton from './code-share-button';
 */

import ExamplesTab from './examples-tab';
import ExamplesTabButton from './examples-tab-button';

import DocsTab from './docs-tab';
import DocsTabButton from './docs-tab-button';

import RulesTab from './rules-tab';
import RulesTabButton from './rules-tab-button';

export const EXAMPLES_TAB = 'examples-view';
export const DOCS_TAB = 'docs-view';
export const RULES_TAB = 'rules-view';

export const CODE_VIEW = 'code-view';
export const DOCS_TAB_USAGE = 'rsg-usage';

export const EXAMPLE_TAB_CODE_EDITOR = 'rsg-code-editor';

export default (function () {
    const toolbar = [() => null];

    return {
        sectionToolbar: toolbar,
        componentToolbar: toolbar,
        exampleToolbar: toolbar,

        exampleTabButtons: [

        ],
        exampleTabs: [
            {
                id: EXAMPLE_TAB_CODE_EDITOR,
                render: Editor
            }
        ],
        docsTabButtons: [
            {
                id: EXAMPLES_TAB,
                render: ExamplesTabButton
            },
            {
                id: DOCS_TAB_USAGE,
                render: DocsTabButton
            },
            {
                id: RULES_TAB,
                render: RulesTabButton
            }
        ],
        docsTabs: [
            {
                id: EXAMPLES_TAB,
                render: ExamplesTab
            },
            {
                id: DOCS_TAB_USAGE,
                render: DocsTab
            },
            {
                id: RULES_TAB,
                render: RulesTab
            }
        ]
    };
});
