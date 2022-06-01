import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { theme } from "../theme/default";
import { CREATE_NOTES, GET_ALL_NOTES } from "../graphql/Queries";

function CreateNote() {
  const [createEvent, { loading, data, error }] = useMutation(CREATE_NOTES, {
    refetchQueries: [{ query: GET_ALL_NOTES }],
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Title is required"),
      description: yup.string().required("Description is required"),
    }),
    onSubmit: async (data, reset) => {
      console.log(data);
      await createEvent({ variables: { eventInput: data } })
        .then((res) => {
          toast.success("Created Successfully!!!")
          navigate("/notes")
        })
        .catch((error) => toast.error(error.message));
    },
  });

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Paper
        elevation={4}
        style={{
          borderRadius: 0,

          flexDirection: "column",
          alignItems: "center",
          width: 400,
          margin: "100px auto",
          padding: 20,
          height: "auto",
        }}
      >
        {" "}
        <Typography component="h1" variant="h5">
          Add Note
        </Typography>
        <form style={{ marginTop: theme.spacing(3), width: "100%" }}>
          <TextField
            style={{ marginBottom: theme.spacing(3) }}
            variant="outlined"
            required
            fullWidth
            type="text"
            name="title"
            id="title"
            label="Title"
            autoComplete="title"
            value={formik?.values?.title}
            onChange={formik.handleChange}
            helperText={formik.touched.title ? formik.errors.title : null}
            error={formik.touched.title ? formik.errors.title : null}
          />

          <TextField
            variant="outlined"
            required
            fullWidth
            type="text"
            name="description"
            id="description"
            label="Description"
            autoComplete="description"
            value={formik?.values?.description}
            onChange={formik.handleChange}
            helperText={
              formik.touched.description ? formik.errors.description : null
            }
            error={
              formik.touched.description ? formik.errors.description : null
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            style={{ marginTop: theme.spacing(4) }}
            onClick={formik.handleSubmit}
            disabled={loading}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default CreateNote;
