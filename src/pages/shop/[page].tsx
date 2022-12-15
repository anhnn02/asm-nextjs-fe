/* eslint-disable react-hooks/exhaustive-deps */
import { getAll as getAllCate } from '@/api/category'
import { getAll as getAllProduct, filterPage, filterProduct } from '@/api/product'
import ListProduct from '@/components/client/shop/ListProduct'
import Icon from '@/components/Icon'
import { path } from '@/constants'
import { getProductFilter, getProductPage } from '@/features/products/products.slice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Shop.module.scss'
type Props = {}

const ProductPage = (props: Props) => {
    let [reRenderPage, setReRenderPage] = useState(0);
    const router = useRouter()
    const dispatch = useDispatch()
    const { page } = router.query
    const [productPage, setProductPage] = useState();
    const [categories, setCategories] = useState<any>();
    const [products, setProducts] = useState<any>();
    // console.log(page)
    useEffect(() => {
        const getData = async () => {
            const data : any = await filterPage(page);
            const dataCate : any = await getAllCate();
            const dataPro : any = await getAllProduct()
            // console.log(data);
            setProductPage(data);
            setCategories(dataCate)
            setProducts(dataPro);
        }
        getData()
    }, [page])
    const totalPage = [];
    for (let index = 1; index <= Math.ceil(products?.length / 9); index++) {
        totalPage.push(index)
    }

    const handleOnChange = async (value) => {
        // console.log(value)
        const dataNew : any = await filterProduct(page, value)
        // console.log(dataNew)
        setProductPage(dataNew);
    }
    return (
        <div className={styles['shop']}>
            <div className={styles['shop-search']}>
                <div className="">
                    <span className={styles['shop-search__key-search']}></span>
                    <span className={styles['shop-search__search-text']}></span>
                </div>
                <div className={styles['shop-search__search-filter']}>
                    <span className={styles['shop-search__search-text']}>Sort by</span>
                    <select onChange={(e) => handleOnChange(e.target.value)}
                        className="tw-select tw-select-primary tw-border-[#DAE1E7] focus:tw-border-primary focus:tw-outline-primary tw-w-[160px] tw-max-w-xs">
                        <option disabled selected>Default</option>
                        <option value="name">Name: A-Z</option>
                        <option value="-name">Name: Z-A</option>
                        <option value="-salePrice">Price: Low-High</option>
                        <option value="salePrice">Price: High-Low</option>
                    </select>
                </div>
            </div>
            <div className={styles['shop-main']}>
                <div className={styles['shop-sidebar']}>
                    <div className={styles['shop-sidebar-section']}>
                        <h2 className={styles['shop-sidebar-section__title']}>
                            Categories
                        </h2>
                        <ul className={styles['shop-sidebar__cate-list']}>
                            {categories?.map((item, index) => (
                                <li key={index}>
                                    <Link href={`${path.public.categoryRoute}/${item._id}`}><a href="" className={styles['shop-sidebar__cate-item']}>{item.name}</a></Link>
                                </li>
                            ))}

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
                        <ListProduct data={productPage} />
                    </div>
                    <div className={styles['shop-product-pagination']}>
                        <div className={styles['pagination_item-selected']}><Icon.ChevronLeft className={styles['pag_previous']} /></div>
                        {totalPage.map((page, index) => (
                            <div key={index} className={styles['item-pagination']}>
                                <span className="show-page"><Link href={`/shop/${page}`} className="page-number"><a href="">{page}</a></Link></span>
                            </div>
                        ))}
                        <div className={styles['pagination_item-selected']}><Icon.ChevronRight className={styles['pag_next']} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage