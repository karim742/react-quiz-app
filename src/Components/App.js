import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<PublicRouter />}>
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/login" element={<PublicRouter />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/quiz" element={<PrivateRoute />}>
            <Route path="/quiz" element={<Quiz />} />
          </Route>
          <Route path="/result" element={<PrivateRoute />}>
            <Route path="/result" element={<Result />} />
          </Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
