module.exports = {
    styleguideComponents: {
        StyleGuide$: 'arui-demo/styleguide/styleguide',
        StyleGuideRenderer: 'arui-demo/styleguide/styleguide-renderer',
        SectionHeadingRenderer: 'arui-demo/section-heading/section-heading-renderer',
        Markdown: 'arui-demo/markdown',
        Preview: 'arui-demo/preview',
        Editor: 'arui-demo/editor/editor',
        Pathline: 'arui-demo/pathline',
        slots$: 'arui-demo/slots',
        ReactComponent$: 'arui-demo/react-component',
        ExamplePlaceholderRenderer: 'arui-demo/example-placeholder',
        Logo: 'arui-demo/logo'
    },
    pagePerSection: true,
    exampleMode: 'expand',
    require: [
        'arui-demo/global.css'
    ],
    styles: {
        Playground: {
            root: {
                margin: '24px 0'
            },
            controls: {
                display: 'none'
            },
            preview: {
                overflowX: 'auto',
                '-webkit-overflow-scrolling': 'touch'
            }
        },
        ReactComponent: {
            root: {
                marginBottom: 0
            },
            docs: {
                margin: '0 0 32px'
            },
            tabButtons: {
                maxWidth: 800,
                margin: '0 0 32px',
                boxShadow: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)'
            }
        },
        StyleGuide: {
            root: {
                backgroundColor: 'inherit',
                '@media (max-width: 600px)': {
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    alignContent: 'stretch',
                    alignItems: 'stretch'
                }
            },
            logo: {
                position: 'relative',
                padding: 0,
                border: 0
            },
            sidebar: {
                background: '#f3f4f5',
                border: 'none',
                '@media (max-width: 600px)': {
                    padding: 0,
                    order: 1,
                    flex: '1 0 auto',
                    width: '100%'
                }
            },
            footer: {
                display: 'none'
            },
            content: {
                maxWidth: 'none',
                padding: '36px 60px',
                '@media (max-width: 767px)': {
                    padding: '24px 12px',
                    order: 2,
                    flex: '1 0 auto',
                    width: '100%'
                }
            }
        },
        Link: {
            link: {
                '&, &:link, &:visited': {
                    display: 'block',
                    color: 'rgba(11, 31, 53, 1)',
                    fontSize: '16px',
                    cursor: 'pointer'
                },
                '&:hover, &:active': {
                    color: 'rgba(11, 31, 53, 1)'
                }
            }
        },
        TableOfContents: {
            search: {
                padding: '0 16px'
            },
            input: {
                fontSize: '16px'
            }
        },
        ComponentsList: {
            list: {
                padding: '16px',
                '@media (max-width: 600px)': {
                    whiteSpace: 'nowrap',
                    overflowX: 'auto',
                    '-webkit-overflow-scrolling': 'touch'
                }
            },
            isChild: {
                opacity: 0.6,
                transition: '0.2s',
                fontWeight: '400'
            },
            isSelected: {
                opacity: 1,
                fontWeight: '400'
            }
        }
    }
};
