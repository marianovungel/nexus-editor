import TextEditor from "./TextEditor"
import Menu from "./components/Menu"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
// import { v4 as uuidV4 } from "uuid"

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/:id`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
