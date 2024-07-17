import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cherry Society",
  description:
    "We are a 4 piece all girl punk band. Individually, we are every color that has ever been made. Together, a cluster of wonder. We represent every little girl out there who wanted what boys had but was molded into what a female artist should look like. Should be. Should have. We think you can still enjoy cute things and sing about agony. We think you could still cry over romance films and protest against double standards. We represent the ones who felt out of place, out of pace, and stuck in outer space. There are no bars to reach or boxes to fit into. This is Cherry Society. We are your best friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
