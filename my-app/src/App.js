// All imports at the top
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/global.css';

// Import Views
import LandingPageV1 from './views/LandingPageV1';
import LandingPageV2 from './views/LandingPageV2';
import ChatInterface from './views/ChatInterface';
import ReminderSetup from './views/ReminderSetup';
import EventScheduler from './views/EventScheduler';
import FeedbackForm from './views/FeedbackForm';
import Dashboard from './views/Dashboard';
import Settings from './views/Settings';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/landing-v2" element={<LandingPageV2 />} />
                <Route path="/chat" element={<ChatInterface />} />
                <Route path="/reminder" element={<ReminderSetup />} />
                <Route path="/event" element={<EventScheduler />} />
                <Route path="/feedback" element={<FeedbackForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/" element={<LandingPageV1 />} />
            </Routes>
        </Router>
    );
}

export default App;
