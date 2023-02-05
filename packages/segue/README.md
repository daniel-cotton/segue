# Segue

## Quickstart

### With Pre-made Bindings

We have pre-made bindings for react router (and more coming soon!) - check out [our repo](https://github.com/daniel-cotton/segue) for the full set and quickstart instructions

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
