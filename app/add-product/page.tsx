import AddForm from '@/components/AddForm';
import React from 'react';

const AddProductPage = () => {
    return (
        <div className='px-4 md:px-12 g-[#F8F9FA] pb-8'>
            <h2 className='text-center font-semibold pt-8  text-xl md:text-2xl w-full max-w-xl mx-auto'>Add A New Product</h2>

            {/* add form component here */}
            <AddForm />

        </div>
    )
}

export default AddProductPage;