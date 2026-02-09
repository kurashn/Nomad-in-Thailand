import { config, fields, collection } from '@keystatic/core';
import { wrapper, block } from '@keystatic/core/content-components';
import { HelpCircle } from 'lucide-react';
import React from 'react';

export default config({
    storage: process.env.NODE_ENV === 'development'
        ? {
            kind: 'local',
        }
        : {
            kind: 'github',
            repo: 'kurashn/Nomad-in-Thailand',
        },
    collections: {
        posts: collection({
            label: 'Posts',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                publishedDate: fields.date({ label: 'Published Date' }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'キャリア・移住', value: 'キャリア・移住' },
                        { label: 'ビザ・手続き', value: 'ビザ・手続き' },
                        { label: '生活情報', value: '生活情報' },
                        { label: '体験談', value: '体験談' },
                        { label: 'お金・税金・仮想通貨', value: 'お金・税金・仮想通貨' },
                        { label: 'ノマドインタビュー', value: 'ノマドインタビュー' },
                    ],
                    defaultValue: '生活情報',
                }),
                description: fields.text({
                    label: 'Description',
                    multiline: true,
                }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    {
                        label: 'Tags',
                        itemLabel: (props) => props.value || 'New Tag',
                    }
                ),
                thumbnail: fields.image({
                    label: 'Thumbnail',
                    directory: 'public/images/posts',
                    publicPath: '/images/posts',
                }),
                content: fields.mdx({
                    label: 'Content',
                    components: {
                        details: wrapper({
                            label: 'Details (Accordion)',
                            schema: {}, // children is handled automatically for wrapper
                        }),
                        summary: wrapper({
                            label: 'Summary (Header)',
                            schema: {},
                        }),
                        FAQItem: wrapper({
                            label: 'FAQ Item',
                            schema: {
                                question: fields.text({ label: 'Question' }),
                            },
                        }),
                        LineCTA: block({
                            label: 'LINE CTA Button',
                            schema: {
                                text: fields.text({
                                    label: 'Button Text',
                                    defaultValue: 'LINEで相談する',
                                }),
                                url: fields.text({
                                    label: 'LINE URL',
                                    defaultValue: 'https://lin.ee/E1QFFRn',
                                }),
                            },
                        }),
                    },
                }),
            },
        }),
    },
});

