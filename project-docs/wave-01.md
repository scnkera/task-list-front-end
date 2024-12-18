# Wave 01: Setup and Baseline

**Learn Topics: React Components and Props required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `npm install` to install dependencies.
1. Run `npm dev` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End. For this wave you should make sure that that you are on the branch called `wave-01`. You might also need to either commit, stash, or abandon any changes made to the `wave-01` branch to be able to switch back to the main branch.

Read through the code in `App.jsx`, `TaskList.jsx` and `Task.jsx` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from?
<!-- The Task component receives the following props:
id (number): A unique identifier for the task
title (string): A textual description of the task
isComplete (boolean): A flag indicating whether the task has been completed
- These props originate in TaskList.jsx. Inside TaskList, the tasks array is mapped over, and each task object’s properties are passed as props to Task 
- In turn, TaskList receives its tasks prop from App.jsx. The App component imports a hard-coded array of tasks (TASKS), and passes it into TaskList: <TaskList tasks={TASKS} />
- This chain of prop passing looks like:
App → passes TASKS as a prop → TaskList → maps over tasks and passes individual properties → Task -->

1. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?
  <!-- - (props) => {props.title} (props.id, props.title, and props.isComplete) -->
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
2. What `props` does `TaskList` have? Where do they come from?
   <!-- TaskList receives a single prop: tasks, which must be an array of objects, each containing id, title, and isComplete. This is defined in TaskList.propTypes -->
<!-- The tasks prop comes from App.jsx, where tasks={TASKS} is passed into TaskList: <TaskList tasks={TASKS} /> -->


3. Where is the function `getTaskListJSX` called in `TaskList`?
   <!-- In TaskList.jsx, getTaskListJSX is defined as a helper function inside the TaskList component. It takes tasks as an argument, maps over them, and returns an array of Task components. The return statement of TaskList calls getTaskListJSX(tasks) to generate its JSX content: 
   -->
    - How would the code change without this helper function?
  <!-- If we decided not to use a helper function, we could inline the mapping logic directly in the JSX:
  return (
  <ul className="tasks__list no-bullet">
    {tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        isComplete={task.isComplete}
      />
    ))}
  </ul> -- !>




4. What component is `TASKS` passed to in `App`?
<!-- TASKS is defined in App.jsx as an array of task objects. It’s then passed directly to the TaskList component via the tasks prop:
const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

...

<div>{<TaskList tasks={TASKS} />}</div> -->
    - How does the component pass `TASKS`?
  <!-- App uses JSX prop passing to give TaskList the tasks prop, allowing TaskList to render them. Within TaskList, the tasks array is used to create Task components. -->
    - What element is the component wrapped in?
<!-- In App.jsx, the TaskList is wrapped in a <div> element. More broadly, it’s placed inside the <main> section of the App. The structure is:
<main>
  <div>
    <TaskList tasks={TASKS} />
  </div>
</main>  -->

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.
