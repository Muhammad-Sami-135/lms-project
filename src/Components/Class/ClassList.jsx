import { Button, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import DataTable from "../Table";
import { db } from "../../Screens/Firebaseconfig";
import { useNavigate } from "react-router-dom";

const classColumns = [
  { field: "id", headerName: "ID", width: 230 },
  { field: "firstName", headerName: "First Name", width: 180 },
  { field: "lastName", headerName: "Last Name", width: 180 },
  { field: "Email", headerName: "Email", width: 270 },
  { field: "date", headerName: "Date", width: 160 },
];

export const ClassList = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDataFromDataBase();
  }, []);

  const getDataFromDataBase = async () => {
    try {
      let arr = [];
      const getData = await getDocs(collection(db, "Class"));
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

  const addlist = () => {
    navigate("/Dashboard/ClassForm");
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
            Class List
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
      {userData && <DataTable userlist={userData} coloumns={classColumns} />}
    </>
  );
};
