import axios from 'axios'
import { useEffect, useState } from 'react'

const useApps = (search = '') => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [ searchLoading, setSearchLoading ] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        axios('../appsData.json')
            .then(data => setApps(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        setLoading(true)
        axios('../appsData.json')
            .then( data => {
                const allApps = data.data

            if (search.trim()) {
                const filtered = allApps.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
            setApps(filtered)
            } 
            else {
            setApps(allApps)
        }
        })

            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [search])



    return { apps, loading, error, searchLoading }
}

export default useApps;

