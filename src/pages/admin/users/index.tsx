/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import LayoutAdmin from "@/components/Layout/admin";
import React from "react";
import { Table, Tag, Space } from "antd";
import { Button, Menu, Dropdown } from "antd";
import Link from "next/link";
import styles from "./User.module.scss";
import stylesAdmin from "@/styles/admin/Admin.module.scss";
import Icon from "@/components/Icon";
import useUser from "@/hooks/use-user";

type InvoiceProps = {
  data: {}[];
};

const columns = [
  {
    title: "Image",
    dataIndex: "img",
    key: "img",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Date create",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const UserList = () => {
  const { data, error, remove } = useUser();
  if (!data) return <div>Loading...</div>;
  const dataSource = data.map((item, index) => {
    return {
      key: index + 1,
      img: (
        <div className="tw-avatar">
          <div className="tw-w-10 tw-rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      ),
      name: item.name,
      date: item.createdAt.split("", 10),
      email: item.email,

      role: (
        <div>
          {item.role === 0 ? (
            <span className={styles["order_item"]}>
              <span className={styles["order_status_pending-progress"]}>
                User
              </span>
            </span>
          ) : item.role === 1 ? (
            <span className={styles["order_item"]}>
              <span className={styles["order_status_pending-shipping"]}>
                Admin
              </span>
            </span>
          ) : (
            ""
          )}
        </div>
      ),
      status: (
        <div>
          {item.status === 0 ? (
            <span className={styles["order_item"]}>
              <span className={styles["order_status_delivered"]}>Active</span>
            </span>
          ) : // <div className="tw-form-control">
          //   <label className="tw-label tw-cursor-pointer">
          //     <span className="tw-label-text">Remember me</span>
          //     <input
          //       type="checkbox"
          //       className="tw-toggle tw-toggle-primary"
          //       defaultChecked
          //     />
          //   </label>
          // </div>
          item.status === 1 ? (
            <span className={styles["order_item"]}>
              <span className={styles["order_status_cancelled"]}>Locked</span>
            </span>
          ) : (
            ""
          )}
        </div>
      ),

      action: (
        <div className="">
          <Button
            className="tw-mx-1 button-action tw-rounded-[var(--rounded-1)] "
            type="primary"
            size="large"
          >
            <Link href={`/admin/users/edit/${item._id}`}>
              <a href="">
                <i className="bi bi-pencil-square"></i>
              </a>
            </Link>
          </Button>
        </div>
      ),
    };
  });
  return (
    <div>
      <h4 className={stylesAdmin["title-admin"]}>List Users</h4>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
        }}
      />
    </div>
  );
};

UserList.Layout = LayoutAdmin;

export default UserList;
