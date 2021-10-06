import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Components/Home";
import { ProjectCard } from "./Components/ProjectCard";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";
import { Navbar } from "./Components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/project" component={ProjectCard} />
        <Route path="/skills" component={Skills} />
        <Route path="/skills" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
