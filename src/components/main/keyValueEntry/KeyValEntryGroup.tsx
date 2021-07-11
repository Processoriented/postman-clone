import React, { useState } from 'react';


export default function KeyValEntryGroup() {
  const [entries, setEntries] = useState<Array<[string, any]>>([]);

  return (
    <>
      <div data-query-params></div>
      <button data-add-query-param-btn className="mt-2 btn btn-outline-success" type="button">Add</button>
    </>
  );
}

