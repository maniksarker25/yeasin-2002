import Image, { StaticImageData } from "next/image";
import quotes from "../../assets/3d/quotes.svg";
import { IM_Fell_Great_PrimerFont, Modern_AntiquaFont, ShipporiAntiqueFont } from "@/utils/GoogleFonts";

interface feedbackInterface {
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
}

const FeedbackCard = ({ content, name, title, img }: feedbackInterface) => (
  <div className="flex justify-between flex-col w-full px-10 py-12 rounded-[20px]   md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <Image src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p
      className={`font-poppins font-normal text-[18px] leading-[32.4px] 2xl:text-2xl text-white my-10 ${ShipporiAntiqueFont.className}`}
    >
      {content}
    </p>

    <div className="flex flex-row">
      <Image src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4
          className={`font-poppins font-semibold text-[20px] leading-[32px] text-white 2xl:text-4xl ${Modern_AntiquaFont.className}`}
        >
          {name}
        </h4>
        <p
          className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite 2xl:text-2xl ${IM_Fell_Great_PrimerFont.className}`}
        >
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
