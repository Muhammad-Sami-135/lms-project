import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button, Collapse } from "@mui/material";
import { FaAddressCard, FaChalkboardTeacher, FaSchool } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { IoIosPaper, IoMdLogOut } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlinePayment } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Login from "../Login Page/Login";
import StudentAdd from "../../Components/Student/StudentAdd";
import StudentList from "../../Components/Student/StudentList";

const drawerWidth = 270;

export default function ClippedDrawer() {
  const [student, setstudent] = React.useState(false);
  const [teacher, setTeacher] = React.useState(false);
  const [subjects, setSubjects] = React.useState(false);
  const [syllaybus, setSyllabus] = React.useState(false);
  const [schools, setSchools] = React.useState(false);
  const [classs, setClasss] = React.useState(false);
  const [fees, setFees] = React.useState(false);
  const [admission, setAdmission] = React.useState(false);
  const [exam, setExam] = React.useState(false);
  const [login, setlogin] = React.useState();
  const [stdList, setStdlist] = React.useState();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#1081ee",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" width="300px">
            Learning Managememnt System
          </Typography>
          <Button
            variant="secondary"
            onClick={logout}
            sx={{ marginLeft: "68%" }}
          >
            <IoMdLogOut style={{ fontSize: "25px" }} /> Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{ overflow: "auto", backgroundColor: " rgb(16,129,238 , 0.6)" }}
        >
          {/* Student */}
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setstudent(!student);
                }}
              >
                <ListItemIcon>
                  <AccessibilityIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
                {student ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={student} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("StdAdd");
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Student Registration" />
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("StdList");
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="StudentList" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <Divider />
          {/* Student End */}

          {/* Teacher */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setTeacher(!teacher);
                }}
              >
                <ListItemIcon>
                  <FaChalkboardTeacher />
                </ListItemIcon>
                <ListItemText primary="Teachers" />
                {teacher ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={teacher} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("TeacherRegis");
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="TeacherRegistration" />
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("TeacherList");
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="TeacherList" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <Divider />
          {/* Teacher End*/}

          {/* Subjects */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setSubjects(!subjects);
                }}
              >
                <ListItemIcon>
                  <GiPapers />
                </ListItemIcon>
                <ListItemText primary="Subjects" />
                {subjects ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={subjects} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("SubjectAdd");
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Subjects Add" />
                </ListItemButton>
              </List>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("SubjectList");
                  }}
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Subject List" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <Divider />
          {/* Subjects End*/}

          {/* Syllabus */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setSyllabus(!syllaybus);
                }}
              >
                <ListItemIcon>
                  <IoIosPaper />
                </ListItemIcon>
                <ListItemText primary={"Syllabus"} />
                {syllaybus ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={syllaybus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("SyllabusForm");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Syllabus Form" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("SyllabusList");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Syllabus List" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          {/* Syllabus End*/}

          {/* School */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setSchools(!schools);
                }}
              >
                <ListItemIcon>
                  <FaSchool />
                </ListItemIcon>
                <ListItemText primary={"School"} />
                {schools ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={schools} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("StudentRegistration");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Student Registration" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("TeacherRegistration");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Teacher Registration" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          {/* School End */}

          {/* Class */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setClasss(!classs);
                }}
              >
                <ListItemIcon>
                  <SiGoogleclassroom />
                </ListItemIcon>
                <ListItemText primary={"Class"} />
                {classs ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={classs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("ClassForm");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Class Form" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("ClassList");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Class List" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          {/* Class End */}

          {/* Fees */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setFees(!fees);
                }}
              >
                <ListItemIcon>
                  <MdOutlinePayment />
                </ListItemIcon>
                <ListItemText primary={"Fees"} />
                {fees ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={fees} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("FeeStructure");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Fee Structure" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("FeeVoucher");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Fee Voucher" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          {/* Fees End */}

          {/* Admission */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setAdmission(!admission);
                }}
              >
                <ListItemIcon>
                  <FaAddressCard />
                </ListItemIcon>
                <ListItemText primary={"Admission"} />
                {admission ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={admission} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("AdmissionForm");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Admission Form" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          {/* Admission End */}

          {/* Exam */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setExam(!exam);
                }}
              >
                <ListItemIcon>
                  <PiExamFill />
                </ListItemIcon>
                <ListItemText primary={"Exam"} />
                {exam ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
          </List>
          <Collapse in={exam} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("ExamSchedule");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Exam Schedule" />
              </ListItemButton>
            </List>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("ExamResult");
                }}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary="Exam Result" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          {/* Exam End */}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
