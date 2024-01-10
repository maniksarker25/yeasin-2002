import DownloadBtn from "@/components/Unique/Buttons/DownloadBtn/DownloadBtn";
import Image from "next/image";

//  Assets
import lws from "@/assets/avatar/Academy/lws.svg";
import Revel from "@/components/Globals/Revel";
import { AveriaLibreFont, Maiden_OrangeFont } from "@/utils/GoogleFonts";
// import myPdf from "../../../assets/doc/reduxCertificate.pdf";

const Training = () => {


  return (
    <Revel
      className={`  my-4 p-1 flex sm:pl-3 sm:py-2 items-start lg:flex-row flex-col  justify-between lg:items-center  rounded-md   text-blue-100 
      bg-gradient-to-r from-shine-0 to-shine-100
      `}
    >
      <div className="items-center flex sm:gap-x-4 gap-x-1 ">
        <Image src={lws} alt={"Learn with sumit"} className="w-16 h-16 xl:w-16 2xl:w-24 2xl:h-24 xl:h-16" />
        <div>
          <a
            href="https://www.youtube.com/@LearnwithSumit"
            target="_blank"
            rel="noreferrer"
            className={`text-sm sm:text-xl text-gray-200 xl:text-2xl font-semibold sm:font-bold ${AveriaLibreFont.className} `}
          >
            Think In A Redux Way
          </a>
          <br />
          <a
            href="https://learnwithsumit.com/"
            target="_blank"
            rel="noreferrer"
            className={`text-xs sm:text-base text-gray-400 xl:text-lg font-medium  sm:font-semibold ${Maiden_OrangeFont.className} hover:underline transition-all`}
          >
            Learn with Sumit
          </a>
        </div>
      </div>
      <div className="lg:mr-3 self-end lg:self-auto">
        <DownloadBtn>Certificates</DownloadBtn>
      </div>
    </Revel>
  );
};
export default Training;
