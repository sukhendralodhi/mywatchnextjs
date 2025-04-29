'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const ProductList = () => {
    const products = ["", "", "", ""];

    useEffect(() => {
        axios.get('/api/fetch-products').then((res) => {
            console.log(res.data);
        })
    }, []);

    return (
        <div id='products' className='px-4 md:px-12 py-5 md:py-10 flex justify-center items-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    products.map((product, index) => (
                        <Link href={`/product/123`} key={index}>
                            <Image
                                src='/watch1.jpg'
                                alt='watch1'
                                className='max-w-[17rem] h-72  object-cover object-center rounded-lg'
                                width={1000}
                                height={1000} />
                            <div className='mt-4'>
                                <h2 className='font-semibold text-lg'>A very good watch</h2>
                                <p className='text-sm font-medium mt-1'>$1200</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList;