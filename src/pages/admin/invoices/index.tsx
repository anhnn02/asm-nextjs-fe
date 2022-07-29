import LayoutAdmin from "@/components/Layout/admin";
import React from "react";
import { Table, Tag, Space } from "antd";
import { Button, Menu, Dropdown } from "antd";
import Link from "next/link";
import styles from "./Invoice.module.scss";
import Icon from "@/components/Icon";
import { path } from "@/constants";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { userInfo } from "os";
import useInvoice from "@/hooks/use-invoice";

type InvoiceProps = {
  data: {}[];
};

const columns = [
  {
    title: "Fullname",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Total Price",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Note",
    dataIndex: "note",
    key: "note",
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

const InvoicePage = () => {
  const { data, error } = useInvoice();
  if (!data) return <div>Loading...</div>;

    const dataSource = data.map((item, index) => {
    return {
      key: index + 1,
      fullname: item.fullname,
      email: item.email,
      date: item.createdAt.split("", 10),
      total: item.total,
      note: item.note,
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
          <Button
            className="tw-mx-1 button-action tw-rounded-[var(--rounded-1)] "
            type="primary"
            size="large"
          >
            <Link href={`/admin/invoices/edit/${item._id}`}>
              <a href="">
                <i className="bi bi-pencil-square"></i>
              </a>
            </Link>
          </Button>
        </div>
      ),

      detail: (
        <button>
          <Link href={`${path.private.invoiceRoute}/${item._id}`}>
            <Icon.Eye className="tw-text-xl" />
          </Link>
        </button>
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
