import React, { useEffect, useState } from 'react';
import KeyValControl, { keyValCtlProps } from './KeyValControl';

export interface keyValCtlEl {
  [key: string]: JSX.Element,
}

export default function KeyValEntryGroup() {
  const [entries, setEntries] = useState<keyValCtlEl>({} as keyValCtlEl);

  const addEntry = (key: string, el: JSX.Element) => setEntries(prev => ({ ...prev, [key]: el }));
  const removeEntry = (key: string) => {
    const next = Object.entries(entries).reduce((rtn, cur) => {
      const [k, v] = cur;
      if (k === key) return rtn;
      return { ...rtn, [k]: v };
    }, {} as keyValCtlEl);
    setEntries(next);
  };

  const makeEntryEl = () => {
    const key = `${Object.keys(entries).length}`;
    const removeFn = () => removeEntry(key);
    const elProps: keyValCtlProps = {
      key,
      dataKey: '',
      dataVal: '',
      removeFn,
    };
    addEntry(key, (<KeyValControl {...elProps} />));
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = _ => makeEntryEl();

  useEffect(() => {
    if (Object.keys(entries).length !== 0) return;
    const key = '0';
    const removeFn = () => removeEntry(key);
    const props: keyValCtlProps = { key, dataKey: '', dataVal: '', removeFn };
    addEntry(key, (<KeyValControl {...props} />));
  }, [entries])

  return (
    <>
      <div data-query-params>
        { Object.values(entries) }
      </div>
      <button
        data-add-query-param-btn
        className="mt-2 btn btn-outline-success"
        type="button"
        onClick={handleClick}
      >Add</button>
    </>
  );
}

