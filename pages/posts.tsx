import { useState } from 'react'
import mockPosts from '../utils/posts.json'

import Container from '@components/Container'
import Layout from '@components/Layout'
import CardPost from '@components/CardPost'
import SectionHeader from '@components/SectionHeader'
import Head from 'next/head'

export default function posts() {
    const [posts, setPosts] = useState(mockPosts);
    return (
        <Layout>
            <Head>
                <title>Category &mdash; Seight</title>
            </Head>
            <Container>
                <SectionHeader>UI Design</SectionHeader>

                {/* Logic if empty posts not found */}
                {!posts.length ? (
                    <div className='text-center py-20'>
                        <h2 className='text-6xl'>Hasil tidak ditemukan!</h2>
                        <p className='text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto'>Mohon cari dengan kata kunci lain yaa ... ! Selamat berjelajah teman-teman semua hehehehehe!</p>
                    </div>
                ) : (
                    <div className="flex -mx-4 flex-wrap mt-6">
                        {posts.map(post => (
                        <div key={post.id} className='md:w-4/12 w-full px-4 py-6'>
                            <CardPost {...post} />
                        </div>
                        ))}
                    </div>  
                )}
            </Container>
        </Layout>
    );
}
