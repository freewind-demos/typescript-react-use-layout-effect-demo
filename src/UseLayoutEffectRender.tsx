import React, {useLayoutEffect, useState} from 'react';

export default function UseLayoutEffectRender() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div>
      UseLayoutEffectRender: {value}
      <button onClick={() => setValue(0)}>Change</button>
    </div>
  );
};

