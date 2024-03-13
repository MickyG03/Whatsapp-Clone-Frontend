import { useState } from "react";
import { AttachmentIcon } from "../../../../svg";
import Menu from "./menu/Menu";

const Attachments = ({showAttachments,setShowAttachments,setShowPicker}) => {

    return (
        <li className="relative">
      <button
        onClick={() => {
          setShowPicker(false);
          setShowAttachments((prev) => !prev);
        }}
        type="button"
        className="btn"
      >
        <AttachmentIcon className="dark:fill-dark_svg_1" />
      </button>
      {/*Menu*/}
    {/* <Menu/> */}
      {showAttachments ? <Menu /> : null}
    </li>
    );
}

export default Attachments;
