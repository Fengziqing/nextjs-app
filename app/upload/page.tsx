'use client';
import React, { useState } from 'react'
import { CldUploadWidget,CldImage } from 'next-cloudinary'
//https://demo.cloudinary.com/uw/#/
//customize clouldinary upload widget
//refer to the code page(option params)


interface CloudinaryResult {
    public_id:string
}
const UploadPage = () => {
    const [publicId, setPublicId] = useState('');
    return (
        <>
        {publicId &&
        <CldImage alt='pic' src={publicId} width={270} height={180}/>}
        <CldUploadWidget
            uploadPreset='e4y80cto'
            options={{
                sources:['local'],
                multiple:false,
                maxFiles:5,
                styles:{
                    fonts: {
                        default: null,
                        "'Poppins', sans-serif": {
                            url: "https://fonts.googleapis.com/css?family=Poppins",
                            active: true
                        }
                    }
                }
            }}
            onUpload={(result, widget) => {
                if(result.event !== 'success') return
                //typescript declare to tell complier the type
                const info = result.info as CloudinaryResult
                setPublicId(info.public_id)
            }}>
            {({ open }) =>
                <button className='btn btn-primary'
                    onClick={() => open()}>Upload</button>}
        </CldUploadWidget>
        </>
    )
}

export default UploadPage