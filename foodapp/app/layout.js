import "./globals.css";
import MainHeader from '@/components/main-header/main-header';
//import MainHeaderBackground from '@/components/main-header-background';
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body /*className={inter.className*/>
          {/* <MainHeaderBackground // or we can declare in main-header component as the sibling component /> */}
          <MainHeader/>
      {children}
      </body>
    </html>
  );
}
