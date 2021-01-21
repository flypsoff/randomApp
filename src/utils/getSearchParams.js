const getSearchParams = (obj) => {
    let arr = []
      for(let key in obj) {
        if(obj[key]) {
          arr.push(`${key}=${obj[key]}`)
        }
      }
    return arr.join('&')
}

export default getSearchParams