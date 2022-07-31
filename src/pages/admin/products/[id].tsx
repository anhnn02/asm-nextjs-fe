/* eslint-disable react-hooks/exhaustive-deps */
import { read } from '@/api/product'
import Button from '@/components/Button'
import LayoutAdmin from '@/components/Layout/admin'
import useCategory from '@/hooks/use-category'
import useProduct from '@/hooks/use-product'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../shop/Shop.module.scss'
import stylesAdmin from '@/styles/admin/Admin.module.scss'
import Link from 'next/link'

type Props = {}

const EditProduct = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: categories } = useCategory();
  console.log("first", categories)
  const { editProduct } = useProduct();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  useEffect(() => {
    const getProduct = async () => {
      const data = await read(id);
      reset({
        ...data, category: data.category._id
      });
    }
    getProduct();
  }, [id, reset])

    if (!categories) return <div>Loading...</div>
  const onSubmit = async (data: any) => {
    editProduct({ ...data, category: data.category });
    router.push("/admin/products");
  }
  return (
    <div>
      <div className={stylesAdmin['header_content']}>
        <div>
          <h1 className={stylesAdmin['title-admin']}>Edit product</h1>
        </div>
        <Link href='/admin/products/'>
          <button className={stylesAdmin['btn-multichoice_item']}>List product
          </button>
        </Link>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className={stylesAdmin['content-form_admin']}>
                    <div className={stylesAdmin['inside_form_admin']}>
                        <div className={stylesAdmin['row_2-col']}>
                            {/* NAME PRODUCT */}
                            <div className={`${stylesAdmin['row-input_form']} ${'tw-w-2/4'}`}>
                                <label className={stylesAdmin['label_form']}>
                                    <span className={stylesAdmin['label-span_form']}>product name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="tw-my-1 tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full" {...register('name', { required: true })} />
                                {errors.name &&
                                    <div className={`${stylesAdmin['input-validate_form']} ${'my-error'}`}>
                                        <span>Product name is required</span>
                                    </div>
                                }
                            </div>
                            {/* REGULAR PRICE  */}
                            <div className={`${stylesAdmin['row-input_form']} ${'tw-w-2/4'}`}>
                                <label className={stylesAdmin['label_form']}>
                                    <span className={stylesAdmin['label-span_form']}>regular price</span>
                                </label>
                                <input type="text" placeholder="Type here" className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full" {...register('regularPrice', { required: true })} />
                                {errors.regularPrice &&
                                    <div className={`${stylesAdmin['input-validate_form']} ${'my-error'}`}>
                                        <span>Regular Price is required</span>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className={stylesAdmin['row_2-col']}>
                            {/* SALE PRICE  */}
                            <div className={`${stylesAdmin['row-input_form']} ${'tw-w-2/4'}`}>
                                <label className={stylesAdmin['label_form']}>
                                    <span className={stylesAdmin['label-span_form']}>sale price</span>
                                </label>
                                <input type="text" placeholder="Type here" className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full" {...register('salePrice', { required: true })} />
                                {errors.salePrice &&
                                    <div className={`${stylesAdmin['input-validate_form']} ${'my-error'}`}>
                                        <span>Sale Price is required</span>
                                    </div>
                                }
                            </div>
                            {/* IMAGE  */}
                            <div className={`${stylesAdmin['row-input_form']} ${'tw-w-2/4'}`}>
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
                        </div>
                        {/* SIZE  */}
                        <div className={stylesAdmin['row-input_form']}>
                            <label className={stylesAdmin['label_form']}>
                                <span className={stylesAdmin['label-span_form']}>Size</span>
                            </label>
                            <div className={`${styles['shop']} ${stylesAdmin['size_row']}`}>
                                <div className={`${styles['shop-main']} ${stylesAdmin['size_col']} `}>
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
                        {/* DESCRIPTION  */}
                        <div className={`${stylesAdmin['row-input_form']}`}>
                            <label className={stylesAdmin['label_form']}>
                                <span className={stylesAdmin['label-span_form']}>Description</span>
                            </label>
                            <textarea rows={5} className='tw-textarea tw-textarea-bordered tw-w-full tw-h-24' {...register('desc')}></textarea>
                        </div>
                        {/* BUTTON */}
                        <div className={stylesAdmin['row-input_form']}>
                            <Button.Fill className='tw-w-full' content={'Edit'} />
                        </div>
                    </div>

                    {/* PREVIEW IMAGE  */}
                    {/* <div>
                        <Image.PreviewGroup>
                            <Image className='tw-block'
                                width={200}
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                alt='thumb'
                            />
                        </Image.PreviewGroup>
                    </div> */}
                </div>


            </form>
    </div>
  )
}

EditProduct.Layout = LayoutAdmin;

export default EditProduct