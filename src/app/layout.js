import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Imdb Clone",
  description: "Movie database Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
