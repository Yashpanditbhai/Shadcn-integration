import express from "express";
import cors from "cors";
import { auth } from "./auth/auth";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Attach Better Auth handler
app.use("/api/auth", auth.handler);

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
