import React from 'react';
import ResponseViewer from './ResponseViewer';
import SelectType from './SelectType';


export default function RequestEditor() {
  return (
    <main className="p-4">
      <form>
        <div className="input-group mb-4">
          <SelectType />
          <input required className="form-control" type="url" placeholder="https://example.com" data-url />
          <button type="submit" className="btn btn-primary">Send</button>
        </div>

        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="query-params-tab"
              data-bs-toggle="tab"
              data-bs-target="#query-params"
              type="button"
              role="tab"
              aria-controls="query-params"
              aria-selected="true"
            >Query Params</button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="request-headers-tab"
              data-bs-toggle="tab"
              data-bs-target="#request-headers"
              type="button"
              role="tab"
              aria-controls="request-headers"
              aria-selected="false"
            >Headers</button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="json-tab"
              data-bs-toggle="tab"
              data-bs-target="#json"
              type="button"
              role="tab"
              aria-controls="json"
              aria-selected="false"
            >JSON</button>
          </li>
        </ul>

        <div className="tab-content p-3 border-top-0 border">
          <div
            className="tab-pane fade show active"
            id="query-params"
            role="tabpanel"
            aria-labelledby="query-params-tab"
          >
            <div data-query-params></div>
            <button data-add-query-param-btn className="mt-2 btn btn-outline-success" type="button">Add</button>
          </div>
          <div
            className="tab-pane fade"
            id="request-headers"
            role="tabpanel"
            aria-labelledby="request-headers-tab"
          >
            <div data-request-headers></div>
            <button data-add-request-header-btn className="mt-2 btn btn-outline-success" type="button">Add</button>
          </div>
          <div
            className="tab-pane fade"
            id="json"
            role="tabpanel"
            aria-labelledby="json-tab"
          >
            <div data-json-request-body className="overflow-auto json-request-body"></div>
          </div>
        </div>
      </form>
      <ResponseViewer />
    </main>
  );
}