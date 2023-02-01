const LoadScript = async (src) => {
    return new Promise((resolve, reject) => {
      let Script = document.createElement('script')
      Script.src = src
      Script.onload = () => {
        resolve(src)
      }
      Script.onerror = () => {
        reject(new Error("CDN link not working"))
      }
      document.head.append(Script)
    })
  }
  const main2 = async () => {
    let p1 = await LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
    console.log(p1)
  }
  
  main2()