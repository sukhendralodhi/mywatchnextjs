'use client';

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Product {
    _id: string;
    name: string;
    price: number;
    image: string;
}

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('/api/fetch-products').then((res) => {
            setProducts(res.data.products);
            setLoading(false);
        }).catch((error) => {
            console.error('Error fetching products:', error);
            setLoading(false);
        });
    }, []);
    return (
        <div id='products' className='px-4 md:px-12 py-5 md:py-10 flex justify-center items-center '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    products.map((product: Product, index) => (
                        <Link href={`/product/123`} key={product._id}>
                            <Image
                                src='/watch1.jpg'
                                alt='watch1'
                                className='max-w-[17rem] h-72  object-cover object-center rounded-lg'
                                width={1000}
                                height={1000} />
                            <div className='mt-4'>
                                <h2 className='font-semibold text-lg'>{product.name}</h2>
                                <p className='text-sm font-medium mt-1'>${product.price}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList;