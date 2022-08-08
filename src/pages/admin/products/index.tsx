/* eslint-disable @next/next/no-img-element */
import LayoutAdmin from '@/components/Layout/admin'
import React from 'react'
import { Table, Tag, Space } from 'antd';
import { Button, Menu, Dropdown } from 'antd';
import Link from 'next/link';
import useProduct from '@/hooks/use-product';
import styles from './Product.module.scss'
import stylesAdmin from '@/styles/admin/Admin.module.scss';
import { formatPercent, formatPrice } from '@/utils/formatNumber';
import MyBtn from '@/components/Button';
import { path } from '@/constants';

type Props = {}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Image',
        dataIndex: 'img',
        key: 'img',
    },
    {
        title: 'Regular Price',
        dataIndex: 'regularPrice',
        key: 'regularPrice',
    },
    {
        title: 'Sale Price',
        dataIndex: 'salePrice',
        key: 'salePrice',
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action'
    },
];

const ProductList = (props: Props) => {
    const { data: products, error, remove } = useProduct();
    if (error) return <div className="">{error}</div>
    if (!products) return <div>Loading...</div>
    const dataSource = products.map((item, index) => {
        return {
            key: index + 1,
            name: <div className="tw-w-40 tw-truncate">{item.name}</div>,
            regularPrice: formatPrice(item.regularPrice),
            salePrice: formatPrice(item.salePrice),
            img: <div><img src={item.img} height={50} width={50} alt="" /></div>,
            size: <div className={styles['grid-size_product']}>{item.size.map((item, index) => {
                return <span className={styles['size_product']} key={index}>{item}</span>
            })}</div>,
            category: item.category?.name,
            action:
                <div>
                    <Button className='tw-mx-1 button-action' type="primary" size='large'><Link href={`/admin/products/${item._id}`}><a href=""><i className="bi bi-pencil-square"></i></a></Link></Button>
                    <Button onClick={() => remove(item._id)} className='button-action' type="primary" danger size='large' ><i className="bi bi-trash3"></i></Button>
                </div >
        }
    })
    return (
      <div>
        <div className={stylesAdmin["header_content"]}>
          <div>
            <h4 className={stylesAdmin["title-admin"]}>List product</h4>
          </div>
          <Link href={`${path.private.productsRoute}/add`}>
            <MyBtn.Fill className={""} content="Add Product" />
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
}

ProductList.Layout = LayoutAdmin

export default ProductList
