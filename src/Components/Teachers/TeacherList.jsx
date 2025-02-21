import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "../Table";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Screens/Firebaseconfig";

const teachercolumn = [
  { field: "id", headerName: "ID", width: 190 },
  { field: "firstName", headerName: "First Name", width: 160 },
  { field: "lastName", headerName: "Last Name", width: 160 },
  { field: "email", headerName: "Email", width: 160 },
];

export const TeacherList = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate("");

  const addlist = () => {
    navigate("/Dashboard/TeacherRegis");
  };

  useEffect(() => {
    getDataFromDataBase();
  }, []);

  const getDataFromDataBase = async () => {
    try {
      let arr = [];
      const getData = await getDocs(collection(db, "Teacher"));
      getData.forEach((doc) => {
        console.log(doc.data());

        arr.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      setUserData([...arr]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ width: "60%", margin: "20px auto" }}>
        <div
          style={{
            border: "1px solid ,#f5f5f5",
            background: "#f5f5f5",
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
            Teacher List
          </Typography>

          <Button
            onClick={addlist}
            sx={{
              color: "white",
              marginTop: "5px",
              background: "rgb(16,129,238 , 0.6)",
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
      {userData && <DataTable userlist={userData} coloumns={teachercolumn} />}
    </>
  );
};
