import "./App.css";
import Header from "./components/common/header/Header";
import LoginPage from "./components/common/header/LoginPage";
import RegisterPage from "./components/common/header/RegisterPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import CourseTagsPage from "./components/allcourses/CourseTagsPage";
import Team from "./components/team/Team";
import JobPage from "./components/jobs/JobPage";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import { Login } from "@mui/icons-material";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={CourseHome} />
          <Route path="/courses/:domain" component={CourseTagsPage} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/jobs" component={JobPage} />
          <Route exact path="/technologies" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
