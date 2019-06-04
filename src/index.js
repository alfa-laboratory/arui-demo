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
                marginBottom: '24px'
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
            }
        },
        ComponentsList: {
            item: {
                '& a': {
                    color: '#333 !important',
                    opacity: '.6 !important',
                    '.view-with-theme-switcher__layout_theme_alfa-on-color &': {
                        isolate: false,
                        color: '#fff !important',
                        opacity: '.6 !important'
                    }
                }
            }
        }
    }
};
