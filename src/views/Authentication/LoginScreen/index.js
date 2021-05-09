import {
  makeStyles,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import FooterCopyright from "../../../components/FooterCopyright";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { ROUTER_NAME } from "../../../routers/typeRouter";
import { REGEX } from "../../../constants/regex";
import {
  dataLoginSelector,
  login,
} from "../../../store/slices/auth/loginSlices";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: theme.spacing(20),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textError: {
    color: "red",
    fontSize: 14,
    textAlign: "left",
  },
}));

function LoginScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { loading, hasErrors } = useSelector(dataLoginSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (params) => {
    dispatch(login({ ...params, push }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {hasErrors && (
          <Alert severity="error">Account or password is incorrect</Alert>
        )}
        {/* <img className={classes.avatar} src={Logo} /> */}
        <h1>LOGIN</h1>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register("email", { required: true, pattern: REGEX.email })}
          />
          {errors.email && (
            <Typography className={classes.textError}>
              This field email is required
            </Typography>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <Typography className={classes.textError}>
              This field password is required
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign In"}
          </Button>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Link to={ROUTER_NAME.FORGOT_PASSWORD_SCREEN} variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <FooterCopyright />
      </Box>
    </Container>
  );
}

export default LoginScreen;
