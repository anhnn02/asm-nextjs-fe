import React from 'react'

type Props = {}

const SearchForm = (props: Props) => {
    return (
        <div className="tw-flex tw-justify-center tw-flex-1 lg:tw-mr-32">
            <div className="tw-relative tw-w-full tw-max-w-xl tw-mr-6 focus-within:tw-text-purple-500">
                <div className="tw-absolute tw-inset-y-0 tw-flex tw-items-center tw-pl-2">
                <i className="bi bi-search"></i>
                </div>
                <input className="tw-w-full tw-pl-8 tw-p-2 tw-text-sm tw-text-gray-700 tw-placeholder-gray-600 tw-bg-gray-100 tw-border-0 tw-rounded-md :tw-placeholder-gray-500 :focus:tw-shadow-outline-gray :focus:tw-placeholder-gray-600 :tw-bg-gray-700 :tw-text-gray-200 focus:tw-placeholder-gray-500 focus:tw-bg-white focus:tw-border-purple-300 focus:tw-outline-none focus:tw-shadow-outline-purple tw-form-input" type="text" placeholder="Search..." aria-label="Search" />
            </div>
        </div>
    )
}

export default SearchForm