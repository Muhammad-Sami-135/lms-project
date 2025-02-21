import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Screens/Login Page/Login";
import SignUp from "./Screens/Sign Up/Signup";
import { ToastContainer } from "react-toastify";
import { Protected } from "./Screens/Protected";
import { Autoroute } from "./Screens/Autoroute";
import ClippedDrawer from "./Screens/Dashboard/Dashboard";
import StudentAdd from "./Components/Student/StudentAdd";
import StudentList from "./Components/Student/StudentList";
import { TeacherRegis } from "./Components/Teachers/TeacherRegis";
import { TeacherList } from "./Components/Teachers/TeacherList";
import { SubjectAdd } from "./Components/Subject/SubjectAdd";
import { SubjectList } from "./Components/Subject/SubjectList";
import { SyllabusForm } from "./Components/Syllabus/SyllabusForm";
import { SyllabusList } from "./Components/Syllabus/SyllabusList";
import { StudentRegistration } from "./Components/School/StudentRegistration";
import { TeacherRegistration } from "./Components/School/TeacherRegistration";
import { ClassForm } from "./Components/Class/ClassForm";
import { ClassList } from "./Components/Class/ClassList";
import { FeeStructure } from "./Components/Fees/FeeStructure";
import { FeeVoucher } from "./Components/Fees/FeeVoucher";
import { AdmissionForm } from "./Components/Admission/AdmissionForm";
import { ExamResult } from "./Components/Exam/ExamResult";
import { ExamSchedule } from "./Components/Exam/ExamSchedule";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Protected />}>
          <Route path="/Dashboard" element={<ClippedDrawer />}>
            <Route path="StdAdd" element={<StudentAdd />} />
            <Route path="StdList" element={<StudentList />} />
            <Route path="TeacherRegis" element={<TeacherRegis />} />
            <Route path="TeacherList" element={<TeacherList />} />
            <Route path="SubjectAdd" element={<SubjectAdd />} />
            <Route path="SubjectList" element={<SubjectList />} />
            <Route path="SyllabusForm" element={<SyllabusForm />} />
            <Route path="SyllabusList" element={<SyllabusList />} />
            <Route
              path="StudentRegistration"
              element={<StudentRegistration />}
            />
            <Route
              path="TeacherRegistration"
              element={<TeacherRegistration />}
            />
            <Route path="ClassForm" element={<ClassForm />} />
            <Route path="ClassList" element={<ClassList />} />
            <Route path="FeeStructure" element={<FeeStructure />} />
            <Route path="FeeVoucher" element={<FeeVoucher />} />
            <Route path="AdmissionForm" element={<AdmissionForm />} />
            <Route path="ExamSchedule" element={<ExamSchedule />} />
            <Route path="ExamResult" element={<ExamResult />} />
          </Route>
        </Route>
        <Route element={<Autoroute />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
