import React from 'react';
import TaskDescription from '../components/ReminderSetup/TaskDescription';
import DueDatePicker from '../components/ReminderSetup/DueDatePicker';
import SetReminderButton from '../components/ReminderSetup/SetReminderButton';
import InvalidInputMessage from '../components/ReminderSetup/InvalidInputMessage';
import SearchBar from '../components/ReminderSetup/SearchBar';

const ReminderSetup = () => {
    return (
        <div>
            <TaskDescription />
            <DueDatePicker />
            <SetReminderButton />
            <InvalidInputMessage />
            <SearchBar />
        </div>
    );
};

export default ReminderSetup;
