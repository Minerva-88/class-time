import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import logo from "../../../public/aio.png"

const Footer = () => {
    return (

<>
<div className="flex w-full px-11 flex-col mt-12">
  <div className="divider">AIOLearn</div>
  
</div>

<footer className="footer footer-center  text-base-content rounded p-10">
    
  <nav className="grid grid-flow-col gap-2">
    <a href="https://aiolearn.com/" target="_blank" className="link link-hover">درباره ما</a>
    <div className="divider lg:divider-horizontal"></div>

    <a href="#" className="link link-hover">ارتباط با ما</a>
    <div className="divider lg:divider-horizontal"></div>

    <a href="/team" className="link link-hover">مدرسین</a>
    <div className="divider lg:divider-horizontal"></div>

    <a href="/profile" className="link link-hover">دانشجویان</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-6">
      <a href="https://www.instagram.com/aiolearn/" target="_blank">
        <RiInstagramFill  className="w-[32px] mx-2 h-[32px]"/>
      </a>
      <a href="https://t.me/aiolearn" target="_blank">
      <FaTelegram  className="w-[29px] mx-2 h-[29px]"/>
       
      </a>
      <a href="tel:+982165023089" target="_blank">
      <IoCall  className="w-[29px] h-[29px] mx-2"/>
        
      </a>
    </div>
  </nav>
  <img src={logo} alt="AIOLearn" className="w-36" />
  <aside>
    <p className="text-xs">در <span className="font-bold">آیولرن</span>، یادگیری فقط یک تجربه نیست، بلکه اولین قدم به سوی ساختن آینده‌ای متفاوت است.</p>
  </aside>
</footer>
</>
    );

};
export default Footer;
