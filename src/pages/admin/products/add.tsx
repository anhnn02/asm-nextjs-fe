/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import LayoutAdmin from '@/components/Layout/admin'
import useCategory from '@/hooks/use-category'
import useProduct from '@/hooks/use-product'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Product.module.scss'
import stylesAdmin from '@/styles/admin/Admin.module.scss'
import Button from '@/components/Button'

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
    if (error) return <div>Loading...</div>
    if (!categories) return <div>Loading...</div>
    let errSalePrice = ""
    const onSubmit = async (data: any) => {
        if (+data.salePrice >= +data.regularPrice) {
            errSalePrice = "Sale price must be less than regular price"
            console.log(errSalePrice);
        } else {
            await create(data);
            router.push("/admin/products");
        }
    }
    return (
        <div>
            <div className={stylesAdmin['header_content']}>
                <div>
                    <h1 className={stylesAdmin['title-admin']}>Add product</h1>
                </div>
                <Link href='/admin/products/'>
                    <button className={stylesAdmin['btn-multichoice_item']}>List product
                    </button>
                </Link>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className={stylesAdmin['content-form_admin']}>
                    <div className={stylesAdmin['inside_form_admin']}>
                        <div className="tw-grid tw-grid-cols-2 tw-gap-10">
                            <div className="">
                                <div className={stylesAdmin['row_2-col']}>
                                    {/* NAME PRODUCT */}
                                    <div className={`${stylesAdmin['row-input_form']}`}>
                                        <label className={stylesAdmin['label_form']}>
                                            <span className={stylesAdmin['label-span_form']}>product name</span>
                                        </label>
                                        <input type="text" placeholder="Type here" className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full" {...register('name', { required: true })} />
                                        {errors.name &&
                                            <div className={`${stylesAdmin['input-validate_form']} ${'my-error'}`}>
                                                <span>Product name is required</span>
                                            </div>
                                        }
                                    </div>
                                    {/* REGULAR PRICE  */}
                                    <div className={`${stylesAdmin['row-input_form']}`}>
                                        <label className={stylesAdmin['label_form']}>
                                            <span className={stylesAdmin['label-span_form']}>regular price</span>
                                        </label>
                                        <input type="number" placeholder="Type here" className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full" {...register('regularPrice', { required: true })} />
                                        {errors.regularPrice &&
                                            <div className={`${stylesAdmin['input-validate_form']} ${'my-error'}`}>
                                                <span>Regular Price is required</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className={stylesAdmin['row_2-col']}>
                                    {/* SALE PRICE  */}
                                    <div className={`${stylesAdmin['row-input_form']}`}>
                                        <label className={stylesAdmin['label_form']}>
                                            <span className={stylesAdmin['label-span_form']}>sale price</span>
                                        </label>
                                        <input type="number" placeholder="Type here" className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full" {...register('salePrice', { required: true })} />
                                        {errors.salePrice &&
                                            <div className={`${stylesAdmin['input-validate_form']} ${'my-error'}`}>
                                                <span>Sale Price is required</span>
                                            </div>
                                        }
                                        {(errSalePrice) ? errSalePrice : ""}
                                    </div>
                                    {/* IMAGE  */}
                                    <div className={`${stylesAdmin['row-input_form']}`}>
                                        <label className={stylesAdmin['label_form']}>
                                            <span className={stylesAdmin['label-span_form']}>image</span>
                                        </label>
                                        <input type="text" placeholder="Type here" className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full" {...register('img', { required: true })} />
                                        {errors.img &&
                                            <div className={`${stylesAdmin['input-validate_form']} ${'my-error'}`}>
                                                <span>Image is required</span>
                                            </div>
                                        }
                                    </div>
                                    {/* CATEGORY  */}
                                    <div className={stylesAdmin['row-input_form']}>
                                        <label className={stylesAdmin['label_form']}>
                                            <span className={stylesAdmin['label-span_form']}>Category product</span>
                                        </label>
                                        <select className="tw-my-1 tw-input tw-input-bordered tw-w-full " {...register('category', { required: true })}>
                                            {
                                                categories.map((item, index) => {
                                                    return <option key={index + 1} value={item._id}>{item?.name}</option>
                                                })
                                            }
                                        </select>
                                        {errors.category &&
                                            <div className={`${stylesAdmin['input-validate_form']} ${'my-error'}`}>
                                                <span>Category is required</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img id="img-preview" className="tw-w-[300px] tw-object-cover"
                                    src="https://i.imgur.com/3XGhQa2Z.png"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "https://i.imgur.com/MV2djzI.png";
                                    }}
                                    alt="" />

                                {/* SIZE  */}
                                <div className={stylesAdmin['row-input_form']}>
                                    <label className={stylesAdmin['label_form']}>
                                        <span className={stylesAdmin['label-span_form']}>Size</span>
                                    </label>
                                    <div className={`${stylesAdmin['size_row']}`}>
                                        <div className={`${styles['shop-main']} ${styles['size_col']} `}>
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
                                    {errors.size &&
                                        <div className={`${stylesAdmin['input-validate_form']} ${'my-error'}`}>
                                            <span>Size is required</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                       
                        {/* DESCRIPTION  */}
                        <div className={`${stylesAdmin['row-input_form']}`}>
                            <label className={stylesAdmin['label_form']}>
                                <span className={stylesAdmin['label-span_form']}>Description</span>
                            </label>
                            <textarea rows={5} className='tw-textarea tw-textarea-bordered tw-w-full tw-h-24' {...register('desc')}></textarea>
                        </div>
                        {/* BUTTON */}
                        <div className={stylesAdmin['row-input_form']}>
                            <Button.Fill className='tw-w-full' content={'Add'} />
                        </div>
                    </div>
                    {/* PREVIEW IMAGE  */}
                </div>
            </form>
        </div>
    )
}

AddProduct.Layout = LayoutAdmin;

export default AddProduct