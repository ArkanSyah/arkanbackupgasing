import Link from "next/link";
// import file "globals.css"
import "./globals.css"
import Image from "next/image";
// import fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css"

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body>
        {/* area header */}
        <header>
          {/* area image/banner */}
          {/* <img src="../images/logo.png" alt="Logo UTI" /> */}
          <Image src={"/images/logo.png"} alt="Logo UTI" width={320} height={60} priority></Image>

          {/* area menu */}
          <nav className="text-center mt-5 flex justify-center">
            <Link href={"/"} className="bg-red-500 hover:bg-red-700 text-white rounded-full px-5 py-2.5 mr-3 w-52">Data Mahasiswa</Link>
            <Link href={"/"} className="bg-red-500 hover:bg-red-700 text-white rounded-full px-5 py-2.5 ml-3 w-52">Log Data Mahasiswa</Link>
          </nav>
        </header>

        {/* area content */}
        <section className="m-5">
        {children}
        </section>

        {/* area footer */}
        <footer className="flex justify-center bg-color1 text-color3-1 py-15X">
          Copyright &copy; 2024 - Projekweb 
        </footer>
      </body>
    </html>
  );
}