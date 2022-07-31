import Link from 'next/link';
import React from 'react'
import Button from "@/components/Button";
import stylesAdmin from "@/styles/admin/Admin.module.scss";
import styles from "./Category.module.scss";
import LayoutAdmin from '@/components/Layout/admin';
import { useRouter } from 'next/router';
import useCate from '@/hooks/use-category';
import { useForm } from 'react-hook-form';

type Props = {}

const AddCate = (props: Props) => {
  const router = useRouter()
  const {create} = useCate();
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = async (data: any) => {

    await create(data);
    router.push("/admin/categories")
  }
  return (
    <div>
      <h4 className={stylesAdmin["title-admin"]}>Add Category</h4>
      <Link href="/admin/categories/">
        <button className={styles["btn-multichoice_item"]}>
          List Category
        </button>
      </Link>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="tw-flex tw-gap-4 tw-items-center "
      >
        {/* NAME PRODUCT */}
        <div className={`${stylesAdmin["row-input_form"]} ${"tw-w-full"}`}>
          <label className={stylesAdmin["label_form"]}>
            <span className={stylesAdmin["label-span_form"]}>Cate name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="tw-my-1 tw-input tw-input-bordered tw-max-w-full tw-w-full"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <div
              className={`${stylesAdmin["input-validate_form"]} ${"my-error"}`}
            >
              <span>Category name is required</span>
            </div>
          )}
        </div>
        {/* BUTTON */}
        <div className={stylesAdmin["row-input_form"]}>
          <Button.Transparent className="tw-w-full tw-mt-6" content={"Reset"} />
        </div>
        <div className={stylesAdmin["row-input_form"]}>
          <Button.Fill className="tw-w-full tw-mt-6" content={"Add"} />
        </div>
      </form>
    </div>
  );
}
AddCate.Layout = LayoutAdmin;

export default AddCate