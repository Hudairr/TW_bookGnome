import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import bookRoute from "../backend/route/book.route.js"
import userRoute from "../backend/route/user.route.js"

dotenv.config(); // Load environment variables from .env file

const app = express()

<<<<<<< HEAD
app.use(cors());
=======
app.use(cors(
    {
        origin: ["https://tw-book-gnome-frontend.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true,
        exposedHeaders: ["set-cookie]
    }
));
>>>>>>> 153ffff6ad132b703f41d65d13ab4abf36098346
app.use(express.json());

app.get('/', (req, res)=>{
    res.json("Connected to Express. Hello World!")
})

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

// connecting to MongoDB Server
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Book Gnome Server is listening on port ${PORT}`)
})
