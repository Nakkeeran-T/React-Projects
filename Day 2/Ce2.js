import React from 'react';

const Second = () => {
    return (
        <div>
            <h1 style={{color:'Green'}}>Inline Style in JSX</h1>
            <p style={{ padding:'10px', background:'lightblue',color:'dark blue',border:'1px solid blue', borderRadius:'5px'}}>This is a paragraph with inline styles applied.</p>
        </div>
    );
};

export default Second;