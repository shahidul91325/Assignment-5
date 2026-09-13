BASIC QUESTIONS

1.Q/ Name of the Project

1.A/ Dev Stack

2.Q/ A Little Description

2.A/ Dev Stack is a modern and responsive web application that showcases different web development technologies and programming skills. Users can explore technologies, view their categories, descriptions, ratings, difficulty levels, and other useful information through an interactive card-based interface.

3.Q/ Technologies Used

3.A/        * React.js
            * TypeScript
            * Tailwind CSS
            * React Icons
            * Vite
            * JSON for local data management

4.Q/ Three Features

4.A/
      1. Technology Skill Cards - Displays different technologies with their logos, descriptions, categories, ratings, and difficulty levels.

      2. Responsive Design - The website is fully responsive and provides a clean user experience across desktop, tablet, and mobile devices.

      3. Dynamic Data Rendering - Technology information is stored in data and dynamically displayed using React components and .map(), making the application easy to maintain and extend.


REACT CORE QUESTIONS

1.Q/ What is JSX, and why is it used in React?

1.A/ JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript/TypeScript.

2/Q/ What is the difference between props and state?

2.A/ Props and state are both used to handle data in React, but they have different purposes.
        * Props
            1. Props are used to pass data from a parent component to a child component.
            2. Props are read-only.
            3. A child component should not directly change its props.
        * State
            1. State is data that belongs to a component.
            2. State can change during the application's execution.
            3. When state changes, React re-renders the component.

3.Q/ What does the useState hook do, and where did you use it in this project?

3.A/ The useState hook allows a React functional component to create and manage state. In my Dev Stack project, I used useState to store the technology/skill data after loading it from the JSON file.

4.Q/ What does the useEffect hook do, and why did you need it to load the JSON data?

4.A/ The useEffect hook is used to perform side effects in a React component.

5.Q/ Why does every item in a .map() list need a unique key prop?

5,A/ When we use .map() to create multiple React elements, each element should have a unique key. The key should be unique among the items in that list.

6.Q/ What is conditional rendering? Show one place you used it.

6.A/ Conditional rendering means displaying different UI depending on a condition.For example, if there are no skills in my stack, I can display an empty message.So, conditional rendering allows React to show different content based on a condition.

7.Q/ How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

7.A/ We pass data from a parent to a child using props.A child cannot directly change the parent's state.Instead, the parent passes a callback function to the child.