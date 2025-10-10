import axios from 'axios'
import { useEffect, useState } from 'react'

const useApps = (search = '') => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchLoading, setSearchLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios('../appsData.json')
            .then(data => setApps(data.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        setSearchLoading(true)
        axios('../appsData.json')
            .then(data => {
                const allApps = data.data

            if (search.trim()) {
                const filteredApps = allApps.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
                setApps(filteredApps)
                setSearchLoading(false)
            } else {
                setApps(allApps)
                setSearchLoading(false) 
            }
        })
        .catch(err => console.log(err))
        .finally(() => {
            if (!search.trim()) setLoading(false) 
        })
    }, [search])

    return { apps, loading, searchLoading }
}

export default useApps;