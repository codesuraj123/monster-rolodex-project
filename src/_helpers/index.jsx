import URLSearchParams from "url-search-params"

const setUrlParams = (Searchs) => {
    const urlParams = new URLSearchParams(window.location.hash)
    Object.entries(Searchs).forEach(([key, value]) => urlParams.set(key, value))
    console.log(urlParams.toString());
    return urlParams.toString()
}

export default setUrlParams;