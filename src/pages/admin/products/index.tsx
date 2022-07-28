/* eslint-disable @next/next/no-img-element */
import LayoutAdmin from '@/components/Layout/admin'
import React from 'react'
import { Table, Tag, Space } from 'antd';
import { Button, Menu, Dropdown } from 'antd';
import Link from 'next/link';
import useProduct from '@/hooks/use-product';
import styles from '../AdminContent.module.scss'

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
        title: 'RegularPrice',
        dataIndex: 'regularPrice',
        key: 'regularPrice',
    },
    {
        title: 'SalePrice',
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
    console.log(products);
    // const dataSource = products;
    const dataSource = products.map((item, index) => {
        return {
            key: index + 1,
            name: item.name,
            regularPrice: item.regularPrice,
            salePrice: item.salePrice,
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
            <div className={styles['header_content']}>
                <div>
                    <h1 className={styles['title_table']}>list product</h1>
                </div>
                <Link href='/admin/products/add'>
                    <button className={styles['btn-multichoice_item']}>Add product +
                    </button>
                </Link>
            </div>
            <Table columns={columns} dataSource={dataSource}
                pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }} />
        </div>
    )
}

ProductList.Layout = LayoutAdmin

export default ProductList
