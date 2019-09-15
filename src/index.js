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
                marginBottom: 0
            },
            controls: {
                display: 'none'
            }
        },
        ReactComponent: {
            root: {
                marginBottom: 0
            },
            tabButtons: {
                marginBottom: '24px',
                boxShadow: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)'
            }
        },
        StyleGuide: {
            root: {
                backgroundColor: 'inherit'
            },
            logo: {
                padding: 0,
                borderBottom: 'none'
            },
            sidebar: {
                background: '#eee',
                '.view-with-theme-switcher__layout_theme_alfa-on-color &': {
                    isolate: false,
                    background: 'rgb(56, 76, 94)'
                },
                border: 'none'
            },
            footer: {
                display: 'none'
            },
            content: {
                maxWidth: 'none'
            }
        },
        Link: {
            link: {
                '&, &:link, &:visited': {
                    color: 'rgba(11, 31, 53, 1)',
                    opacity: 0.8,
                    cursor: 'pointer',
                    '.view-with-theme-switcher__layout_theme_alfa-on-color &': {
                        color: '#fff'
                    }
                },
                '&:hover, &:active': {
                    color: 'rgba(11, 31, 53, 1)',
                    opacity: 1,
                    '.view-with-theme-switcher__layout_theme_alfa-on-color &': {
                        color: '#fff'
                    }
                }
            }
        },
        ComponentsList: {
            isSelected: {
                fontWeight: 'bold'
            }
        }
    }
};
