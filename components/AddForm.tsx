'use client';

import { AddAction } from '@/utils/AddAction';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

const AddForm = () => {

    const router = useRouter();
    const [imageUrl, setImageUrl] = useState('');

    async function clientAddAction(formData: FormData) {
        const { error, success } = await AddAction(formData);

        if (error) {
            // toast notification 
            toast.error(error);
        }
        if (success) {
            // toast notification
            toast.success(success);
            // redirect to home page
            router.push('/');
            // reset form
            setImageUrl('');
        }
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileSize = file.size;

            if (Math.round(fileSize / 1024) > 1024) {
                toast.error('File size should be less than 1MB');
            } else {
                setImageUrl(URL.createObjectURL(file));
            }
        }
    }

    return (
        <form action={clientAddAction} className='w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-1 mt-3 md:mt-5'>
            {
                imageUrl && (
                    <Image
                        src={(imageUrl)}
                        alt='img'
                        width={1000}
                        height={1000}
                        className='max-w-full max-h-72 object-cover object-center rounded-lg' />
                )
            }
            <div className='flex flex-col space-y-2 w-full'>
                <label htmlFor="productImage">Product Image:</label>
                <input
                    onChange={handleImageChange}
                    type="file"
                    accept='image/*'
                    id='productImage'
                    name='productImage'
                    className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500' />
            </div>
            <div className='flex flex-col space-y-2 w-full'>
                <label htmlFor="productName">Product Name:</label>
                <input
                    type="text"
                    id='productName'
                    name='productName'
                    placeholder='Enter product name'
                    className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500' />
            </div>
            <div className='flex flex-col space-y-2 w-full'>
                <label htmlFor="productPrice">Product Price:</label>
                <input
                    type="number"
                    id='productPrice'
                    name='productPrice'
                    placeholder='Enter product price'
                    className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500' />
            </div>
            <div className='flex flex-col space-y-2 w-full'>
                <label htmlFor="sellLink">Seller's Link:</label>
                <input
                    type="text"
                    id='sellLink'
                    name='sellLink'
                    placeholder='Link to where the product is being sold'
                    className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500' />
            </div>
            <div className='flex flex-col space-y-2 w-full'>
                <label htmlFor="productDescription">Product Description:</label>
                <textarea
                    name="productDescription"
                    id="productDescription"
                    placeholder='Enter product description'
                    className='w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500' rows={4}></textarea>
            </div>

            <button
                type='submit'
                className='w-full bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer hover:bg-[#444] transition-all duration-300 ease-in-out'>
                Add Product
            </button>
        </form>
    )
}

export default AddForm;