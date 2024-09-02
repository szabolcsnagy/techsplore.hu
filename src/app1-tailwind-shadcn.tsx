import React from 'react';
import * as ReactDOM from 'react-dom/client';

const rootNode = document.getElementById('main-content') as HTMLElement;
const root = ReactDOM.createRoot(rootNode);

root.render(
  <React.StrictMode>
    <div>
      <h1>Hello from JSX</h1>
    </div>
  </React.StrictMode>
);
