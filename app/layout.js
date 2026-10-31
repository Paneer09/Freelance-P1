// "use client";

// import { useState } from "react";
// import Header from "@/components/Header";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import PageTransition from "@/components/PageTransition";
// import Scrollanimation from "@/components/Scrollanimation"
// import WhatsAppButton from "@/components/WhatsAppButton";
// import Robot from "@/components/Robot";

// import "./globals.css"

// export default function RootLayout({ children }) {

//   const [activeMenu, setActiveMenu] = useState(null);

//   return (

//     <html lang="en" suppressHydrationWarning>
//       <body>

//               <Header
//           activeMenu={activeMenu}
//           setActiveMenu={setActiveMenu}
//         />


//         <Navbar
//           activeMenu={activeMenu}
//           setActiveMenu={setActiveMenu}
//         />

//         <div className="h-[64px]" />


//         <PageTransition>

//           <Scrollanimation>

//             {children}

//           </Scrollanimation>

//         </PageTransition>

//         <Footer></Footer>

//         <WhatsAppButton></WhatsAppButton>

//         <Robot></Robot>



//       </body>
//     </html>

//   );
// }


"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Scrollanimation from "@/components/Scrollanimation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Robot from "@/components/Robot";

import "./globals.css";

export default function RootLayout({ children }) {

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {/* Header + Navbar Spacer */}
        <div className="h-[136px] md:h-[144px]" />

        {/* Page Content */}
        <PageTransition>
          <Scrollanimation>
            {children}
          </Scrollanimation>
        </PageTransition>

        {/* Footer */}
        <Footer />

        {/* Floating Components */}
        <WhatsAppButton />
        <Robot />

      </body>
    </html>
  );
}
