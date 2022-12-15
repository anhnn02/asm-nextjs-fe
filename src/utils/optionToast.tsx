/* eslint-disable @next/next/no-img-element */
import Icon from '@/components/Icon';
import React from 'react'

export const optionDanger = (action, title: string = "Are you want to delete this item?",
    subtitle: string = "Do you really want to delete this item? This process cannot be undone",
    nameBtnAction: string = "Delete"
) => {
    const option = {
        customUI: ({ onClose }) => {
            return (
                <div className="tw-min-w-96 tw-h-screen tw-animated tw-fadeIn tw-faster  tw-fixed  tw-left-0 tw-top-0 tw-flex tw-justify-center tw-items-center tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none tw-bg-no-repeat tw-bg-center tw-bg-cover" id="modal-id">
                    <div className="tw-absolute tw-bg-black tw-opacity-80 tw-inset-0 tw-z-0"></div>
                    <div className="tw-w-full tw-max-w-lg tw-p-2 tw-relative tw-mx-auto tw-my-auto tw-rounded-xl tw-shadow-lg tw-bg-white ">
                        <div className="">
                            <div className="tw-text-center tw-p-5 tw-flex-auto tw-justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="tw-w-16 tw-h-16 tw-flex tw-items-center tw-text-red-500 tw-mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <h2 className="tw-text-xl tw-font-bold tw-py-4">{title}</h2>
                                <p className="tw-text-sm tw-text-gray-500 tw-px-8">{subtitle}</p>
                            </div>
                            <div className="tw-p-3 tw-mt-2 tw-text-center tw-space-x-4 md:tw-block">
                                <button onClick={onClose}
                                    className="tw-mb-2 md:tw-mb-0 tw-bg-white tw-px-5 tw-py-2 tw-text-sm tw-shadow-sm tw-font-medium tw-tracking-wider tw-border tw-text-gray-600 tw-rounded-full hover:tw-shadow-lg hover:tw-bg-gray-100">
                                    Cancel
                                </button>
                                <button onClick={() => {
                                    <>
                                        {action()}
                                    </>
                                    onClose();
                                }}
                                    className="tw-mb-2 md:tw-mb-0 tw-bg-red-500 tw-border
                                 tw-border-red-500 tw-px-5 tw-py-2 tw-text-sm tw-shadow-sm tw-font-medium tw-tracking-wider tw-text-white tw-rounded-full hover:tw-shadow-lg hover:tw-bg-red-600">{nameBtnAction}</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    return option
}
export const optionWarning = (action, title: string = "You are log out!",
    subtitle: string = "Please sign in to continue buy item!", nameBtnAction: string = "Sign Up"
) => {
    const option = {
        customUI: ({ onClose }) => {
            return (
                <div className="tw-min-w-96 tw-h-screen animated fadeIn faster  tw-fixed  tw-left-0 tw-top-0 tw-flex tw-justify-center tw-items-center tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none tw-bg-no-repeat tw-bg-center tw-bg-cover" id="modal-id">
                    <div className="tw-absolute tw-bg-black tw-opacity-20 tw-inset-0 tw-z-0"></div>
                    <div className="tw-w-full tw-max-w-lg tw-p-5 tw-relative tw-mx-auto tw-my-auto tw-rounded-xl tw-shadow-lg  tw-bg-white ">
                        <div className="">
                            <div className="tw-text-center tw-p-5 tw-flex-auto tw-justify-center">
                                <img className="tw-w-20 tw-inline-block" src="https://i.imgur.com/dPfcZbE.png" alt="" />
                                <h2 className="tw-text-xl tw-font-bold tw-py-4">{title}</h2>
                                <p className="tw-text-sm tw-text-gray-500 tw-px-8">{subtitle}</p>
                            </div>
                            <div className="tw-p-3 tw-mt-2 tw-text-center tw-space-x-4 md:tw-block">
                                <button onClick={onClose}
                                    className="tw-mb-2 md:tw-mb-0 tw-bg-white tw-px-5 tw-py-2 tw-text-sm tw-shadow-sm tw-font-medium tw-tracking-wider tw-border tw-text-gray-600 tw-rounded-full hover:tw-shadow-lg hover:tw-bg-gray-100">
                                    Cancel
                                </button>
                                <button onClick={() => {
                                    <>
                                        {action()}
                                    </>
                                    onClose();
                                }}
                                    className="tw-mb-2 md:tw-mb-0 tw-bg-green-500 tw-border
                                 tw-border-green-500 tw-px-5 tw-py-2 tw-text-sm tw-shadow-sm tw-font-medium tw-tracking-wider tw-text-white tw-rounded-full hover:tw-shadow-lg hover:tw-bg-green-600">{nameBtnAction}</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        },
    }
    return option
}