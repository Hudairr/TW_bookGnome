import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import bookRoute from "../backend/route/book.route.js"
import userRoute from "../backend/route/user.route.js"

dotenv.config(); // Load environment variables from .env file

const app = express()

app.use(cors(
    {
        origin: ["https://tw-book-gnome-frontend.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true,
        exposedHeaders: ["set-cookie]
    }
));
app.use(express.json());

app.get('/', (req, res)=>{
    res.json("Connected to Express. Hello World!")
})

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

// connecting to MongoDB Server
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error connecting to MongoDB:", error));


// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Book Gnome Server is listening on port ${PORT}`)
})
