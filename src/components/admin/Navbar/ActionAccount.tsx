/* eslint-disable @next/next/no-img-element */
import Icon from '@/components/Icon'
import { path } from '@/constants'
import { logout } from '@/features/user/user.slice'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import stylesIcon from '../../client/Header/Header.module.scss'
type Props = {}

const ActionAccount = (props: Props) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const userInfor = useSelector((data: any) => data.user.current)
  const btnLogOut = () => {
    dispatch(logout());
    router.push('/login');
    // debugger;
  }
  return (
    <div>
      <ul className="tw-flex tw-items-center tw-flex-shrink-0 tw-space-x-6">
        <li className="tw-flex">
          <button className="tw-rounded-md focus:tw-outline-none focus:tw-shadow-outline-purple"
            aria-label="Toggle color mode">
            {/* <template x-if="!">
              <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z">
                </path>
              </svg>
            </template>
            <template x-if="">
              <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"></path>
              </svg>
            </template> */}
          </button>
        </li>
        <li className="tw-relative">
          <button className="tw-relative tw-align-middle tw-rounded-md focus:tw-outline-none focus:tw-shadow-outline-purple">
            <svg className="tw-w-5 tw-h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
              </path>
            </svg>
            <span aria-hidden="true"
              className="tw-absolute tw-top-0 tw-right-0 tw-inline-block tw-w-3 tw-h-3 tw-transform tw-translate-x-1 tw--translate-y-1 tw-bg-red-600 tw-border-2 tw-border-white tw-rounded-full :tw-border-gray-800"></span>
          </button>
        </li>
        <li className="tw-relative">
          <button className="tw-dropdown tw-dropdown-end">
            <Icon.PersonFill className="" />
            <ul className="tw-dropdown-content tw-menu tw-p-2 tw-shadow tw-bg-base-100 tw-rounded-box tw-w-52 tw-capitalize tw-font-semibold">
              <li className='tw-truncate'><p><Icon.Person className={""} /> {userInfor?.user?.name}</p></li>
              <li className=''><p className='' onClick={() => btnLogOut()}><Icon.BoxArrowLeft className={""} /> Log out</p></li>
            </ul>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ActionAccount