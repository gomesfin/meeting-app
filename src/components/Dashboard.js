import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MeetingList from './MeetingList';

const Dashboard = () => {
    const [meeting, setMeeting] = useState('');
    const [meetings, setMeetings] = useState([]);
    const history = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        history('/');
    };

    const handleAddMeeting = (e) => {
        e.preventDefault();
        setMeetings([...meetings, meeting]);
        setMeeting('');
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <form onSubmit={handleAddMeeting}>
                <label>
                    Meeting Name:
                    <input
                        type="text"
                        value={meeting}
                        onChange={(e) => setMeeting(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Meeting</button>
            </form>
            <MeetingList meetings={meetings} />
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
