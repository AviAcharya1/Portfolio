import React, { useState, useEffect } from 'react';
import './timeline.css';

const Timeline = ({ education }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        if (hoveredItem !== null) {
            const timer = setTimeout(() => {
                setHoveredItem(null);
            }, 15000);
            return () => clearTimeout(timer);
        }
    }, [hoveredItem]);

    return (
        <div className="timeline">
            {education.map((item, index) => (
                <div
                    key={index}
                    className="timeline-item"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <div className="timeline-item-content">
                        <span className="timeline-year">{item.year}</span>
                        {hoveredItem === index && (
                            <div className="timeline-details">
                                <h4>{item.degree}</h4>
                                <p>{item.institution}</p>
                                <p>{item.university}</p>
                                <p>{item.details}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
