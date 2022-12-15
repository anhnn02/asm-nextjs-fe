/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { getAll, search } from '@/api/product'
import { getAll as getAllCate } from '@/api/category'
import Button from '@/components/Button'
import ListProduct from '@/components/client/shop/ListProduct'
import Icon from '@/components/Icon'
import Meta from '@/components/Meta'
import { SearchResult } from '@/models/searchResult'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../shop/Shop.module.scss'
import { ICategory } from '@/models/category'
import { path } from '@/constants'
import { IProduct } from '@/models/product'

interface ISearchProps {
  result: IProduct;
  keyword: string;
}
const Search = ({ result, keyword }: ISearchProps) => {
  const [categories, setCategories] = useState<any>();
  useEffect(() => {
    const getCategories = async () => {
      const data: ICategory | any = await getAllCate()
      setCategories(data);
    }
    getCategories()
  }, [])
  return (
    <>
      <Meta
        title={`${keyword}`}
        description={`${keyword} | Bonik`}
      />
      <div className={styles['shop']}>
        <div className={styles['shop-search']}>
          <div className="">
            <div className="tw-flex tw-justify-between tw-items-center tw-space-x-3">
              <Icon.Search className='!tw-text-4xl' />
              <div className="">
                <span className={styles['shop-search__key-search']}>Searching for “ <span className="tw-text-primary">{keyword}</span> ”</span>
                <span className={styles['shop-search__search-text']}>{result.length} results found</span>
              </div>
            </div>
          </div>
          {/* <div className={styles['shop-search__search-filter']}>
            <span className={styles['shop-search__search-text']}>Short by</span>
            <select className="tw-select tw-select-primary tw-border-[#DAE1E7] focus:tw-border-primary focus:tw-outline-primary tw-w-[160px] tw-max-w-xs">
              <option disabled selected>What is the</option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </div> */}
        </div>
        <div className={styles['shop-main']}>
          <div className={styles['shop-sidebar']}>
            <div className={styles['shop-sidebar-section']}>
              <h2 className={styles['shop-sidebar-section__title']}>
                Categories
              </h2>
              <ul className={styles['shop-sidebar__cate-list']}>
                {
                  categories?.map((item, index) => (
                    <li key={index}>
                      <Link href={path.public.categoryRoute + `/` + item._id}><a href="" className={styles['shop-sidebar__cate-item']}>{item.name}</a></Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className={styles['shop-sidebar-section']}>
              <h2 className={styles['shop-sidebar-section__title']}>
                Size
              </h2>
              <div className={styles['shop-sidebar-variation']}>
                <form>
                  <div className={`${styles['form-group']} ${styles['form-group-35']}`}>
                    <input type="checkbox" id="size-35" defaultValue="2" />
                    <label htmlFor="size-35"></label>
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-36']}`}>
                    <input type="checkbox" id="size-36" />
                    <label htmlFor="size-36"></label>
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-37']}`}>
                    <input type="checkbox" id="size-37" />
                    <label htmlFor="size-37"></label>
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-38']}`}>
                    <input type="checkbox" id="size-38" />
                    <label htmlFor="size-38"></label>
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-39']}`}>
                    <input type="checkbox" id="size-39" />
                    <label htmlFor="size-39"></label>
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-40']}`}>
                    <input type="checkbox" id="size-40" />
                    <label htmlFor="size-40"></label>
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-41']}`}>
                    <input type="checkbox" id="size-41" />
                    <label htmlFor="size-41"></label>
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-42']}`}>
                    <input type="checkbox" id="size-42" />
                    <label htmlFor="size-42"></label>
                  </div>
                  <div className={`${styles['form-group']} ${styles['form-group-43']}`}>
                    <input type="checkbox" id="size-43" />
                    <label htmlFor="size-43"></label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={styles['shop-product']}>
            <div className={styles['shop-product-list']}>
              <ListProduct data={result} />
            </div>
            <div className={styles['shop-product-pagination']}>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const keyword = query.keyword as string;
    if (!keyword) {
      return {
        notFound: true
      }
    }
    const result = await search(keyword);
    if (!result) {
      return {
        notFound: true
      }
    }
    return {
      props: {
        result,
        keyword,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};


export default Search
