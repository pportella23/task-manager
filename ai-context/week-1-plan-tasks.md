Day 1 - Monday (Week 1)
**Read: React rendering model - 45 min**

- [x]  Read official React docs: Describing the UI + Adding Interactivity (all sections)
- [x]  Understand: what triggers a re-render, what the virtual DOM actually does
- [x]  Read: useState and useEffect docs — not tutorials, the actual docs
- [x]  Take notes in your own words. If you can't paraphrase it, you didn't get it

**Setup: scaffold the project - 45 min**

- [x]  Run: npm create vite@latest task-manager -- --template react-ts
- [x]  Install nothing else. No libraries. No Tailwind yet.
- [x]  Configure ESLint with @typescript-eslint. Enable strict: true in tsconfig.json
- [x]  Delete App.css, reset App.tsx to a blank component. Confirm it runs.

**Plan on paper - 30 min**

- [x]  Draw the component tree by hand: App > TaskList > TaskItem, App > TaskForm
- [x]  List every piece of state you'll need and WHICH component owns it
- [x]  Write the Task type: id, title, status ('todo'|'in-progress'|'done'), createdAt
- [x]  Do not open VS Code for this. Paper only.

Goal: End of day: project runs, you have a hand-drawn component tree.

Day 2 - Tuesday (Week 1)

**First: Define your types - 20 min**

- [x]  Create src/types/task.ts
- [x]  Define: Task, TaskStatus ('todo'|'in-progress'|'done'), and CreateTaskInput
- [x]  Do not skip this. Every component starts from these types.

**Second: TaskForm component - 60 min**

- [x]  Build TaskForm with a controlled input (useState for the input value)
- [x]  On submit: call an onAdd prop (type it: (input: CreateTaskInput) => void)
- [x]  Handle empty submission: don't call onAdd if title is blank
- [x]  No styling yet. Ugly and working beats pretty and broken.

**Third: Wire up App state - 60 min**

- [x]  In App.tsx: useState([]) for tasks array
- [x]  Write addTask, deleteTask, updateTaskStatus functions
- [x]  Pass addTask down to TaskForm as onAdd prop — type everything explicitly
- [x]  Render tasks as a plain list to verify state is working

**Fourth: TaskItem and TaskList - 60 min**

- [x]  Build TaskItem: displays title, status, a delete button, a status dropdown
- [x]  Build TaskList: maps over tasks, renders TaskItem for each
- [x]  Pass onDelete and onStatusChange down as typed props
- [x]  Stuck rule: if blocked 25+ min, write your exact question before searching

Goal: End of day: add task → it appears. Delete works. Status changes work.

Day 3 - Wednesday (Week 1)

**First: localStorage persistence - 60 min**

- [x]  On every tasks change, save to localStorage: JSON.stringify(tasks)
- [x]  On mount (useEffect with [] deps), read from localStorage and restore tasks
- [x]  Handle the case where localStorage is empty or has corrupted JSON
- [x]  Test: add tasks, refresh page — they should still be there

**Second: filtering - 60 min**

- [x]  Add a filter state: useState('all')
- [x]  Derive filteredTasks from tasks + filter — do not store filtered tasks in state
- [x]  Render 4 filter buttons: All, Todo, In Progress, Done
- [x]  Active filter should be visually distinct (even just bold text is fine)

**Third: TypeScript pass - 60 min**

- [x]  Run tsc --noEmit. Fix every error.
- [x]  Find every prop type. Is each one as tight as it can be?
- [x]  Find every event handler. Are they typed with React.ChangeEvent, React.FormEvent, etc.?
- [x]  Remove any implicit any. If you used 'as SomeType', justify it or remove it.

Goal: End of day: filters work, data persists on refresh, tsc passes clean.

Day 4 - Thursday (Week 1)

**First: drag-to-reorder (attempt alone) - 90 min**

- [x]  Try to implement drag-to-reorder using only HTML5 drag events (no library)
- [x]  Events you need: onDragStart, onDragOver, onDrop on TaskItem
- [x]  Store dragging task id in state, swap positions in the array on drop
- [x]  25-min rule applies: write what you're stuck on before searching

**Second: basic styling - 60 min**

- [x]  Add a single CSS file (App.css). No Tailwind, no CSS-in-JS.
- [x]  Goal: looks usable, not beautiful. Readable font, some spacing, clear buttons.
- [x]  Style the active filter button differently
- [x]  Make completed tasks visually distinct (strikethrough, opacity reduction)

**Third: edge cases - 30 min**

- [x]  What happens with an empty task list? Render an empty state message.
- [x]  What if the title is only whitespace? Trim and block it.
- [x]  What if someone adds 50 tasks? Does the layout break?
- [x]  These edge cases are what separates a portfolio project from a toy

Goal: End of day: app is usable end-to-end with basic styling

Day 5 - Friday (Week 1)

**Code review: read it as a stranger - 60 min**

- [x]  Read every file top to bottom. Does each component do one thing?
- [x]  Are props minimal? Could any prop be removed or derived instead?
- [x]  Are there any useEffect dependencies you don't fully understand? Fix them.
- [x]  Are there any types that are too wide (string instead of TaskStatus)?
- [x]  Count your useState calls per component — more than 2 is a yellow flag

**Write your retrospective - 30 min**

- [x]  Open README.md. Write 3 sections: What I built, Decisions I made and why, What I'd change
- [x]  This is not optional. Writing forces you to own the code.
- [x]  If you can't explain a decision, it's a sign you need to revisit it

**Commit and push to GitHub - 30 min**

- [x]  Meaningful commit messages: 'add localStorage persistence' not 'update stuff'
- [x]  Add a .gitignore (node_modules, dist, .env)
- [x]  Push to a public repo. The README should be readable on GitHub.

Goal: End of day: code reviewed, README written, pushed to GitHub.

Day 6 - Saturday (Week 1)

**Drill 1: build a counter from memory - 30 min**

- [x]  Close everything. Build a counter: increment, decrement, reset.
- [x]  With TypeScript. From scratch. No references.
- [x]  Constraint: useState only, no useReducer yet.
- [x]  If it takes you more than 15 min, that's important information about your base.

**Drill 2: type a mock API response - 30 min**

- [x]  Given this JSON: {id:1, title:'task', status:'todo', tags:['work','urgent']}
- [x]  Write all the TypeScript types for it without any 'any'
- [x]  Then write a function that takes Task[] and returns only 'todo' tasks — typed fully

**Drill 3: explain your own app - 30 min**

- [x]  Record a 5-min voice memo (phone is fine) explaining your task manager
- [x]  Cover: component structure, where state lives, why you made those choices
- [x]  If you stumble explaining something, that's your next study target
- [x]  This is interview prep disguised as reflection

**Plan next week - 30 min**

- [x]  Review Week 2 from the roadmap: useReducer, useCallback, useMemo, custom hooks
- [x]  Write 2 questions you still have from this week
- [x]  Identify the one concept that felt most shaky — read the docs on it Sunday

Goal: End of day: you can explain your own code clearly and confidently.

## Folder structure — minimal and correct

This is the exact structure you should have by end of week 1. Not more.

`task-manager/
├── src/
│   ├── types/
│   │   └── task.ts          ← Task, TaskStatus, CreateTaskInput
│   ├── components/
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   ├── hooks/
│   │   └── useLocalStorage.ts   ← optional, only if you extract it
│   ├── utils/
│   │   └── storage.ts       ← getTasksFromStorage, saveTasksToStorage
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── .gitignore
├── README.md
├── tsconfig.json
├── vite.config.ts
└── package.json`

That's it. No `/pages`, no `/context`, no `/services`, no `/constants`. You don't need them yet, and adding them is a form of procrastination disguised as architecture.