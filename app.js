var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");
const session = require("express-session");
const { verifyUser, verifyAdmin } = require("./middlewares/auth");

//variables globales dotenv
dotenv.config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const galgos = require("./routes/galgos");
const registro = require("./routes/registro");
const login = require("./routes/login");
const adminIndex = require("./routes/admin/index");
const adminGalgos = require("./routes/admin/galgos");
const adminUser = require("./routes/admin/users");
const adminOrg = require("./routes/admin/organizacion");
const adminVoluntarios = require("./routes/admin/voluntarios");
const users = require("./routes/usuario");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//config de session
app.use(
  session({
    secret: "secretPassword",
    cookie: { maxAge: null },
    resave: true,
    saveUninitialized: false,
  })
);
//all
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/galgos", galgos);
app.use("/registro", registro);
app.use("/login", login);
//users
app.use("/usuario", verifyUser, users);

//admin
app.use("/admin", adminIndex);
app.use("/admin/galgos", adminGalgos);
app.use("/admin/users", adminUser);
app.use("/admin/organizacion", adminOrg);
app.use("/admin/voluntarios", adminVoluntarios);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
