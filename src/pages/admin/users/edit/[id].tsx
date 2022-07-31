import LayoutAdmin from "@/components/Layout/admin";
import useUser from "@/hooks/use-user";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import stylesAdmin from "@/styles/admin/Admin.module.scss";
import { toast } from "react-toastify";

const EditUser = () => {
  const { data, error, detail, editUser } = useUser();
  const router = useRouter();
  const id = router.query.id;
  const [user, setUser] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!id) return;
    detail(id).then((res: any) => reset(res));
    const getUser = async () => {
      const dataUser: any = await detail(id);
      setUser(dataUser);
    };
    getUser();
  }, [id]);

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      await editUser(data);
      toast.success("Edit successfully", {
        position: 'top-center'
      })
      router.push("/admin/users");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="tw-justify-center tw-items-center">
      <h4 className={stylesAdmin["title-admin"]}>Edit User</h4>
      <div className="tw-flex ">
        <div className="tw-m-auto">
          {/* NAME  */}
          <div className="tw-form-control tw-w-96">
            <label className="tw-label">Name user</label>
            <input
              {...register("name")}
              type="text"
              placeholder="You can't touch this"
              className="tw-input tw-input-bordered tw-w-full tw-max-w-xs"
              disabled
            />
          </div>
          {/* EMAIL  */}
          <div className="tw-form-control tw-w-96">
            <label className="tw-label">Email</label>
            <input
              {...register("email")}
              type="text"
              placeholder="You can't touch this"
              className="tw-input tw-input-bordered tw-w-full tw-max-w-xs"
              disabled
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="">
              {/* Status  */}
              <div className="tw-form-control tw-w-full tw-max-w-xs">
                <label className="tw-label">
                  <span className="tw-label-text tw-capitalize">status</span>
                </label>
                <select
                  className="tw-select tw-select-secondary tw-w-full tw-max-w-xs"
                  {...register("status", { required: true })}
                >
                  <option selected value={0}>
                    Active
                  </option>
                  <option value={1}>Locked</option>
                </select>
              </div>

              {/* ROLE  */}
              <div className="tw-form-control tw-w-full tw-max-w-xs">
                <label className="tw-label">
                  <span className="tw-label-text tw-capitalize">Role</span>
                </label>
                <select
                  className="tw-select tw-select-secondary tw-w-full tw-max-w-xs"
                  {...register("role", { required: true })}
                >
                  <option selected value={0}>
                    User
                  </option>
                  <option value={1}>Admin</option>
                </select>
              </div>
              <div className="tw-form-control tw-w-full tw-mt-8 tw-max-w-xs tw-my-3">
                <button className="tw-btn tw-btn-primary">Edit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
EditUser.Layout = LayoutAdmin;

export default EditUser;
