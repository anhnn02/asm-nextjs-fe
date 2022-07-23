import LayoutAdmin from '@/components/Layout/admin'
import React from 'react'
import { Table, Tag, Space } from 'antd';
import { Button, Menu, Dropdown } from 'antd';
import Link from 'next/link';

type Props = {}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action'
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];

const ProductList = (props: Props) => {
    const dataSource = data.map((item, index) => {
        return {
            key: index + 1,
            name: item.name,
            age: item.age,
            address: item.address,
            action: <div>
                <Button className='button-action' type="primary" danger size='large'><i className="bi bi-trash3"></i></Button>
                <Button className='tw-mx-1 button-action' type="primary" size='large'><Link href="/admin/products"><a href=""><i className="bi bi-pencil-square"></i></a></Link></Button>
            </div >
        }
    })
    return (
        <div>
            <Table columns={columns} dataSource={dataSource}
                pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }}
            />
        </div>
    )
}

ProductList.Layout = LayoutAdmin

export default ProductList