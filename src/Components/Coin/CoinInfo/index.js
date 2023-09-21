import React, { useState } from 'react'

function CoinInfo({ name, desc }) {
    let shortDesc = desc.slice(0, 300) + "<span style='color:var(--grey); cursor:pointer;'> Read More...</span>";
    let longDesc = desc + "<span style='color:var(--grey); cursor:pointer;'> Read Less...</span>";
    const [flag, setFlag] = useState(false);
    return (
        <div className='grey-wrapper'>
            <h3>{name}</h3>
            <p onClick={() => setFlag(!flag)} dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }} p />
        </div>
    )
}

export default CoinInfo