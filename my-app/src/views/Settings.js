import React from 'react';

const Settings = () => {
    return (
        <div>
            <h1>Settings</h1>
            {/* Profile Edit */}
            <div id="profileEdit">Profile Edit (Input)</div>

            {/* Notification Preferences */}
            <div id="notificationPreferences">Notification Preferences (Input)</div>

            {/* Logout */}
            <button id="logout">Logout (Function)</button>
        </div>
    );
};

export default Settings;
