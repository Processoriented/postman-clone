import React from 'react';


export default function ResponseViewer() {
  return (
    <div className="mt-5 d-none" data-response-section>
        <h3>Response</h3>
        <div className="d-flex my-2">
          <div className="me-3">
            <span>Status:</span>
            <span data-status></span>
          </div>
          <div className="me-3">
            <span>Time:</span>
            <span data-time></span>
            <span> ms</span>
          </div>
          <div className="me-3">
            <span>Size:</span>
            <span data-size></span>
          </div>
        </div>

        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="body-tab"
              data-bs-toggle="tab"
              data-bs-target="#body"
              type="button"
              role="tab"
              aria-controls="body"
              aria-selected="true"
            >Body</button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="response-headers-tab"
              data-bs-toggle="tab"
              data-bs-target="#response-headers"
              type="button"
              role="tab"
              aria-controls="response-headers"
              aria-selected="false"
            >Headers</button>
          </li>
        </ul>

        <div className="tab-content p-3 border-top-0 border">
          <div
            className="tab-pane fade show active"
            id="body"
            role="tabpanel"
            aria-labelledby="body-tab"
          >
            <div data-json-response-body className="overflow-auto json-response-body"></div>
          </div>
          <div
            className="tab-pane fade"
            id="response-headers"
            role="tabpanel"
            aria-labelledby="response-headers-tab"
          >
            <div data-response-headers className="response-headers"></div>
          </div>
        </div>
      </div>
  );
}
