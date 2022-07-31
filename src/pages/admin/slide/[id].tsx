import { read } from '@/api/slide'
import LayoutAdmin from '@/components/Layout/admin'
import useSlide from '@/hooks/use-slide'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type TypeInput = {
    image: string,

}
const EditSlide = () => {
    const { detail, edit } = useSlide()
    const router = useRouter()
    const { id }  = router.query;

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInput>()
    useEffect(() => {
        const getSlide = async () => {
            const data = await detail(id);
            reset(data);
        }
        getSlide();
    }, [id])

    const onSubmit = async (data: any) => {
        console.log(data);
        await edit(data)
        toast.success("Edit successfully!", {
            position: 'top-center'
        })
        router.push("/admin/slide");
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                {/* IMAGE  */}
                <div className="tw-form-control tw-w-full tw-max-w-xs">
                    <label className="tw-label">
                        <span className="tw-label-text tw-capitalize">image</span>
                    </label>
                    <input type="text" placeholder="Type here" className="tw-input tw-input-bordered tw-w-full tw-max-w-xs" {...register('img', { required: true })} />
                </div>

                {/* BUTTON */}
                <div className="tw-form-control tw-w-full tw-max-w-xs tw-my-3">
                    <button className='tw-btn tw-btn-primary'>Update</button>
                </div>
            </form>
        </div>
    )
}

EditSlide.Layout = LayoutAdmin;

export default EditSlide

// function reset(data: AxiosResponse<any, any>) {
//     throw new Error('Function not implemented.')
// }
