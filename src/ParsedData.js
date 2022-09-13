import React, {useContext} from 'react';
import {AppContext} from './Context';


const ParsedData = () => {
  const { data } = useContext(AppContext);
  console.log(data);
  return (
    <div>
      {Object.entries(JSON.parse(data)).map(([key, value]) => (
        <React.Fragment key={key}>
          <p className="data-title">{key}:</p>
          {Object.entries(value)?.map(([k, v]) => (
            <React.Fragment key={k}>
              <div className="data-row">
                <p className="data-key">{k}:</p>
                {typeof v === 'string'
                  ?
                  <span className="data-value">{v}</span>
                  :
                  <div>
                    {v.map(item => (
                      <span key={item} className="data-value">{item}, </span>
                    ))}
                  </div>}
              </div>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ParsedData;