// Add your code here
// js


// POST /dogs
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject);

// OR directly in the fetch() call:
fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Dora",
        dogBreed: "Labrador"
    })
});




