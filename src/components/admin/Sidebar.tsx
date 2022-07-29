/* eslint-disable @next/next/no-img-element */
import { path } from '@/constants'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <aside className="tw-shadow-md tw-z-20 tw-h-full tw-hidden tw-w-64 tw-overflow-y-auto tw-bg-white :tw-bg-gray-800 md:tw-block tw-flex-shrink-0">
            <div className="tw-px-3 tw-py-4 tw-text-gray-500 :tw-text-gray-400">
                <Link href="/">
                    <img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt="" />
                </Link>
                <div className="tw-block tw-mt-8 tw-space-y-2">
                    <div className="tw-px-2">
                        <Link href={path.private.rootRoute} >
                            <a href="" className="!tw-text-black admin-nav__link tw-block tw-space-x-2 tw-w-full tw-p-2 tw-rounded hover:tw-bg-purple-100">
                                <span className="!tw-text-sm tw-font-semibold">
                                    <i className="bi bi-bar-chart-line-fill !tw-text-sm"></i> Dashboard</span>
                            </a>
                        </Link>
                    </div>
                    <div className="tw-px-2">
                        <Link href={path.private.categoriesRoute}>
                            <a href="" className="!tw-text-black admin-nav__link tw-block tw-space-x-2 tw-w-full tw-p-2 tw-rounded hover:tw-bg-purple-100">
                                <span className="!tw-text-sm tw-font-semibold">
                                    <i className="bi bi-grid-fill !tw-text-sm"></i> Category</span>
                            </a>
                        </Link>
                    </div>
                    <div className="tw-px-2">
                        <Link href={path.private.productsRoute}>
                            <a href='' className="!tw-text-black admin-nav__link tw-block tw-space-x-2 tw-w-full tw-p-2 tw-rounded hover:tw-bg-purple-100">
                                <span className="!tw-text-sm tw-font-semibold">
                                    <i className="bi bi-box-fill !tw-text-sm"></i> Product</span>
                            </a>
                        </Link>
                    </div>
                    <div className="tw-px-2">
                        <Link href={path.private.slidesRoute}>
                            <a href='' className="!tw-text-black admin-nav__link tw-block tw-space-x-2 tw-w-full tw-p-2 tw-rounded hover:tw-bg-purple-100">
                                <span className="!tw-text-sm tw-font-semibold">
                                    <i className="bi bi-box-fill !tw-text-sm"></i> Slide</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="tw-px-2">
              <Link href={path.private.categoriesRoute}>
                <a
                  href=""
                  className="!tw-text-black admin-nav__link tw-block tw-space-x-2 tw-w-full tw-p-2 tw-rounded hover:tw-bg-purple-100"
                >
                  <span className="!tw-text-sm tw-font-semibold">
                    <i className="bi bi-grid-fill !tw-text-sm"></i> Category
                  </span>
                </a>
              </Link>
            </div>
            <div className="tw-px-2">
              <Link href={path.private.productsRoute}>
                <a
                  href=""
                  className="!tw-text-black admin-nav__link tw-block tw-space-x-2 tw-w-full tw-p-2 tw-rounded hover:tw-bg-purple-100"
                >
                  <span className="!tw-text-sm tw-font-semibold">
                    <i className="bi bi-box-fill !tw-text-sm"></i> Product
                  </span>
                </a>
              </Link>
            </div>
            
      </aside>
    );
}

export default Sidebar