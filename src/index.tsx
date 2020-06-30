import * as React from "react";

import "@tiendanube/styles/css/Text.css";

export interface InterfaceText {
    /** Text to be displayed dsfs v f sdf sdsd asd d */
    children: React.ReactText;
    /** Size */
    size?: "regular";
    /** Type of react mouse event onclick to manage event click and void return */
    onClickPrimary?(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void;
}
/**
 * @param {any} children Text to be displayed
 * @param {any} size Size
 */
function Text({ children, size = "regular" }: InterfaceText): JSX.Element {
    return <p className={`nimbus--text nimbus--text_${size}`}>{children}</p>;
}

export default React.memo(Text) as typeof Text;
