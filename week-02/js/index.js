const url = "./task.json";
fetch(url)
    .then((res) => res.json())
    .then(console.log);


