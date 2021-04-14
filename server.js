const express = require("express");
const connectDB = require("./helpers/connectDB");
const app = express();

connectDB();
app.use(express.json());
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/post", require("./routes/post"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running om PORT: ${PORT}`));
