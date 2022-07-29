import useSWR from "swr"

const useCategory = () => {
    const {data, error, mutate } = useSWR('/categories');

    return {
        data,
        error
    }
}

export default useCategory