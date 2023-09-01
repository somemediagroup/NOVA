import React from 'react';

const FeedbackForm = () => {
    return (
        <div>
            <h1>Feedback Form</h1>
            {/* Text Area */}
            <textarea id="textArea" placeholder="Text Area (Input)"></textarea>

            {/* Submit Feedback Button */}
            <button id="submitFeedback">Submit Feedback (Function)</button>
        </div>
    );
};

export default FeedbackForm;
