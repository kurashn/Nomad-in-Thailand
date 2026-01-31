// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';
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
                category: fields.text({
                    label: 'Category',
                    description: 'e.g. お金・税金, ビザ, 生活情報',
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
                        details: fields.component({
                            label: 'Details (Accordion)',
                            schema: {
                                children: fields.child({
                                    kind: 'block',
                                    placeholder: 'Content inside accordion',
                                    formatting: 'inherit',
                                    dividers: 'inherit',
                                    links: 'inherit',
                                }),
                            },
                        }),
                        summary: fields.component({
                            label: 'Summary (Header)',
                            schema: {
                                children: fields.child({
                                    kind: 'inline',
                                    placeholder: 'Accordion title',
                                    formatting: 'inherit',
                                    links: 'inherit',
                                }),
                            },
                        }),
                        FAQItem: fields.component({
                            label: 'FAQ Item',
                            schema: {
                                question: fields.text({ label: 'Question' }),
                                answer: fields.child({
                                    kind: 'block',
                                    placeholder: 'Answer',
                                    formatting: 'inherit',
                                    dividers: 'inherit',
                                    links: 'inherit',
                                }),
                            },
                        }),
                    },
                }),
            },
        }),
    },
});

