 
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        for (item in contests) {
                console.log(contests[item])
                ihtml += `
                <div class="card" style="width: 18rem;">
                <img src="https://source.unsplash.com/random/900*700/?coding" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${contests[item].name}</h5>
                  <p class="card-text">Start Time ${contests[item].start_time}</p>
                  <p class="card-text">Start Time ${contests[item].end_time}</p>
                  <a href="${contests[item].url}" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        `
        }
        cardContainer.innerHTML = ihtml
})