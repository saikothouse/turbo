import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css'; // Import global styles

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
