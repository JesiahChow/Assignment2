
let score = 0;
let questions = []
fetch("https://opentdb.com/api.php?amount=10&category=24&difficulty=medium&type=multiple")
.then(response => {return response.json()})
.then(data => console.log(data.results));
