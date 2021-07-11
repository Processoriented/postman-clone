import React, { useState } from 'react';


export default function SelectType({ ...props }): JSX.Element {
  const nc = (_ => null) as React.ChangeEventHandler<HTMLSelectElement>;
  const { onChange } = { onChange: nc, ...props };
  const [requestType, setRequestType] = useState('GET');

  const opts = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    .map(val => (<option value={val}>{val}</option>));

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    const val = e?.target?.value;
    setRequestType(val);
    onChange(e);
  };

  return (
    <select value={requestType} className="form-select flex-grow-0 w-auto" data-method onChange={handleChange}>
      {opts}
    </select>
  );
}
