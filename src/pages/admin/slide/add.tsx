import LayoutAdmin from '@/components/Layout/admin'
import useSlide from '@/hooks/use-slide'

import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../shop/Shop.module.scss'
type Props = {}
type TypeInput = {
   
    image: string,
   
}
const AddSlide = (props: Props) => {
    const router = useRouter()
   
    const { create, error } = useSlide();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [size, useSize] = useState();
    if (error) return <div>Loading...</div>
   
    const onSubmit = async (data: any) => {
        console.log(data);
        await create(data);
        router.push("/admin/slide");
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              
                {/* IMAGE  */}
                <div className="tw-form-control tw-w-full tw-max-w-xs text-center">
                    <label className="tw-label">
                        <span className="tw-label-text tw-capitalize">image</span>
                    </label>
                    <input type="text" placeholder="Type here" className="tw-input tw-input-bordered tw-w-full tw-max-w-xs" {...register('img', { required: true })} />
                </div>
                
                {/* BUTTON */}
                <div className="tw-form-control tw-w-full tw-max-w-xs tw-my-3">
                    <button className='tw-btn tw-btn-primary'>Add</button>
                </div>
            </form>
        </div>
    )
}

AddSlide.Layout = LayoutAdmin;

export default AddSlide 