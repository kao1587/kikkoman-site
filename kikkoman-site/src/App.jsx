import { BrowserRouter, Routes, Route } from
    'react-router-dom';
import Header from './components/Header';
import Jitanrecipe from './pages/Jitanrecipe';
import JitanrecipeSubmit from './pages/JitanrecipeSubmit';
import Home from './pages/Home';
import FooterLink from './components/FooterLink';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/jitanrecipe" element={<Jitanrecipe />} />

                    <Route path="/jitanrecipeSubmit" element={<JitanrecipeSubmit />} />
                </Routes>
            </main>
            <FooterLink />
            <Footer />
        </BrowserRouter>
    );
}

export default App;