import React, { useState } from 'react';

import "./Toast.scss";

const Toast = ({ toastConfig, position }) => {

    const [visible, setVisible] = useState(toastConfig.show);

    const closeToaster = () => {
        setVisible(false);
    }

    return (
        <>
            {visible &&

                <div className={`notification-container ${position}`}>
                    <div className={`notification toast ${toastConfig.type}`}>
                        <button onClick={() => { closeToaster() }}>X</button>
                        <div className="notification-image">
                            {toastConfig.icon}
                        </div>
                        <div>
                            <p className="notification-title">{toastConfig.title}</p>
                            <p className="notification-message">{toastConfig.description}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Toast;