import { useEffect, useRef } from 'react';

function Node({ currentRowRef, colPosition }) {
    const currentNodeRef = useRef(null);
    useEffect(() => {
        currentRowRef[colPosition] = currentNodeRef;
        // currentRowRef.push(currentNodeRef);
    }, []);
    return (
        <div className="node" ref={currentNodeRef}>
            <span></span>
        </div>
    );
}

export default Node;