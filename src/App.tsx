import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/assets/styles/destyle.css";

import Landing from "@/pages/Landing";
import WordList from "@/pages/WordList";
import WordDetail from "@/pages/WordDetail";
import ScrollToTop from "@/utils/ScrollTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PATHS } from "@/utils/constants/Paths";
import LogIn from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";
import WordTest from "@/pages/WordTest";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <Router>
        <ScrollToTop />
        <Header />
        <div className="grow">
          <Routes>
            <Route path={PATHS.LANDING} element={<Landing />}></Route>
            <Route path={PATHS.LOGIN} element={<LogIn />} />
            <Route path={PATHS.SIGNUP} element={<SignUp />} />
            <Route path={PATHS.WORDDETAIL} element={<WordDetail />} />
            <Route path={PATHS.WORDLIST} element={<WordList />} />
            <Route path={PATHS.WORDTEST} element={<WordTest />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
