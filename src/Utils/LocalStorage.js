// get
export const loadInstalledApps = () => {
    try{
        const data = localStorage.getItem('installedApps')
        return data ? JSON.parse(data) : []
    }
    catch (err) {
    console.log(err)
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
    catch (err) {
    console.log(err);
    }
}

// delete
export const removeFromInstalledApps = id => {
    const installedApps =loadInstalledApps()
    try{
        const updatedInstalledApps = installedApps.filter(app => app.id !== id)
        localStorage.setItem('installedApps', JSON.stringify(updatedInstalledApps))
    }
    catch (err) {
    console.log(err)
    }
}
