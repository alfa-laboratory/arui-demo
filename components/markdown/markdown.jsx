/* eslint import/no-extraneous-dependencies: 0 */

import Type from 'prop-types';
import { compiler } from 'markdown-to-jsx';

import Link from 'arui-feather/link';
import Paragraph from 'arui-feather/paragraph'; // instead of Para
import Heading from 'arui-feather/heading'; // instead of MarkdownHeading
import Checkbox from 'arui-feather/checkbox';

import Code from '../code';

import Blockquote from './blockquote';
import Pre from './pre';
import Hr from './hr';
import { Table, TableHead, TableBody, TableRow, TableCell } from './table';

import Rules from './rules';

// We’re explicitly specifying Webpack loaders here so we could skip specifying them in Webpack configuration.
// That way we could avoid clashes between our loaders and user loaders.
// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax, max-len
require('!!react-styleguidist/loaders/style-loader!react-styleguidist/loaders/css-loader!highlight.js/styles/tomorrow.css');

const baseOverrides = {
    a: {
        props: {
            className: 'examples__link',
            target: '_parent'
        }
    },
    h1: {
        component: Heading,
        props: {
            level: 1,
            size: 'xl',
            className: 'examples__heading examples__heading_size_l'
        }
    },
    h2: {
        component: Heading,
        props: {
            level: 2,
            size: 'l',
            className: 'examples__heading examples__heading_size_l'
        }
    },
    h3: {
        component: Heading,
        props: {
            level: 3,
            size: 'm',
            className: 'examples__heading examples__heading_size_m'
        }
    },
    h4: {
        component: Heading,
        props: {
            level: 4,
            size: 's',
            className: 'examples__heading examples__heading_size_s'
        }
    },
    h5: {
        component: Heading,
        props: {
            level: 5,
            size: 's',
            className: 'examples__heading examples__heading_size_s'
        }
    },
    h6: {
        component: Heading,
        props: {
            level: 6,
            size: 's',
            className: 'examples__heading examples__heading_size_s'
        }
    },
    p: {
        component: Paragraph,
        props: {
            className: 'examples__paragraph',
            semantic: 'p'
        }
    },
    ul: {
        props: {
            className: 'examples__list'
        }
    },
    ol: {
        props: {
            className: 'examples__list examples__list_ordered'
        }
    },
    blockquote: {
        component: Blockquote
    },
    code: {
        component: Code,
        props: {
            className: 'examples__code'
        }
    },
    pre: {
        component: Pre
    },
    input: {
        component: Checkbox
    },
    hr: {
        component: Hr
    },
    table: {
        component: Table,
        props: {
            className: 'examples__table'
        }
    },
    thead: {
        component: TableHead
    },
    th: {
        component: TableCell,
        props: {
            header: true
        }
    },
    tbody: {
        component: TableBody
    },
    tr: {
        component: TableRow
    },
    td: {
        component: TableCell
    },
    Rules: {
        component: Rules
    }
};

const inlineOverrides = {
    ...baseOverrides,
    p: {
        component: Text
    }
};

function Markdown({ text, inline }) {
    const overrides = inline ? inlineOverrides : baseOverrides;
    return compiler(text, { overrides, forceBlock: true });
}

Markdown.propTypes = {
    text: Type.string.isRequired,
    inline: Type.bool
};

export default Markdown;
