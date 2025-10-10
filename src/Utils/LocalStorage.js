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

export const saveInstalledApps = (singleApp) => {
    const installedApps = loadInstalledApps()
    try{
        const updatedInstalledApps = [...installedApps, singleApp]
        localStorage.setItem('installedApps', JSON.stringify(updatedInstalledApps))
    }
    catch (err) {
    console.log(err);
    }
}

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
