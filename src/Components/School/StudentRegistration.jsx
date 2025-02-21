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
import React, { useState } from "react";
import { db } from "../../Screens/Firebaseconfig";
import { useNavigate } from "react-router-dom";

export const StudentRegistration = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [studentClass, setStudentClass] = useState("");
  const navigate = useNavigate("");

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(studentClass);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let userobj = {
        firstName,
        lastName,
        email,
        studentClass,
      };

      const response = await addDoc(collection(db, "students"), userobj);
      console.log("StudentRegister succesfully", response);
      navigate("/Dashboard/StdList");
    } catch (error) {
      console.error("Error adding student:", error);
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
          height: "88vh",
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
            Student Registration
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

            <label>Class:</label>
            <Input
              onChange={(e) => {
                setStudentClass(e.target.value);
              }}
              type="text"
              name="class"
              placeholder="Enter your class"
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
