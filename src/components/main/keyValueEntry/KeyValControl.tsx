import React from 'react';


export interface keyValCtlProps {
  key: string;
  dataKey: string;
  dataVal: string;
  removeFn: ((idx: string) => void);
};

export default function KeyValControl(props: keyValCtlProps) {

  const handleRemove: React.MouseEventHandler<HTMLButtonElement> = (_) => props.removeFn(props.key);
  
  return (
    <div className="input-group my-2" data-key-value-pair id={props.key}>
      <input type="text" data-key className="form-control" placeholder="Key" value={props.dataKey} />
      <input type="text" data-value className="form-control" placeholder="Value" value={props.dataVal}/>
      <button
        type="button"
        data-remove-btn
        className="btn btn-outline-danger"
        onClick={handleRemove}
      >Remove</button>
    </div>
  )
}
