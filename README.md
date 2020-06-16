# React Dynamic Components Lab

## Learning Goals

- Practice writing dynamic components
- Practice jumping into existing code and making the necessary changes

## Introduction

In this lab, you'll write React components and render them dynamically based on
information they receive from their parent components. This will enable us to use
components as templates with the ability to render variable content.

There are two discrete parts of this lab, and they should be tackled one after
the other. We will need to first create a `Comment` component from scratch and
then add a few things to the `ColorBox` component.

All of the css has been provided, as well as a good amount of starter code. The
general structure has already been provided - you are to pick up where the code
leaves off and make both the `Comment` and the `ColorBox` components behave
dynamically.

Here is an image of what we want once we are finished, complete with a view of
the rendered DOM tree on the right:

<img src="https://curriculum-content.s3.amazonaws.com/react/completed-example-dynamic-components-lab.png" alt="completed example" />

...and here is a tree view of our component parent-child structure:

```text
└── App
    ├── BlogPost
    │   ├── Comment
    │   ├── Comment
    │   └── Comment
    │
    └── ColorBox
        └── ColorBox
            └── ColorBox
                └── ColorBox (etc.)
```

Go ahead and `npm start` to see what we already have rendering in the browser.

## Deliverables

(The application will error on `npm start` until the `Comment` component is
created and exported)

#### `Comment` Component

- Create a `Comment` component in the file, `Comment.js` within `src/` and don't forget to:
  - `import React, { Component } from 'react'` at the top of our file
  - Use the `class X extends Component {}` syntax
  - export the class so it can be used in other files
  - import the class in `BlogPost`
- It should expect a single prop (the text of a comment), which can be used in the
  component via: `this.props.commentText`. This prop is passed in
  `src/BlogPost.js`
- It should have a single `<div>` in its `render()` method
- The `<div>` should have a `className="comment"` attribute
- **Note:** The `BlogPost` component needs _minor_ alteration to properly pass
  the contents of its `commentsArray` to each of the `Comment` components that
  it is rendering
- Don't forget - we can unpack variable values directly with JSX by wrapping them
  in `{}`, i.e. `{this.props.commentText}`

#### Take a Break

- Look at something other than your computer screen for at least five minutes

#### `ColorBox` Component

- Should expect a single prop (an opacity value), which can be used in the
  component via: `this.props.opacity`. This prop is first passed in `src/App.js`
- If the opacity value _is greater than or equal to 0.2_:
  - the `ColorBox` component should render another `ColorBox` inside itself 
    (recursive components!)
  - an opacity prop should be passed to the child
  - the passed opacity prop should be reduced by 0.1
- If the opacity value _is less than 0.2_:
  - do not render another `ColorBox` (or else we would have infinite
    `ColorBoxes` rendering!)
  - instead, the render method should return `null`

###### Hint on ColorBox

- **Watch out** for endless recursion! If your `ColorBox` component has no break
  condition to stop it from always rendering another `ColorBox`, your browser will
  likely become non-responsive. **Pre-plan** how you are going to render the
  `ColorBox` before trying to code it.
- You may find that subtracting 0.1 from your opacity prop is leading to some
  strange precision errors (try logging the opacity prop with each render). This
  is due to limitations with JavaScript float (number) types.
- In order to render based on a conditional, you can write JavaScript logic
  directly in the `render()` block. In the example below, the `render()` method is returning
  the evaluation of a ternary operator. If the expression `this.props.value > 100` evaluates to be true, the entire ternary expression (and thus, the return value of `render()`) evaluates to be null, otherwise, `render()` will return some JSX.

```js
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
    const newValue = this.props.value * 2;
    return this.props.value > 100 ? null : ( <div>
        <Example value={newValue} />
      </div>)
  }
}
```

## Resources

- [React Documentation: Components](https://reactjs.org/docs/react-component.html)
