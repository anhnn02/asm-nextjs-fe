import LayoutAdmin from "@/components/Layout/admin";
import React from "react";
import { Table, Tag, Space } from "antd";
import { Button, Menu, Dropdown } from "antd";
import Link from "next/link";
import styles from "./Invoice.module.scss";
import Icon from "@/components/Icon";
import { path } from "@/constants";


type Props = {};

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Quanlity",
    dataIndex: "quanlity",
    key: "quanlity",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Total Price",
    dataIndex: "totalPrice",
    key: "totalPrice",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
  {
    title: "Detail",
    dataIndex: "detail",
    key: "detail",
  },
];

const data = [
  {
    key: "0",
    date: "John Brown",
    quanlity: 32,
    totalPrice: 123,
    status: 0,

  },
  {
    key: "1",
    date: "John Brown",
    quanlity: 32,
    totalPrice: 123,
    status: 1,
  },
  {
    key: "2",
    date: "John Brown",
    quanlity: 32,
    totalPrice: 123,
    status: 2,
  },
  {
    key: "3",
    date: "John Brown",
    quanlity: 32,
    totalPrice: 123,
    status: 3,
  },
];

const InvoicePage = (props: Props) => {
  const dataSource = data.map((item, index) => {
    return {
      key: index + 1,
      date: item.date,
      quanlity: item.quanlity,
      totalPrice: item.totalPrice,
      status: (
        <div>
          {item.status === 0 ? (
            <button className={styles["order_item"]}>
              <span className={styles["order_status_pending-progress"]}>
                Pending
              </span>
            </button>
          ) : item.status === 1 ? (
            <button className={styles["order_item"]}>
              <span className={styles["order_status_pending-shipping"]}>
                Shipping
              </span>
            </button>
          ) : item.status === 2 ? (
            <button className={styles["order_item"]}>
              <span className={styles["order_status_delivered"]}>
                Delivered
              </span>
            </button>
          ) : item.status === 3 ? (
            <button className={styles["order_item"]}>
              <span className={styles["order_status_cancelled"]}>
                Cancelled
              </span>
            </button>
          ) : (
            ""
          )}
        </div>
      ),

      action: (
        <div>
          <Button className="button-action" type="primary" danger size="large">
            <i className="bi bi-trash3"></i>
          </Button>
          <Button className="tw-mx-1 button-action" type="primary" size="large">
            <Link href="/admin/products">
              <a href="">
                <i className="bi bi-pencil-square"></i>
              </a>
            </Link>
          </Button>
        </div>
      ),

      detail: (
        // <Link href={`${path.private.invoiceRoute}/${item._id}`}>
        <Link href="">

          <Icon.Eye className="tw-text-xl" />
        </Link>
      ),
    };
  });
  return (
    <div>
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

InvoicePage.Layout = LayoutAdmin;

export default InvoicePage;
