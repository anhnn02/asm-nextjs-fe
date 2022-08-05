/* eslint-disable react/jsx-no-undef */
import LayoutAdmin from "@/components/Layout/admin";
import React from "react";
import { Table, Tag, Space } from "antd";
import { Button, Menu, Dropdown } from "antd";
import Link from "next/link";
import styles from "./Voucher.module.scss";
import stylesAdmin from "@/styles/admin/Admin.module.scss";
import Icon from "@/components/Icon";
import { path } from "@/constants";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { userInfo } from "os";
import useVoucher from "@/hooks/use-voucher";
import { formatPrice } from "@/utils/formatNumber";
import MyBtn from "@/components/Button";

type VoucherProps = {
  data: {}[];
};

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];

const VoucherPage = () => {
  const { data, error } = useVoucher();
  if (!data) return <div>Loading...</div>;

  const dataSource = data.map((item, index) => {
    return {
      key: index + 1,
      code: item.code,
      quantity: item.quantity,
      timeStart: item.timeStart,
      timeEnd: item.timeEnd,

      status: item.status,

      action: (
        <div>
          <Button className="tw-mx-1 button-action" type="primary" size="large">
            <Link href={`/admin/vouchers/${item._id}`}>
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
      <div className={stylesAdmin["header_content"]}>
        <div>
          <h4 className={stylesAdmin["title-admin"]}>List Voucher</h4>
        </div>
        <Link href="/admin/vouchers/add">
          <MyBtn.Fill content="Add Voucher" />
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

VoucherPage.Layout = LayoutAdmin;

export default VoucherPage;
function remove(_id: any): void {
    throw new Error("Function not implemented.");
}

