import React from 'react';

const MeetingList = ({ meetings }) => {
    return (
        <div className="meeting-list">
            <h3>Meetings:</h3>
            <ul>
                {meetings.map((meeting, index) => (
                    <li key={index}>{meeting}</li>
                ))}
            </ul>
        </div>
    );
};

export default MeetingList;
