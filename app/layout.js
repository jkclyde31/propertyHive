import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "@/components/AuthProvider";



export const metadata = {
  title: "Property Hive",
  keywords: "Rental Property, Real Estate",
  description: "Find The Perfect Rental Propery",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
    </AuthProvider>
  );
}
