import express from "express";

const app = express();
app.use(express.json()); 

// list of allowed requests:
app.get("/test",(request,response) => {
    response.send("😀Hello there! 😀");
});

const fruits = ['apple','banana', 'cherries','orange'];

app.get("/fruits", (req, res) => {
    res.send(fruits); //automatically sads stauts 2000
});

app.post("/fruits", (req, res) => {
    const newFruit = req.body.fruit;
    fruits.push(newFruit);
    res.status(201).send(fruits);
})




// what port to watch / liston to:
app.listen(3000, () => {
    console.log("Listening on https://localhost:3000/...");
});
