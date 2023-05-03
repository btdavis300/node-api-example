# Node.js with Express and Mongo REST API

This is the readme for this node.js example. This repo contains basic construct for node set up for API CRUD actions with comments explaining the innerworkings. Set up instructions will live here...

## Bootstrap Implementation

For the sake of time/experimentation, `react-bootstrap` is implemented for this code example. While `bootstrap` can be implemented in react projects and used the same as any other project, through the use of classes, I decided on `react-bootstrap` since it doesn't rely on a specific bootstrap dependencies, which can cause conflicts down the road. taken from the [Documentation](https://react-bootstrap.github.io/getting-started/why-react-bootstrap/):

React-Bootstrap is a complete re-implementation of the Bootstrap components using React. It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap installed, you have everything you need.

Methods and events using jQuery is done imperatively by directly manipulating the DOM. In contrast, React uses updates to the state to update the virtual DOM. In this way, React-Bootstrap provides a more reliable solution by incorporating Bootstrap functionality into React's virtual DOM. Below are a few examples of how React-Bootstrap components differ from Bootstrap.

[react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction/) is the official docs for the npm package `react-bootstrap`

### Quick Installation

- run `npm install react-bootstrap bootstrap`
- import bootstrap CSS at the top of `index.js`: `import 'bootstrap/dist/css/bootstrap.min.css';`
- import bootstrap components by putting `import Button from 'react-bootstrap/Button';` at the top of your component file.

### Bootstrap in the wild

Basic usage for bootstrap classes are components with `react-bootstrap` and look something along the lines of this:

```
  <Button variant="primary">
    Button as link
  </Button>
```
