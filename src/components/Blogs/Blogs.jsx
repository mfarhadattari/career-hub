import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const blogs = useLoaderData() ;
    return (
        <section className='container mx-auto mt-10'>
            <h1 className='text-center text-3xl font-semibold'>Blogs</h1>
            <article className='w-3/4 mx-auto p-5'>
                {
                blogs.map(blog =>
                    <div key={blog.id} className='text-black mt-10 border rounded-lg p-5'>
                        <h3 className='text-2xl font-semibold'>Question-{blog.id}: {blog.question}</h3>
                        <p className='text-xl text-gray-800'>Answer: {blog.answer}</p>
                    </div>
                )}
            </article>
        </section>
    );
};

export default Blogs;