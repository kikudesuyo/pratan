import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/assets/styles/destyle.css";

import Landing from "@/pages/Landing";
import WordList from "@/pages/WordList";
import WordDetail from "@/pages/WordDetail";
import ScrollToTop from "@/utils/ScrollTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PATHS } from "@/utils/constants/Paths";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path={PATHS.LANDING} element={<Landing />}></Route>
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.SIGNUP} element={<Signup />} />
          <Route
            path={PATHS.WORDDETAIL}
            element={<WordDetail word="eloquent" />}
          />
          <Route path={PATHS.WORDLIST} element={<WordList />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
