// Add your code here
// js

// POST /users
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(object => {
        document.body.append(object["id"]);
    })
    .catch(error => {
        document.body.append(error.message);
    })
}

submitData("Steve", "steve@mail.com");


// // POST /users using the dog example
// const formData = {
//     name: "Steve",
//     email: "steve@steve",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/users", configurationObject)
//     .then(response => response.json())
//     .then(object => console.log(object))
//     .catch(error => {
//         alert("Bad things happen!");
//         console.log(error.message);
//     });



// // POST /dogs
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(response => response.json())
//     .then(object => console.log(object))
//     .catch(error => {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });
    
// OR directly in the fetch() call:
// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Dora",
//         dogBreed: "Labrador"
//     })
// });




