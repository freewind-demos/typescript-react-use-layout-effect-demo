import React, {useEffect, useState} from 'react';

export default function UseEffectRender() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <div>
      UseEffectRender:{value}
      <button onClick={() => setValue(0)}>Change</button>
    </div>
  );
};

