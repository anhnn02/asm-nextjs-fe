/* eslint-disable @next/next/no-img-element */
import { path } from '@/constants'
import Link from 'next/link'
import React from 'react'

type Props = {}

const CartEmpty = (props: Props) => {
    return (
        <div className="tw-h-screen tw-flex tw-text-center tw-p-3">
            <div className="tw-m-auto">
                <img
                    className="tw-inline-block tw-w-40"
                    src="https://bonik-react.vercel.app/assets/images/logos/shopping-bag.svg"
                    alt=""
                />
                <div className="tw-my-6">
                    <span className="tw-block">Your shopping bag is empty.</span>
                    <span>Start shopping</span>
                </div>
            </div>
        </div>
    )
}

export default CartEmpty