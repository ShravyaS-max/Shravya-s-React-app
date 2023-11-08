import React from "react";
import { Route, Switch } from "react-router-dom";
import CourseList from "./src/components/CourseList";
import CourseDetails from "./src/components/CourseDetails";
import StudentDashboard from "./src/components/StudentDashboard";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={CourseList} />
        <Route path="/course/:id" component={CourseDetails} />
        <Route path="/dashboard" component={StudentDashboard} />
      </Switch>
    </div>
  );
}

export default App;
