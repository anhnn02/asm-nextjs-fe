import LayoutAdmin from '@/components/Layout/admin'
import useCategory from '@/hooks/use-category'
import useProduct from '@/hooks/use-product'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../shop/Shop.module.scss'
type Props = {}
type TypeInput = {
    name: string,
    price: number,
    image: string,
    description: string,
    salePrice: number,
    regularPrice: number,
    size: [],
    category: {},
}
const AddProduct = (props: Props) => {
    const router = useRouter()
    const { data: categories, error } = useCategory();
    const { create } = useProduct();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [size, useSize] = useState();
    if (error) return <div>Loading...</div>
    if (!categories) return <div>Loading...</div>
    const onSubmit = async (data: any) => {
        console.log(data);
        await create(data);
        router.push("/admin/products");
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                {/* NAME PRODUCT */}
                <div className="tw-form-control tw-w-full tw-max-w-xs">
                    <label className="tw-label">
                        <span className="tw-label-text tw-capitalize">name product</span>
                    </label>
                    <input type="text" placeholder="Type here" className="tw-input tw-input-bordered tw-w-full tw-max-w-xs" {...register('name', { required: true })} />
                </div>
                {/* REGULAR PRICE  */}
                <div className="tw-form-control tw-w-full tw-max-w-xs">
                    <label className="tw-label">
                        <span className="tw-label-text tw-capitalize">regular price</span>
                    </label>
                    <input type="text" placeholder="Type here" className="tw-input tw-input-bordered tw-w-full tw-max-w-xs" {...register('regularPrice', { required: true })} />
                </div>
                {/* SALE PRICE  */}
                <div className="tw-form-control tw-w-full tw-max-w-xs">
                    <label className="tw-label">
                        <span className="tw-label-text tw-capitalize">sale price</span>
                    </label>
                    <input type="text" placeholder="Type here" className="tw-input tw-input-bordered tw-w-full tw-max-w-xs" {...register('salePrice', { required: true })} />
                </div>
                {/* IMAGE  */}
                <div className="tw-form-control tw-w-full tw-max-w-xs">
                    <label className="tw-label">
                        <span className="tw-label-text tw-capitalize">image</span>
                    </label>
                    <input type="text" placeholder="Type here" className="tw-input tw-input-bordered tw-w-full tw-max-w-xs" {...register('img', { required: true })} />
                </div>
                {/* SIZE  */}
                <div className={styles['shop']}>
                    <div className={styles['shop-main']}>
                        <div className={styles['shop-sidebar-variation']}>
                            <div className={`${styles['form-group']} ${styles['form-group-35']}`}>
                                <input type="checkbox" id="size-35" {...register('size', { required: true })} defaultValue={35} />
                                <label htmlFor="size-35"></label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['form-group-36']}`}>
                                <input type="checkbox" id="size-36" {...register('size', { required: true })} defaultValue={36} />
                                <label htmlFor="size-36"></label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['form-group-37']}`}>
                                <input type="checkbox" id="size-37" {...register('size', { required: true })} defaultValue={37} />
                                <label htmlFor="size-37"></label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['form-group-38']}`}>
                                <input type="checkbox" id="size-38" {...register('size', { required: true })} defaultValue={38} />
                                <label htmlFor="size-38"></label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['form-group-39']}`}>
                                <input type="checkbox" id="size-39" {...register('size', { required: true })} defaultValue={39} />
                                <label htmlFor="size-39"></label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['form-group-40']}`}>
                                <input type="checkbox" id="size-40" {...register('size', { required: true })} defaultValue={40} />
                                <label htmlFor="size-40"></label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['form-group-41']}`}>
                                <input type="checkbox" id="size-41" {...register('size', { required: true })} defaultValue={41} />
                                <label htmlFor="size-41"></label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['form-group-42']}`}>
                                <input type="checkbox" id="size-42" {...register('size', { required: true })} defaultValue={42} />
                                <label htmlFor="size-42"></label>
                            </div>
                            <div className={`${styles['form-group']} ${styles['form-group-43']}`}>
                                <input type="checkbox" id="size-43" {...register('size', { required: true })} defaultValue={43} />
                                <label htmlFor="size-43"></label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CATEGORY  */}
                <div className="tw-form-control tw-w-full tw-max-w-xs">
                    <label className="tw-label">
                        <span className="tw-label-text tw-capitalize">Category product</span>
                    </label>
                    <select className="tw-select tw-select-secondary tw-w-full tw-max-w-xs" {...register('category', { required: true })}>
                        <option disabled defaultValue="">Pick category</option>
                        {
                            categories.map((item, index) => {
                                return <option key={index + 1} value={item._id}>{item?.name}</option>
                            })
                        }
                    </select>
                </div>
                {/* DESCRIPTION  */}
                <div className="tw-form-control tw-w-full tw-max-w-xs">
                    <label className="tw-label">
                        <span className="tw-label-text tw-capitalize">Description</span>
                    </label>
                    <textarea rows={5} className='tw-textarea tw-textarea-bordered tw-h-24' {...register('desc', { required: true })}></textarea>
                </div>
                {/* BUTTON */}
                <div className="tw-form-control tw-w-full tw-max-w-xs tw-my-3">
                    <button className='tw-btn tw-btn-primary'>Add</button>
                </div>
            </form>
        </div>
    )
}

AddProduct.Layout = LayoutAdmin;

export default AddProduct