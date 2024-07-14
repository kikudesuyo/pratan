import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/assets/styles/destyle.css";

import Words from "@/pages/Words";
import Header from "@/components/Header";
import { PATHS } from "@/utils/constants/Paths";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path={PATHS.WORDS} element={<Words />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
