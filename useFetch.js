import { useEffect, useState } from "react"

// * Muy interesante el uso del cache
const localCache = {};

const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch()
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            loading: true,
            hasError: false,
            error: null
        })
    }

    const getFetch = async () => {
        if ( localCache[url] ){
            console.log("Usando cache")
            setState({
                data: localCache[url],
                loading: false,
                hasError: false,
                error: null
            })
            return;
        }
        setLoadingState()
        await new Promise(resolve => setTimeout(resolve, 1000))
        try {
            const response = await fetch(url)
            const data = await response.json()
            setState({
                data: data,
                loading: false,
                hasError: false
            })
            localCache[url] = data;
        } catch (error) {
            setState({
                data: null,
                loading: false,
                hasError: true,
                error: error
            })
        }
    }
    

    return {
        data: state.data,
        loading: state.loading,
        hasError: state.hasError,
    }
}

export default useFetch
