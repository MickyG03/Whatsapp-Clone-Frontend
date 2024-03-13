import { AttachmentIcon } from "../../../svg";

const Attachments = () => {
    return (
        <li className="relative">
            <button className="btn">
                <AttachmentIcon className="dark:fill-dark_svg_1"/>
            </button>
        </li>
    );
}

export default Attachments;
