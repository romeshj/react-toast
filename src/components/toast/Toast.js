import React from 'react';

import "./Toast.scss";

const Toast = ({ toastConfig, position }) => {
    return (
        <div className={`notification-container ${position}`}>
            <div className={`notification toast ${toastConfig.type}`}>
                <button>
                    X
                </button>
                <div className="notification-image">
                    {toastConfig.icon}
                </div>
                <div>
                    <p className="notification-title">{toastConfig.title}</p>
                    <p className="notification-message">{toastConfig.description}</p>
                </div>
            </div>
        </div>
    )
}
export default Toast;