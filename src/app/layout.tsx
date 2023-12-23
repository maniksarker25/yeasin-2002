import { Metadata } from "next";


import Wrapper from "@/components/Globals/Wrapper";

// styles
import "../styles/keyframe.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Kawsar Islam Yeasin",
  description:
    "Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer and web designer,programmer  from Bangladesh.",
    openGraph:  {
      title: "Md Kawsar Islam Yeasin",
      description:
        "Portfolio of  Md Kawsar Islam Yeasin , a software Developer,Front end web developer, web developer and web designer,programmer,  from Bangladesh.",
      type: "website",
      locale: "en_IE",
      url: "https://yeasin2002.netlify.app/",
      siteName: "Md Kawsar Islam Yeasin",
       emails: "mdkawsarislam2002@gmail.com", 
       countryName: "Bangladesh",

      images: [
        {
          url: "https://yeasin2002.netlify.app/cover.jpeg" ,
          width: 800,
          height: 600,
          alt: "Image of  Md Kawsar Islam Yeasin",
        },
      ],
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
