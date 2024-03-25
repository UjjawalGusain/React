# Virtual Dom, Fibre, and Reconcilation

Here, we will understand React and it's working deeply. 
This is not a project, but only has theory inside this README.md file

### Virtual DOM
The ReactDOM.createRoot method creates a Virtual DOM, which is similar to Browser's inbuilt DOM
To make any changes, REACT first compares its Virtual DOM to brower's inbuilt DOM, and changes only the required things

### Reconcilation
This is an algorithm which differentiates between the Browser's DOM and Virtual DOM to determine which parts need to be changed.

### Update
A change in the data use to render a React app. A result of 'setState', resulting in re-render.

