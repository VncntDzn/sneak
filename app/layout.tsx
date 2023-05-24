import { Poppins } from "next/font/google";
import "normalize.css";
import styles from "./layout.module.scss";
import { Footer, Nav } from "./modules";

const inter = Poppins({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sneak",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className={styles.root}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
