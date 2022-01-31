import React, {useState} from 'react';

import {ScanScreenContext} from '../contexts/scanScreenContext';

const ScanScreenContextProvider = ({children}) => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);

  return (
    <ScanScreenContext.Provider
      value={{
        image,
        setImage,
        text,
        setText,
      }}>
      {children}
    </ScanScreenContext.Provider>
  );
};

export default ScanScreenContextProvider;
