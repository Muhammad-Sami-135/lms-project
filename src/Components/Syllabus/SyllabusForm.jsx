import { Box, Button, Input, Paper, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Screens/Firebaseconfig";

export const SyllabusForm = () => {
  let [subjectName, setSubjectName] = useState("");
  let [studentClass, setStudentClass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let userobj = {
        subjectName,
        studentClass,
      };

      const response = await addDoc(collection(db, "Syllabus"), userobj);
      console.log("Syllabus Added:", response);

      navigate("/dashboard/syllabusList");
    } catch (error) {
      console.log("Error adding syllabus:", error);
    }
  };

  return (
    <Paper
      sx={{
        width: "50%",
        margin: "100px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
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
            marginBottom: 1,
          }}
        >
          Syllabus Add
        </Typography>
        <br />
        <form onSubmit={handleSubmit}>
          <label>Subject Name:</label>
          <Input
            onChange={(e) => {
              setSubjectName(e.target.value);
            }}
            sx={{ width: "100%" }}
            type="text"
            name="firstName"
            placeholder="Enter your first name"
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
