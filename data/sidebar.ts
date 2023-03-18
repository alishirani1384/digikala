import { IconType } from "react-icons/lib";
import { MdOutlineFastfood, MdOutlineDiscount } from "react-icons/md";
import { RiFireLine, RiQuestionLine, RiStore3Line } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";

export const links: { text: string; Icon: IconType }[] = [
  {
    text: "سوپرمارکت",
    Icon: MdOutlineFastfood,
  },
  {
    text: "پروفروش ترین ها",
    Icon: RiFireLine,
  },
  {
    text: "تخفیف ها و پیشنهادها",
    Icon: MdOutlineDiscount,
  },
  {
    text: "شگفت انگیزها",
    Icon: TbDiscount2,
  },
  {
    text: "سوالی دارید؟",
    Icon: RiQuestionLine,
  },
  {
    text: "در دیجی کالا بفروشید",
    Icon: RiStore3Line,
  },
];
