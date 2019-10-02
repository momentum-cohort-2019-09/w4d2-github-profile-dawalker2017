fetch("https://swapi.co/api/people/30/")
    .then(res => res.json())
    .then(data => {
        document.querySelector('#name').innerHTML = "Name: " + data.name
        document.querySelector('#height').innerHTML = "Height: " + data.height + "cm"
        document.querySelector('#birthYear').innerHTML = "Birth Year: Circa " + data.birth_year
        return fetch(data.homeworld)
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('#homeworld').innerHTML = "Homeworld: Forest Moon of " + data.name
    })

// fetch("https://swapi.co/api/species/9/")
//     .then(res => res.json())
//     .then(data => {
//         document.querySelector('#species').innerHTML = data.name
//         document.querySelector('#name').innerHTML = data.name
//     })