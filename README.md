# Segue

![Segue](https://user-images.githubusercontent.com/21035486/216847115-d709992f-33a9-4e8e-a5e2-e15e551c29e9.gif)


## Quickstart

### With React-Router

Currently we only have bindings for the (as of writing) latest versions of React Router (v6.7.0 and above!)

Install dependencies via your package manager of choice.
```bash
npm install --save @dancotton/segue-react-router @dancotton/segue
```

Ensure you're using the 'data routers' as described in the [react-router docs](https://reactrouter.com/en/main/routers/create-browser-router#createbrowserrouter)

Add SegueReactRouter to your JSX tree anywhere under the RouterProvider. For example:
```javascript
import SegueReactRouter from '@dancotton/segue-react-router';

<Route path="/" element={<SegueReactRouter />}>
  <Route path="/" element={<Home />} />
  <Route path="/item/:id" element={<Detail />} />
</Route>
```

Finally - label any shared elements using the 'data-flip-id' attribute - e.g. 
```javascript
<div data-flip-id={`item-${item.id}`} />
```

This ID needs to be consistent across any pair of shared elements!

And you're done - wasn't that easy!

There's a full example in [our repo](https://github.com/daniel-cotton/segue/tree/live/packages/examples/react-segue-example)

### With your own bindings

Install dependencies via your package manager of choice.
```bash
npm install --save @dancotton/segue
```

Add SegueReactRouter to your JSX tree anywhere under the RouterProvider. For example:
```javascript
import Segue from '@dancotton/segue';

// Before you navigate / onClick of a link
Segue.preNavigate();

// After you navigate and the new page has rendered
Segue.postNavigate();
```

Finally - label any shared elements using the 'data-flip-id' attribute - e.g. 
```javascript
<div data-flip-id={`item-${item.id}`} />
```

This ID needs to be consistent across any pair of shared elements!

### Additional bindings
Additional bindings coming soon!
