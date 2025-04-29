'use server';

import { connectDB } from "@/app/api/db/connectDB";
import cloudinary from "./cloudinary";
import Product from "@/app/api/models/product.model";

export async function AddAction(formData: FormData) {
    try {
        const image = formData.get('productImage') as File;
        const name = formData.get('productName');
        const price = formData.get('productPrice');
        const link = formData.get('sellLink');
        const description = formData.get('productDescription');

        if (!image || !name || !price || !link || !description) {
            console.log('All fields are required');

            return {
                error: 'All fields are required'
            }
        }

        await connectDB();

        //image upload to cloudinary
        const arrayBuffer = await image.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const imageResponse: any = await new Promise((resolve, rejects) => {
            cloudinary.uploader.upload_stream({
                resource_type: 'auto',
                folder: 'watches',
            },
                async (error, result) => {
                    if (error) {
                        rejects(error.message);
                    }
                    return resolve(result);
                }
            )
                .end(buffer);
        });
        console.log('Image uploaded', imageResponse);

        // store in db 
        await Product.create({
            image: imageResponse.secure_url,
            name,
            price,
            link,
            description
        });

        return {
            success: 'Product added successfully'
        }

    } catch (error) {
        return {
            error: 'Something went wrong'
        }
    }
}