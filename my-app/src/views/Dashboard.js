import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* User Profile */}
            <div id="userProfile">User Profile (Static Content)</div>

            {/* Quick Actions */}
            <div id="quickActions">Quick Actions (Function)</div>

            {/* Recent Activity */}
            <div id="recentActivity">Recent Activity (Output)</div>

            {/* Tabs */}
            <div id="tabs">Tabs (Navigation)</div>
        </div>
    );
};

export default Dashboard;
