/* eslint-disable @next/next/no-img-element */
import LayoutAdmin from '@/components/Layout/admin'
import React from 'react'
import { Table, Tag, Space } from 'antd';
import { Button, Menu, Dropdown } from 'antd';
import Link from 'next/link';
import useSlide from '@/hooks/use-slide';

type Props = {}

const columns = [
    {
        title: 'Img',
        dataIndex: 'img',
        key: 'img',
    },
    
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action'
    },
];



const SlideList = (props: Props) => {
    const { data, remove, error } = useSlide()
    // console.log(data);
    if (!data) return <div>Loading...</div>
    if (error) return <div>Failed to loading</div>
    const dataSource = data.map((item, index) => {
        return {
            key: index + 1,
            img: <img src={item.img} className='img-admin-slide' alt=""  /> ,
            action: <div>
                <Button onClick={() => remove(item._id)} className='button-action' type="primary" danger size='large'><i className="bi bi-trash3"></i></Button>
                <Button className='tw-mx-1 button-action' type="primary" size='large'><Link href={`/admin/slide/${item._id}`}><a href=""><i className="bi bi-pencil-square"></i></a></Link></Button>
            </div >
        }
    })
    return (
      <div>
        <div className='head-admin-slide'>
          <h2 className="title-admin-slide">List Slide</h2>
          <button className='btn-add-slide'>
            <Link href={`/admin/slide/add`}><a className='add-slide' href="">Add</a></Link>
          </button>
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

SlideList.Layout = LayoutAdmin

export default SlideList