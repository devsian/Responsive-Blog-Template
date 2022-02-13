import Container from '@components/Container'
import Layout from '@components/Layout'
import PostAuthor from '@components/PostAuthor'
import PostMetaTitle from '@components/PostMetaTitle'
import Head from 'next/head'
import React from 'react'

export default function detail() {
    return (
        <Layout>
            <Container>
                <Head>
                    <title>Detail &mdash; Seight</title>
                </Head>
                <div className='md:w-6/12 w-full mx-auto flex flex-col items-center'>
                    <PostMetaTitle 
                        category="UI Design"
                        date="Monday, 10 Jan 2022"
                        title="Are you a good or a better designer? Check yourself now!"
                        center
                    />
                    <PostAuthor 
                        authorName="Yayan Iyan"
                        authorJob="Vice Precident of Design Grab"
                        authorAvatar="/author-1.png"
                    />
                </div>
                <div className="md:w-10/12 w-full mx-auto my-10">
                    <img src="/detail-image.png" alt="detail.png" className="w-full rounded-lg" />
                </div>
                <div className="md:w-8/12 w-full mx-auto">
                    <p className="text-xl mb-4 leading-relaxed">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, deserunt beatae. Earum totam consequatur asperiores cum similique soluta magnam qui, aut nobis iure itaque, eius quas? Repellendus quam ut quibusdam.
                    </p>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugiat distinctio enim? Earum nemo distinctio repellat odio eaque quaerat minus, unde temporibus, esse, at maxime labore voluptates ad adipisci animi. Totam eveniet a reiciendis sunt quis corrupti distinctio ipsam libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam provident quos dignissimos laboriosam, aliquam sequi aperiam rem hic vero harum inventore ut consequuntur accusantium tempora! Distinctio velit dicta nisi quibusdam.
                    </p>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dolore voluptas fugit voluptatum placeat odit laborum ipsa omnis ratione, delectus alias in libero officiis fuga est aliquam veniam vero quaerat illum hic iusto ad excepturi, quam ipsam. Doloremque nostrum nisi perspiciatis fugiat sapiente? Vitae laborum harum suscipit quasi inventore voluptates?
                    </p>
                </div>
            </Container>
        </Layout>
    )
}
