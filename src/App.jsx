import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import Navbar from './components/NavBar';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/book/works/:workId" element={<BookDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
