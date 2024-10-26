import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import bodyParser from "body-parser";
import User from "./routes/DiwaliLovers.js";


const app = express();
const PORT = 4000;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/couplesubmit", async (req, res) => {
    try {
        const couples = await User.create({
            name: req.body['name'],
            loversName: req.body['love']
        });
        console.log("Data saved:", couples);
        res.redirect("/yourFortune");
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("An error occurred while saving data.");
    }
});


app.get("/yourFortune", (req, res) => {
    res.render("fortune");
})


app.listen(PORT, (req, res) => {
    console.log(`${PORT} is running`);
});