import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.css';
import Detail from "./routes/Detail";
import Home from "./routes/Home";

import SegueReactRouter from "@dancotton/segue-react-router";

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path="/" element={<SegueReactRouter />}>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Detail />} />
    </Route>
  </>)
);


export function App() {
  return (<RouterProvider router={router} />);
}

export default App;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'segue-element': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}