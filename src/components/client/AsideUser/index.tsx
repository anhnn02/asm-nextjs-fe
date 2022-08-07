import Icon from '@/components/Icon'
import { path } from '@/constants'
import useInvoice from '@/hooks/use-invoice'
import useUser from '@/hooks/use-user'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './AsideUser.module.scss'

type Props = {}

const AsideUser = (props: Props) => {
  const isLogin = useSelector(data => data.user.isAuthenticated)
  const userCurrent = useSelector(data => data.user.current)
  const [userOrder, setUserOrder] = useState();
  const { detail } = useUser()
  let idUser = ""
  const router = useRouter()
  if (!isLogin) {
    router.push(path.public.notFound)
  } else {
    idUser = userCurrent.user._id;
  }

  useEffect(() => {
    const getUserOrder = async () => {
      const data = await detail(idUser);
      setUserOrder(data);
    }
    getUserOrder()
  }, [])
  return (
    <div className={styles['aside_user']}>
      <div className={styles['boder-aside_user']}>
        <div>
          <h3 className={styles['header-aside_user']}>dashboard</h3>
          <div className={styles['row-aside_user_actived']}>
            <div><Link href={path.public.ordersRoute}><a><Icon.Order className={styles['icon-aside_user']} content="" />orders</a></Link></div>
            <div><Link href='#'><a>{userOrder?.invoices.length}</a></Link></div>
          </div>
          <div className={styles['row-aside_user']}>
            <div><Link href='#'><a><Icon.Heart className={styles['icon-aside_user']} content="" />wishlist</a></Link></div>
            <div><Link href='#'><a>19</a></Link></div>
          </div>
          <div className={styles['row-aside_user']}>
            <div><Link href='#'><a><Icon.Headset className={styles['icon-aside_user']} content="" />support tickets</a></Link></div>
            <div><Link href='#'><a>1</a></Link></div>
          </div>
        </div>
        <div>
          <h3 className={styles['header-aside_user']}>account settings</h3>
          <div className={styles['row-aside_user']}>
            <div><Link href='#'><a><Icon.Order className={styles['icon-aside_user']} content="" />profile info</a></Link></div>
            <div><Link href='#'><a>3</a></Link></div>
          </div>
          <div className={styles['row-aside_user']}>
            <div><Link href='#'><a><Icon.HouseDoor className={styles['icon-aside_user']} content="" />address</a></Link></div>
            <div><Link href='#'><a>16</a></Link></div>
          </div>
          <div className={styles['row-aside_user']}>
            <div><Link href='#'><a><Icon.Payment className={styles['icon-aside_user']} content="" />payment methods</a></Link></div>
            <div><Link href='#'><a>4</a></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsideUser