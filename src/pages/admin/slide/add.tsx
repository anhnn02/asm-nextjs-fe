import LayoutAdmin from '@/components/Layout/admin'
import useSlide from '@/hooks/use-slide'
import { ISlide } from '@/models/slide'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import stylesAdmin from '@/styles/admin/Admin.module.scss'
import Link from 'next/link'
import { path } from '@/constants'
import Button from '@/components/Button'

type Props = {}
type TypeInput = {

  img: string,

}
const AddSlide = (props: Props) => {
  const router = useRouter()

  const { create, error } = useSlide();
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [size, useSize] = useState();
  if (error) return <div>Loading...</div>

  const onSubmit = async (data: ISlide) => {
    await create(data);
    toast.success("Add successfully!", {
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
            List slide
          </button>
        </Link>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {/* IMAGE  */}
        <div className="tw-form-control tw-w-full tw-max-w-xs tw-justify-between">
          <label className={stylesAdmin["label_form"]}>
            <span className={stylesAdmin["label-span_form"]}>
              Image
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="tw-input tw-input-bordered tw-w-full tw-max-w-xs"
            {...register("img", { required: true })}
          />
        </div>

        {/* BUTTON */}
        <div className="tw-form-control tw-w-full tw-max-w-xs tw-my-3">
          <Button.Fill content={'Add'} className={""}/>
        </div>
      </form>
    </div>
  );
}

AddSlide.Layout = LayoutAdmin;

export default AddSlide 