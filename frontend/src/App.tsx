import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/assets/styles/destyle.css";

import WordCards from "@/pages/WordCards";
import WordDetail from "@/pages/WordDetail";
import ScrollToTop from "@/utils/ScrollTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PATHS } from "@/utils/constants/Paths";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path={PATHS.WORDS} element={<WordDetail word="eloquent" />} />
          <Route path={PATHS.WORDLIST} element={<WordCards />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
