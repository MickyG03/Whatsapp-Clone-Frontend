import React from 'react';
import{EmojiIcon} from "../../../svg"
const EmojiPicker = () => {
    return (
        <li>
            <button className='btn' type="button">
                <EmojiIcon className="dark:fill-dark_svg_1"/>
            </button>
        </li>
    );
}

export default EmojiPicker;
