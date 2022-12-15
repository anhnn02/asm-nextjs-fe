import LayoutAdmin from "@/components/Layout/admin";
import React from "react";
import { Table, Tag, Space } from "antd";
import { Button, Menu, Dropdown } from "antd";
import Link from "next/link";
import styles from "./Category.module.scss";
import stylesAdmin from "@/styles/admin/Admin.module.scss";
import useCate from "@/hooks/use-category";
import MyBtn from "@/components/Button";
import { path } from "@/constants";

type InvoiceProps = {
  data: {}[];
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width:140
  },
];

const CategoryList = () => {
  const { data, error, remove } = useCate();
  if (!data) return <div>Loading...</div>;
  const dataSource = data.map((item, index) => {
    return {
      key: index + 1,

      name: item.name,

      action: (
        <div className="tw-text-right">
          <Button
            className="tw-mx-1 button-action tw-rounded-[var(--rounded-1)] "
            type="primary"
            size="large"
          >
            {/* <Link href={`/admin/categories/${item._id}`}> */}
            <Link href={`${path.private.categoriesRoute}/${item._id}`}>
              <a href="">
                <i className="bi bi-pencil-square"></i>
              </a>
            </Link>
          </Button>
          <Button
            onClick={() => remove(item._id)}
            className="button-action"
            type="primary"
            danger
            size="large"
          >
            <i className="bi bi-trash3"></i>
          </Button>
        </div>
      ),
    };
  });
  return (
    <div>
      <div className={styles["header_content"]}>
        <h4 className={stylesAdmin["title-admin"]}>List Categories</h4>
        <Link href={`${path.private.categoriesRoute}/add`}>
          <MyBtn.Fill className={""} content="Add category" />
        </Link>
      </div>

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

CategoryList.Layout = LayoutAdmin;

export default CategoryList;
