/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Link from 'next/link'
import React from 'react'
import styles from './Shop.module.scss'

type Props = {}

const Shop = (props: Props) => {
  return (
    <div className={styles['shop']}>
      <div className={styles['shop-search']}>
        <div className="">
          <span className={styles['shop-search__key-search']}>Searching for “ mobile phone ”</span>
          <span className={styles['shop-search__search-text']}>48 results found</span>
        </div>
        <div className={styles['shop-search__search-filter']}>
          <span className={styles['shop-search__search-text']}>Short by</span>
          <select className="tw-select tw-select-primary tw-border-[#DAE1E7] focus:tw-border-primary focus:tw-outline-primary tw-w-[160px] tw-max-w-xs">
            <option disabled selected>What is the</option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
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
              <li>
                <Link href=""><a href="" className={styles['shop-sidebar__cate-item']}>Bath Preparations</a></Link>
              </li>
              <li>
                <Link href=""><a href="" className={styles['shop-sidebar__cate-item']}>Eye Makeup Preparations</a></Link>
              </li>
              <li>
                <Link href=""><a href="" className={styles['shop-sidebar__cate-item']}>Eye  Preparations</a></Link>
              </li>
              <li>
                <Link href=""><a href="" className={styles['shop-sidebar__cate-item']}>Hello Makeup Preparations</a></Link>
              </li>
            </ul>
          </div>
          <div className={styles['shop-sidebar-section']}>
            <h2 className={styles['shop-sidebar-section__title']}>
              Size
            </h2>
            <div className={styles['shop-sidebar-variation']}>
              <form>
                <div className={`${styles['form-group']} ${styles['form-group-35']}`}>
                  <input type="checkbox" id="size-35" defaultValue="2"/>
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
            <div className={styles['shop-product__item']}>
              <div className={styles['shop-product__item-img']}>
                <span className="tw-badge tw-bg-primary tw-border-none tw-py-1 tw-text-xs">
                  50% off
                </span>
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div className={styles['shop-product__item-text']}>
                <h3><Link href=""><a href="" className={styles["product__item-title"]}></a></Link></h3>
                <div className={styles['shop-product__item-row']}>
                  <span className={styles['shop-product-start']}>
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </span>
                  <div className={styles['shop-product__item-variation']}>
                    <span className={styles['shop-product-variation__item']}>36</span>
                    <span className={styles['shop-product-variation__item']}>38</span>
                  </div>
                </div>
                <div className={styles['shop-product__item-row']}>
                  <div className="">
                    
                    <span className={`${styles['shop-product-price']} ${styles['shop-product-price--sale']}`}>
                      $125.00
                    </span>
                    <span className={`${styles['shop-product-price']} ${styles['shop-product-price--regular']}`}>
                      $150.00
                    </span>
                  </div>
                  <Button.Transparent className="!tw-py-1 !tw-px-2" content={<Icon.PlusRegular className="tw-text-3xl" />} />
                </div>
              </div>
            </div>
            <div className={styles['shop-product__item']}>
              <div className={styles['shop-product__item-img']}>
                <span className="tw-badge tw-bg-primary tw-border-none tw-py-1 tw-text-xs">
                  50% off
                </span>
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div className={styles['shop-product__item-text']}>
                <h3><Link href=""><a href="" className={styles["product__item-title"]}></a></Link></h3>
                <div className={styles['shop-product__item-row']}>
                  <span className={styles['shop-product-start']}>
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </span>
                  <div className={styles['shop-product__item-variation']}>
                    <span className={styles['shop-product-variation__item']}>36</span>
                    <span className={styles['shop-product-variation__item']}>38</span>
                  </div>
                </div>
                <div className={styles['shop-product__item-row']}>
                  <div className="">
                    <span className={styles['shop-product-price shop-product-price--sale']}>
                      $125.00
                    </span>
                    <span className={styles['shop-product-price shop-product-price--regular']}>
                      $150.00
                    </span>
                  </div>
                  <Button.Transparent className="!tw-py-1 !tw-px-2" content={<Icon.PlusRegular className="tw-text-3xl" />} />
                </div>
              </div>
            </div>
            <div className={styles['shop-product__item']}>
              <div className={styles['shop-product__item-img']}>
                <span className="tw-badge tw-bg-primary tw-border-none tw-py-1 tw-text-xs">
                  50% off
                </span>
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
              <div className={styles['shop-product__item-text']}>
                <h3><Link href=""><a href="" className={styles["product__item-title"]}></a></Link></h3>
                <div className={styles['shop-product__item-row']}>
                  <span className={styles['shop-product-start']}>
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                    <Icon.Star />
                  </span>
                  <div className={styles['shop-product__item-variation']}>
                    <span className={styles['shop-product-variation__item']}>36</span>
                    <span className={styles['shop-product-variation__item']}>38</span>
                  </div>
                </div>
                <div className={styles['shop-product__item-row']}>
                  <div className="">
                    <span className={styles['shop-product-price shop-product-price--sale']}>
                      $125.00
                    </span>
                    <span className={styles['shop-product-price shop-product-price--regular']}>
                      $150.00
                    </span>
                  </div>
                  <Button.Transparent className="!tw-py-1 !tw-px-2" content={<Icon.PlusRegular className="tw-text-3xl" />} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['shop-product-pagination']}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop