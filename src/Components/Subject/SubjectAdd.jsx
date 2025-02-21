import { Group } from "@mui/icons-material";
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
import { useNavigate } from "react-router-dom";
import { db } from "../../Screens/Firebaseconfig";

export const SubjectAdd = () => {
  let [addSubject, setAddSubject] = useState("");
  let [studentClass, setStudentClass] = useState("");
  let [group, setGroup] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let userobj = {
        addSubject,
        studentClass,
        group,
      };

      const response = await addDoc(collection(db, "subject"), userobj);
      console.log("Subject Added:", response);
      navigate("/Dashboard/subjectList");
    } catch (error) {
      console.error("Error adding subject:", error);
    }
  };

  return (
    <Paper
      sx={{
        width: "50%",
        margin: "40px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            marginBottom: 3,
          }}
        >
          Subject Add
        </Typography>

        <form onSubmit={handleSubmit}>
          <label>Subject Name:</label>
          <Input
            onChange={(e) => setAddSubject(e.target.value)}
            sx={{ width: "100%" }}
            type="text"
            name="SubjectName"
            placeholder="Enter your Subject Name"
          />
          <br />
          <br />

          <label>Class:</label>
          <Input
            onChange={(e) => setStudentClass(e.target.value)}
            type="text"
            name="class"
            placeholder="Enter your class"
            fullWidth
          />
          <br />
          <br />

          <FormLabel>Select Group</FormLabel>
          <RadioGroup
            name="Group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <FormControlLabel
              value="General Science"
              control={<Radio />}
              label="General Science"
            />
            <FormControlLabel
              value="Pre-Enginnering"
              control={<Radio />}
              label="Pre-Enginnering"
            />
          </RadioGroup>
          <br />

          <Button
            sx={{ background: "rgb(16,129,238 , 0.6)", width: "100%" }}
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        </form>
      </Box>
    </Paper>
  );
};
