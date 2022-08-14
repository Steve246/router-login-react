import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, useNavigate, Route, useParams, Link } from "react-router-dom";

// bikin login sama main page

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainBar />} />
      </Routes>
      {/* // <LoginPage /> */}
    </>
  );
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleChangePass = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(` Name : ${name} Password : ${password}`);

    if (name == "admin" && password == "admin123") {
      alert("Login Berhasil");
      navigate("/home");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <label>
          User Name
          <br />
          <input type="text" value={name} onChange={handleChangeName} />
        </label>

        <br />

        <label>
          Password
          <br />
          <input type="password" value={password} onChange={handleChangePass} />
        </label>

        <br />

        <button type="submit" value="Submit">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

const MainBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Home Page </h1>

      <Routes>
        <Route index element={<HomeList />} />

        <Route path="/home">
          {/* <Route index element={<HomeList />} /> */}
          {/* <Route path=":id" element={<Book />} /> */}
          <Route path="1" element={<Book />} />
          <Route path="newBook" element={<BookNew />} />
          <Route path="*" element={<h1> Not Found </h1>} />
        </Route>
      </Routes>

      <br />

      <button onClick={() => navigate("/")}>Back to Login</button>
    </div>
  );
};

const HomeList = () => {
  return (
    <>
      <h1> Book List </h1>
      <Link to="/home/1"> Book 1</Link>
      <br />

      <Link to="/home/2"> Book 2</Link>
      <br />

      <Link to="/home/newBook"> New Book </Link>
    </>
  );
};

const Book = () => {
  // const { id } = useParams();
  // return <h1> Book {id}</h1>;
  return <h1> Book 1</h1>;
};

const BookNew = () => {
  return <h1> Book New </h1>;
};

export default App;
