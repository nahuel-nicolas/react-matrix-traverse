import { useEffect } from 'react';
import Node from './node/Node';

function Row({ rowPosition, width, matrixRef }) {
    const nodesRow = [];
    const currentRowRef = new Array(width);
    for (
            let colPosition = 0; 
            colPosition < width;
            colPosition++
        ) 
    {
        nodesRow.push(
            <Node 
                key={[rowPosition, colPosition]}
                currentRowRef={currentRowRef}
                colPosition={colPosition}
            />
        );
    }

    useEffect(() => {
        matrixRef[rowPosition] = currentRowRef;
        // matrixRef.push(currentRowRef);
    }, []);

    return <div className="row">{nodesRow}</div>;
}



export default Row;