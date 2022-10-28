import * as React from "react";
import "./index.css";
import { MdReplay10, MdForward10 } from "react-icons/md";
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

interface IFooter {}

const Footer: React.FunctionComponent<IFooter> = ({}) => {
  return (
    <div className="footer">
      <div className="footer__left"></div>

      <div className="footer__center">
        <div className="footer__button">
          {" "}
          <MdReplay10 />{" "}
        </div>
        <div className="footer__button">
          <BsFillSkipStartFill />
        </div>
        <div className="footer__button">
          <AiFillPlayCircle />
        </div>
        <div className="footer__button">
          <BsFillSkipEndFill />
        </div>
        <div className="footer__button">
          <MdForward10 />
        </div>
      </div>

      <div className="footer__right"></div>
    </div>
  );
};
export default Footer;
