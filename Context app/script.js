
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        const pics = [
                'https://media.geeksforgeeks.org/wp-content/uploads/20200316135008/red7.png',
                'https://media.geeksforgeeks.org/wp-content/uploads/20200316135014/yellow3.png ',
                'https://media.geeksforgeeks.org/img-practice/MaskGroup58@2x-min-1637846347.png ',
                'https://media.geeksforgeeks.org/img-practice/banner/dsa-self-paced-course-overview-image.png ',
                'https://media.geeksforgeeks.org/img-practice/banner/complete-interview-preparation-thumbnail.png ',
                'https://media.geeksforgeeks.org/img-practice/banner/Amazon-Test-Series-thumbnail.png ',
                'https://media.geeksforgeeks.org/img-practice/banner/dsa-self-paced-thumbnail.png '
        ];
        for (item in contests) {

                let  a = Math.floor(Math.random() * pics.length);
                
                console.log(contests[item])
                ihtml += `
                <div class="card mx-2 my-2" style="width: 20rem;">
                <img src="${pics[a]}" class="card-img-top" alt="..." height="200px  ">
                <div class="card-body text-center">
                  <h5 class="card-title">${contests[item].name}</h5>
                  <p class="card-text">Start Time ${contests[item].start_time}</p>
                  <p class="card-text">Start Time ${contests[item].end_time}</p>
                  <a href="${contests[item].url}" class="btn btn-primary">Visit Us</a>
                </div>
              </div>
        `
        }
        cardContainer.innerHTML = ihtml
})