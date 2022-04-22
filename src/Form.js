import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const postDAta = (data) => {
    fetch(`https://money-manager-b.herokuapp.com/money-manager/data`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then(navigate("/"));
  };

  const [color, setColor] = useState(true);

  const formValidation = yup.object({
    account: yup.string().required(),
    category: yup.string().required(),
    amount: yup.number().required().min(1),
    note: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      type: !color ? "expense" : "income",
      account: "",
      category: "",
      amount: "",
      note: "",
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      postDAta(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form">
        <div className="hor">
          <Button
            color="success"
            variant={color ? "contained" : "outlined"}
            onClick={() => {
              setColor(true);
            }}
          >
            Income
          </Button>
          <Button
            color="error"
            variant={color ? "outlined" : "contained"}
            onClick={() => {
              setColor(false);
            }}
          >
            Expense
          </Button>
        </div>
        <FormControl
          color={color ? "success" : "error"}
          variant="standard"
          sx={{ minWidth: 200 }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Account
          </InputLabel>
          <Select
            value={formik.values.account}
            onChange={formik.handleChange}
            id="account"
            name="account"
          >
            <MenuItem value={"cash"}>Cash</MenuItem>
            <MenuItem value={"card"}>Card</MenuItem>
            <MenuItem value={"accounts"}>Accounts</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          color={color ? "success" : "error"}
          variant="standard"
          sx={{ minWidth: 200 }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Category
          </InputLabel>

          {color ? (
            <>
              <Select
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="category"
                name="category"
              >
                <MenuItem value={"allowance"}>Allowance</MenuItem>
                <MenuItem value={"salary"}>Salary</MenuItem>
                <MenuItem value={"petty cash"}>Petty Cash</MenuItem>
                <MenuItem value={"bonus"}>Bonus</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </>
          ) : (
            <>
              <Select
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="category"
                name="category"
              >
                <MenuItem value={"food"}>Food</MenuItem>
                <MenuItem value={"social"}>Social</MenuItem>
                <MenuItem value={"transport"}>Transport</MenuItem>
                <MenuItem value={"self-development"}>Self-Development</MenuItem>
                <MenuItem value={"household"}>Household</MenuItem>
                <MenuItem value={"beauty"}>Beauty</MenuItem>
                <MenuItem value={"health"}>Health</MenuItem>
                <MenuItem value={"gift"}>Gift</MenuItem>
                <MenuItem value={"education"}>Education</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </>
          )}
        </FormControl>
        <TextField
          type="number"
          value={formik.values.amount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="amount"
          name="amount"
          color={color ? "success" : "error"}
          label="Amount"
          variant="standard"
        />
        <TextField
          value={formik.values.note}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.note ? formik.errors.note : ""}
          id="note"
          name="note"
          color={color ? "success" : "error"}
          //   id="standard-basic"
          label="Note"
          variant="standard"
        />
        <div className="right">
          <Button
            color={color ? "success" : "error"}
            variant="outlined"
            type="submit"
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Form;
