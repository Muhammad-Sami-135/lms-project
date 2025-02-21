import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Input,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { db } from "../../Screens/Firebaseconfig";

export const ClassForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [date, setDate] = useState();
  const navigate = useNavigate();

  console.log(firstName);
  console.log(lastName);
  console.log(Email);
  console.log(number);
  console.log(date);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const userObj = {
        firstName,
        lastName,
        Email,
        number,
        date,
      };
      const response = await addDoc(collection(db, "Class"), userObj);
      console.log(response);
      navigate("/Dashboard/ClassList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Paper
        sx={{
          width: "50%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "white",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              marginBottom: 1,
            }}
          >
            Class Form
          </Typography>

          <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <Input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              sx={{ width: "100%" }}
              type="text"
              name="firstName"
              placeholder="Enter your first name"
            />
            <br />
            <br />

            <label>Last Name:</label>
            <Input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              fullWidth
            />
            <br />
            <br />

            <label>Email:</label>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              placeholder="Enter your email"
              fullWidth
            />
            <br />
            <br />

            <label>Phone Number:</label>
            <Input
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              type="number"
              name="number"
              placeholder="Enter your Phone Number"
              fullWidth
            />
            <br />
            <br />

            <label>Date</label>
            <Input
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              name="date"
              fullWidth
            />
            <br />
            <br />

            <FormLabel>Gender</FormLabel>
            <RadioGroup defaultValue="female" name="gender">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
            <br />

            <Button
              sx={{ background: "rgb(16,129,238 , 0.6)", width: "100%" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Paper>
    </>
  );
};
