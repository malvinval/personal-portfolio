import React from 'react';

const ResumePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Download My Resume</h1>
            <a href="/path/to/your/resume.pdf" className="mt-4 btn bg-blue-600 text-white">
                Download Resume
            </a>
        </div>
    );
};

export default ResumePage;
