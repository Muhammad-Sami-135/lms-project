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
import React from "react";

export const AdmissionForm = () => {
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
            Admission Form
          </Typography>

          <form>
            <label>First Name:</label>
            <Input
              sx={{ width: "100%" }}
              type="text"
              name="firstName"
              placeholder="Enter your first name"
            />
            <br />
            <br />

            <label>Last Name:</label>
            <Input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              fullWidth
            />
            <br />
            <br />

            <label>Email:</label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              fullWidth
            />
            <br />
            <br />

            <label>Phone Number:</label>
            <Input
              type="number"
              name="number"
              placeholder="Enter your Phone Number"
              fullWidth
            />
            <br />
            <br />

            <label>Date</label>
            <Input type="date" name="date" fullWidth />
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
