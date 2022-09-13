import React, {useContext, useState} from 'react';
import {AppContext} from './Context';

const DisplayData = () => {
  const { data, updateData } = useContext(AppContext);
  const [textarea, setTextarea] = useState(data || '');
  // TODO add functionality for loading data into textarea

  return (
    <div className="Objective-three">
      <label htmlFor="data">Data:</label>
      <br />
      <textarea id="data" rows="12" cols="60" value={textarea} onChange={(e) => setTextarea(e.target.value)} />
      <br />
      <button onClick={() => updateData(textarea)}>Load Data</button>
    </div>
  );
};

export default DisplayData;