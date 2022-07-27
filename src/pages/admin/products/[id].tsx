/* eslint-disable react-hooks/exhaustive-deps */
import { getAll } from '@/api/category'
import { read } from '@/api/product'
import LayoutAdmin from '@/components/Layout/admin'
import useCategory from '@/hooks/use-category'
import useProduct from '@/hooks/use-product'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import styles from '../../shop/Shop.module.scss'

type Props = {}

const EditProduct = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  // const { data, error } = useSWR(id ? `/product/${id}` : null);
  const { data: categories } = useCategory();
  // const [categories, setCategories] = useState();
  const { editProduct } = useProduct();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  useEffect(() => {
    const getProduct = async () => {
      const data = await read(id);
      // console.log(data);
      // console.log(data?._id);
      reset(data);
    }
    getProduct();
  }, [id])

  // if (!data) return <div>Loading...</div>
  // if (error) return <div>Failed</div>
  // console.log(router);
  // console.log(id);
  const onSubmit = async (data: any) => {
    // console.log(data);
    editProduct({ ...data, category: data.category });
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
                <input type="checkbox" id="size-35" name='size' {...register('size', { required: true })} defaultValue={35} />
                <label htmlFor="size-35"></label>
              </div>
              <div className={`${styles['form-group']} ${styles['form-group-36']}`}>
                <input type="checkbox" id="size-36" name='size' {...register('size', { required: true })} defaultValue={36} />
                <label htmlFor="size-36"></label>
              </div>
              <div className={`${styles['form-group']} ${styles['form-group-37']}`}>
                <input type="checkbox" id="size-37" name='size' {...register('size', { required: true })} defaultValue={37} />
                <label htmlFor="size-37"></label>
              </div>
              <div className={`${styles['form-group']} ${styles['form-group-38']}`}>
                <input type="checkbox" id="size-38" name='size' {...register('size', { required: true })} defaultValue={38} />
                <label htmlFor="size-38"></label>
              </div>
              <div className={`${styles['form-group']} ${styles['form-group-39']}`}>
                <input type="checkbox" id="size-39" name='size' {...register('size', { required: true })} defaultValue={39} />
                <label htmlFor="size-39"></label>
              </div>
              <div className={`${styles['form-group']} ${styles['form-group-40']}`}>
                <input type="checkbox" id="size-40" name='size' {...register('size', { required: true })} defaultValue={40} />
                <label htmlFor="size-40"></label>
              </div>
              <div className={`${styles['form-group']} ${styles['form-group-41']}`}>
                <input type="checkbox" id="size-41" name='size' {...register('size', { required: true })} defaultValue={41} />
                <label htmlFor="size-41"></label>
              </div>
              <div className={`${styles['form-group']} ${styles['form-group-42']}`}>
                <input type="checkbox" id="size-42" name='size' {...register('size', { required: true })} defaultValue={42} />
                <label htmlFor="size-42"></label>
              </div>
              <div className={`${styles['form-group']} ${styles['form-group-43']}`}>
                <input type="checkbox" id="size-43" name='size' {...register('size', { required: true })} defaultValue={43} />
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
          <select className="tw-select tw-select-secondary tw-w-full tw-max-w-xs" name='category' {...register('category', { required: true })}>
            {/* <option selected defaultValue={data?._id}>{data?.category.name}</option> */}
            {
              categories?.map((item, index) => {
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
          <textarea rows={5} className='tw-textarea tw-textarea-bordered tw-h-24' name='desc' {...register('desc', { required: true })}></textarea>
        </div>
        {/* BUTTON */}
        <div className="tw-form-control tw-w-full tw-max-w-xs tw-my-3">
          <button className='tw-btn tw-btn-primary'>Edit</button>
        </div>
      </form>
    </div>
  )
}

EditProduct.Layout = LayoutAdmin;

export default EditProduct