import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Dashboard } from "./Dashboard";
import { Teachers } from "./Teachers";
import { Students } from "./Students";
import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { TeacherDetails } from "./TeacherDetails";
import { StudentDetails } from "./StudentDetails";
import { EditTeacher } from "./EditTeacher";
import { EditStudent } from "./EditStudent";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [teachers, setTeacher] = useState([
    {
      id: "001",
      name: "Maheswaran",
      gender: "Male",
      subject: "Html & Css",
      address: "chennai",
      email: "maheswaran@gmail.com",
      contact: 9876543210,
    },
    {
      id: "002",
      name: "Yazhan",
      gender: "Male",
      subject: "JavaScript",
      address: "palani",
      email: "yazhan@gmail.com",
      contact: 9874561230,
    },
    {
      id: "003",
      name: "Mahizhan",
      gender: "Male",
      subject: "React JS",
      address: "Chennai",
      email: "mahizhan@gmail.com",
      contact: 7896541230,
    },
    {
      id: "004",
      name: "Mahizhini",
      gender: "Male",
      subject: "Node JS",
      address: "Coimbatore",
      email: "mahizhini@gmail.com",
      contact: 8967452310,
    },
    {
      id: "005",
      name: "Vijay",
      gender: "Male",
      subject: "Mongo DB",
      address: "Karaikudi",
      email: "vijay@gmail.com",
      contact: 6310789456,
    }
  ]);
  const [students, setStudent] = useState([
    {
      id: "01",
      name: "Mahes",
      standard: "FSD Mern",
      batch: "B41 Tamil",
      address: "Tiruvannamalai",
      email: "mahes@gmail.com",
      contact: 9876543210,
    },
    {
      id: "02",
      name: "Boobathi",
      standard: "Data Science",
      batch: "b41 english ",
      address: "chennai",
      email: "boobathi@gmail.com",
      contact: 9871212110,
    },
    {
      id: "03",
      name: "Selvi",
      standard: "Python devolopment",
      batch: "B42 tamil",
      address: "Coimbatore",
      email: "selvi@gmail.com",
      contact: 9121243210,
    },
    {
      id: "04",
      name: "Kumaresan",
      standard: "DataScience",
      batch: "B43 tamil",
      address: "Coimbatore",
      email: "Kuamresam@gmail.com",
      contact: 9121243287,
    },
    {
      id: "05",
      name: "Surya",
      standard: "FSD Mern ",
      batch: "B40 tamil",
      address: "karaikudi",
      email: "Surya@gmail.com",
      contact: 9121243210,
    },
    {
      id: "06",
      name: "Raja",
      standard: "UI & UX",
      batch: "B41 Weekly",
      address: "Chennai",
      email: "raja@gmail.com",
      contact: 7373321250,
    },
    {
      id: "07",
      name: "Guru",
      standard: "UI & UX",
      batch: "B41 tamil",
      address: "Chennai",
      email: "guru@gmail.com",
      contact: 7171321250,
    }
  ]);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar id="Appbar" position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/teachers")}>
              Teacher
            </Button>
            <Button color="inherit" onClick={() => navigate("/students")}>
              Student
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/students" element={<Students students={students} setStudent={setStudent} />} />
        <Route path="/teacher/details/:id" element={<TeacherDetails teachers={teachers} />} />
        <Route path="/student/details/:id" element={<StudentDetails students={students} />} />
        <Route path="/add/teacher" element={<AddTeacher teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/add/student" element={<AddStudent students={students} setStudent={setStudent} />} />
        <Route path="/teacher/edit/:id" element={<EditTeacher teachers={teachers} setTeacher={setTeacher} />} />
        <Route path="/student/edit/:id" element={<EditStudent students={students} setStudent={setStudent} />} />
      </Routes>
    </div>
  );
}

export default App;