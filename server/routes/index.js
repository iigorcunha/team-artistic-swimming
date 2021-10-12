const { Router } = require('express');
const authRouter = require("./auth");
const userRouter = require("./user");
const boardRouter = require("./board");
const cardRouter = require("./card");
const columnRouter = require("./column");
const uploadRouter = require("./uploadImage");
const uploadsRouter = require("./uploadImages");

const routes = Router();

routes.use("/api/auth", authRouter);
routes.use("/api/users", userRouter);
routes.use("/api/board", boardRouter);
routes.use("/api/card", cardRouter);
routes.use("/api/column", columnRouter);
routes.use("/api/upload-image", uploadRouter);
routes.use("/api/upload-images", uploadsRouter);

module.exports = routes;
