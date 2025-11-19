    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import Header from './components/Header';
    import Jitanrecipe from './pages/Jitanrecipe';
    import JitanrecipeSubmit from './pages/JitanrecipeSubmit';
    import Home from './pages/Home';
    import Footer from './components/Footer';

    function App() {
        return (
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/jitanrecipe" element={<Jitanrecipe />} />

                        <Route path="/jitanrecipe-submit" element={<JitanrecipeSubmit />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        );
    }

    export default App;