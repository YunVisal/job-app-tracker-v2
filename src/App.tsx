import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter";
import AppProvider from "./AppProvider";

const App = () => {
  return <BrowserRouter>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </BrowserRouter>
}

export default App;