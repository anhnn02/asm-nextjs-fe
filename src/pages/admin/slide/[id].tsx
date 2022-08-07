/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@/components/Button'
import LayoutAdmin from '@/components/Layout/admin'
import { path } from '@/constants'
import useSlide from '@/hooks/use-slide'
import { ISlide } from '@/models/slide'
import { AxiosResponse } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import stylesAdmin from '@/styles/admin/Admin.module.scss'

type TypeInput = {
    img: string,

}
const EditSlide = () => {
    const { detail, edit } = useSlide()
    const router = useRouter()
    const { id } = router.query;

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInput>()
    useEffect(() => {
        const getSlide = async () => {
            const data = await detail(id);
            reset(data);
        }
        getSlide();
    }, [id])

    const onSubmit = async (data: ISlide) => {
        await edit(data)
        toast.success("Edit successfully!", {
            position: 'top-center'
        })
        router.push("/admin/slide");
    }
    return (
        <div>
            <div className={stylesAdmin["header_content"]}>
                <div>
                    <h1 className={stylesAdmin["title-admin"]}>Add slide</h1>
                </div>
                <Link href={path.private.slidesRoute}>
                    <button className={stylesAdmin["btn-multichoice_item"]}>
                        Edit slide
                    </button>
                </Link>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                {/* IMAGE  */}
                <div className="tw-form-control tw-w-full tw-max-w-xs">
                    <label className={stylesAdmin["label_form"]}>
                        <span className={stylesAdmin["label-span_form"]}>
                            Image
                        </span>
                    </label>
                    <input type="text" placeholder="Type here" className="tw-input tw-input-bordered tw-w-full tw-max-w-xs" {...register('img', { required: true })} />
                </div>

                {/* BUTTON */}
                <div className="tw-form-control tw-w-full tw-max-w-xs tw-my-3">
                    <Button.Fill content={'Edit'} className={""} />
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
