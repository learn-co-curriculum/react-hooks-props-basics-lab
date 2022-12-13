# about this branch

Starting from where we left off with the Props Basics Lab, I demonstrate React State and Events.
In this case, the ```<App />``` component holds the state ```color``` and passes it down to all three child components as a prop.
App.js also passes the ```setColor``` function as a prop to the ```<Home />``` component, because that's where the event is going to happen.
The ```setColor``` function is triggered by the event listener on a newly added button, which updates the state of ```color``` in ```<App />```.
When the state changes, ```<App />``` re-renders, causing the child components to re-render as well.
Since the child components are using the state ```color``` to style their text, all the text on the page changes color.