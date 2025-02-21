import { Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "../Table";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Screens/Firebaseconfig";
import { useNavigate } from "react-router-dom";

const syllabusColumns = [
  { field: "id", headerName: "ID", width: 190 },
  { field: "subjectName", headerName: "Subject Name", width: 160 },
  { field: "studentClass", headerName: "Class", width: 160 },
];

export const SyllabusList = () => {
  const navigate = useNavigate();

  //Read data

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getDataFromDataBase();
  }, []);

  const getDataFromDataBase = async () => {
    try {
      let arr = [];
      const getData = await getDocs(collection(db, "Syllabus"));
      console.log(getData);

      getData.forEach((doc) => {
        console.log(doc.data());

        arr.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      console.log(...arr);

      setUserData([...arr]);
    } catch (error) {
      console.log(error);
    }
  };

  const addlist = () => {
    navigate("/Dashboard/SyllabusForm");
  };

  return (
    <>
      <div style={{ width: "60%", margin: "20px auto" }}>
        <div
          style={{
            border: "1px solid ,#f5f5f5",
            background: "#f5f5f5  ",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Syllabus List
          </Typography>

          <Button
            onClick={addlist}
            sx={{
              color: "white",
              background: "rgb(16,129,238 , 0.6)",
              marginTop: "5px",
              padding: "6px 10px",
              borderRadius: "8px",
              width: "100%",
            }}
            variant="outlined"
          >
            Add
          </Button>
        </div>
      </div>
      {userData && <DataTable userlist={userData} coloumns={syllabusColumns} />}
    </>
  );
};
