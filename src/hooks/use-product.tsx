import React from 'react'
import useSWR from 'swr'
import { add, removeItem } from '../api/product'

const useProducts = () => {
    const { data, error, mutate } = useSWR("/products")

    const create = async (item: any) => {
        const product = await add(item)
        mutate([...data, product])
    }

    const remove = async (id: any) => {
        await removeItem(id)
        const newData = data.filter(item => item.id != id)
        mutate(newData)
    }

    return {
        data,
        error,
        create,
        remove
    }

}

export default useProducts