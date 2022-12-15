import LayoutAdmin from "@/components/Layout/admin";
import React from "react";
import { Table, Tag, Space } from "antd";
import { Button, Menu, Dropdown } from "antd";
import Link from "next/link";
import styles from "./Invoice.module.scss";
import stylesAdmin from '@/styles/admin/Admin.module.scss';
import Icon from "@/components/Icon";
import { path } from "@/constants";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { userInfo } from "os";
import useInvoice from "@/hooks/use-invoice";
import { formatPrice } from "@/utils/formatNumber";

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
      total: formatPrice(item.total),
      note: item.note,
      status: (
        <div>
          {item.status === 0 ? (
            <span className={styles["order_item"]}>
              <span className={styles["order_status_pending-progress"]}>
                Pending
              </span>
            </span>
          ) : item.status === 1 ? (
            <span className={styles["order_item"]}>
              <span className={styles["order_status_pending-shipping"]}>
                Shipping
              </span>
            </span>
          ) : item.status === 2 ? (
            <span className={styles["order_item"]}>
              <span className={styles["order_status_delivered"]}>
                Delivered
              </span>
            </span>
          ) : item.status === 3 ? (
            <span className={styles["order_item"]}>
              <span className={styles["order_status_cancelled"]}>Cancel</span>
            </span>
          ) : item.status === 4 ? (
            <span className={styles["order_item"]}>
              <span className={styles["order_status_cancelled"]}>
                Order canceled
              </span>
            </span>
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
            <Link href={`${path.private.invoiceRoute}/${item._id}`}>
              {/* <Link href={`/admin/invoices/edit/${item._id}`}> */}

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
      <h4 className={stylesAdmin['title-admin']}>List Invoice</h4>
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
