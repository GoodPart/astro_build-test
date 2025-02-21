
const envLinkUrl = (pageurl: string) => {
    const runType = import.meta.env.MODE;
    let BASE = import.meta.env.BASE_URL;
    
     if (runType === "development") {
         if (pageurl === "/") {
             return `${BASE}`
         }
        return `${BASE}${pageurl}`
     } else {
         if (pageurl === "/") {
             return `/`
         }
        return `${pageurl}/index.html`  
    }
}

const envSrcUrl = (assets: string) => {
    const runType = import.meta.env.MODE;
    let BASE = import.meta.env.BASE_URL;
    return `${BASE}${assets}`

}

export {envLinkUrl, envSrcUrl}