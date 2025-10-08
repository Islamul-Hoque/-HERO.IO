// get
export const loadInstalledApps = () => {
    try{
        const data = localStorage.getItem('installedApps')
        return data ? JSON.parse(data) : []
    }
    catch{
        return []
    }
}

// save
export const saveInstalledApps = (singleApp) => {
    const installedApps = loadInstalledApps()
    try{
        const isDuplicate = installedApps.some( app => app.id  === singleApp.id)
        if(isDuplicate) return alert('Already added in Installed Apps ')
            const updatedInstalledApps = [...installedApps, singleApp]
        localStorage.setItem('installedApps', JSON.stringify(updatedInstalledApps))
    }
    catch{
        return []
    }
}


// delete
// export const removeFromWishlist = id => {
//     const wishlist = loadWishlist()
//     try {
//     const updatedWishlist = wishlist.filter(p => p.id !== id)
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
//     } catch (err) {
//     console.log(err)
//     }
// }