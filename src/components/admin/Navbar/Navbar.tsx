import React from 'react'
import ActionAccount from './ActionAccount'
import SearchForm from './SearchForm'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className="tw-z-10 tw-py-4 tw-bg-white tw-shadow-sm :tw-bg-gray-800">
            <div className="container tw-flex tw-items-center tw-justify-between tw-h-full tw-px-6 tw-mx-auto tw-text-purple-600 :tw-text-purple-300">
                <SearchForm />
                <ActionAccount />
            </div>
        </nav>
    )
}

export default Navbar