# React Props Basics Lab

## Learning Goals

- Practice writing dynamic components
- Practice jumping into existing code and making the necessary changes

## Introduction

In this lab, you'll write React components and render them dynamically based on
information they receive from their parent components. This will enable us to use
components as templates with the ability to render variable content.

We'll continue building the portfolio site we started in the previous labs, and
make the content dynamic by using props.

## Introduction

In this lab, you'll write React components and render them dynamically based on
information they receive from their parent components. This will enable us to use
components as templates with the ability to render variable content.

Here is an image of what we want once we are finished, complete with a view of
the rendered DOM tree on the right:

![demo](images/demo.png)

...and here is a tree view of our component parent-child structure:

```text
└── App
    ├── NavBar
    ├── Home
    └── About
        └── Links
```

Go ahead and `npm start` to see what we already have rendering in the browser.

## Deliverables

### About

Update the `About` component so that:

- If a prop of `bio` is passed to this component, it is displayed inside of a
  `<p>` tag
- If a prop of `bio` is not passed down, or if `bio` is an empty string,
  **don't** display the `<p>` tag

### Links

Create a new component called `Links`. In this component, display the following:

- a `<h3>` element with the text of "Links"
- a `<a>` element with its `href` and text set to the user's Github link, passed
  down as a prop
- a second `<a>` element with its `href` and text set to the user's LinkedIn
  link, passed down as a prop

### App

In the `App` component, pass down data from the `user` object as props to the
`Home` component so that it renders correctly. There is some starter code for
you in the `Home` component that should give you a clue as to what props this
component takes in.

`App` should also pass down a prop of `bio` to the `About` component.

Finally, `App` should **also** pass down the `github` and `linkedin` links to
the `About` component, so that `About` can pass those props down to the `Links`
component!

## Resources

- [React Documentation: Components](https://reactjs.org/docs/react-component.html)
