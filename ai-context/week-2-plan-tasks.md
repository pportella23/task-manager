Day 1 - Monday (Week 2)
**Read: useReducer - 40 min**

- [x]  React docs: useReducer — full page, every example
- [x]  Understand: when useReducer beats useState (complex state transitions, multiple related values)
- [x]  Write out the pattern on paper: state, action union type, reducer function, dispatch
- [x]  Do not code yet — understand the shape first

**Read: useMemo and useCallback - 40 min**

- [x]  React docs: useMemo and useCallback
- [x]  Critical question: what problem does each actually solve?
- [x]  Key insight: they don't prevent re-renders of the component — they prevent recreating values/functions
- [x]  When they help vs when they're premature optimization — write the rule in your own words

**Read: useRef - 20 min**

- [x]  Two use cases: DOM access and persisting values across renders without triggering re-render
- [x]  How is a ref different from state? Write the answer in one sentence.

**Plan the refactor on paper - 20 min**

- [x]  List the 3 custom hooks you'll build: useLocalStorage, useDebounce, usePrevious
- [x]  For each: what does it take as input? What does it return?
- [x]  Sketch the useReducer action union: AddTask, DeleteTask, UpdateStatus, SetFilter

Goal: You can explain useReducer vs useState, and have the refactor planned on paper.

Day 2 - Tuesday (Week 2)

**First: define the action types - 30 min**

- [x]  In src/types/task.ts or a new src/types/actions.ts
- [x]  Write the discriminated union for TaskAction
- [x]  type TaskAction = { type: 'ADD_TASK'; payload: Task } | { type: 'DELETE_TASK'; id: string } | ...
- [x]  Run typecheck — no errors before moving on

**Second: write the reducer - 60 min**

- [x]  Create src/reducers/taskReducer.ts
- [x]  Function signature: (state: Task[], action: TaskAction) => Task[]
- [x]  Handle every action type. TypeScript will error if you miss one — let it guide you.
- [x]  No mutation. Every case returns a new array.
- [x]  Export and import into App.tsx — replace useState with useReducer

**Third: useLocalStorage hook - 60 min**

- [x]  Create src/hooks/useLocalStorage.ts
- [x]  Generic signature: useLocalStorage (key: string, initialValue: T): [T, (value: T) => void]
- [x]  This is your first generic custom hook — the is the challenge
- [x]  Replace the raw localStorage calls in App.tsx with this hook
- [x]  Test: data still persists on refresh

Goal: App still works identically but now uses useReducer + useLocalStorage.

Day 3 - Wednesday (Week 2)

**First: useDebounce hook - 60 min**

- []  Create src/hooks/useDebounce.ts
- []  Signature: useDebounce (value: T, delay: number): T
- []  Uses useEffect + setTimeout + clearTimeout (cleanup function)
- []  The cleanup is the key lesson — what happens without it?
- []  Test: add a search input to filter tasks by title. The filter should debounce.

**Second: usePrevious hook - 45 min**

- []  Create src/hooks/usePrevious.ts
- []  Signature: usePrevious (value: T): T | undefined
- []  Uses useRef — the value persists across renders without causing re-renders
- []  This one is short. If it takes more than 45 min, you're overthinking it.

**Third: TypeScript pass on hooks - 60 min**

- []  Each hook must have explicit return type annotation
- []  Generics must be constrained where appropriate
- []  Run typecheck — zero errors
- []  Can you explain why useDebounce needs a cleanup function? Write the answer.

Goal: All 3 custom hooks built, typed, and integrated. Typecheck passes.

Day 4 - Thursday (Week 2)

**First: useMemo for filtered tasks - 45 min**

- []  The filteredTasks derivation is currently inline. Move it to useMemo.
- []  const filteredTasks = useMemo(() => ..., [tasks, filter])
- []  Ask yourself: does this actually improve anything? Measure before assuming.
- []  Use React DevTools Profiler — open it, record interactions, look at render times

**Second: useCallback on handlers - 45 min**

- []  Wrap addTask, deleteTask, updateTaskStatus in useCallback
- []  Dependency arrays must be correct — ESLint exhaustive-deps will catch errors
- []  Critical question: does this actually help without React.memo on children?
- []  Answer: no. Note this. Premature optimization is the anti-pattern.

**Third: folder structure review - 60 min**

- []  Review current structure against the Week 1 expected layout
- []  Add src/hooks/ and src/reducers/ — are they earning their place?
- []  Every file should be importable and explainable in one sentence
- []  Clean up any dead code from the refactor

Goal: Refactor complete. Profiler used. Premature optimization identified and noted.

Day 5 - Friday (Week 2)

**Code review: hooks edition - 60 min**

- []  For each custom hook: can you explain the input, output, and why it uses the hook it uses?
- []  Is the reducer exhaustive? Does TypeScript prove it?
- []  Are useEffect cleanup functions present where needed?
- []  Any useEffect that syncs state to state? Delete it.

**Retrospective + README update - 30 min**

- []  Add a section to README: 'Why useReducer over useState for task state'
- []  Add: 'Custom hooks built and what each does'
- []  Add: 'What I learned about useMemo/useCallback this week'

**Commit and push to GitHub - 30 min**

- []  Tag this commit: git tag v2-hooks-refactor
- []  Meaningful messages per hook and reducer
- []  Push tags: git push --tags

Goal: README updated, tagged commit pushed, you can explain every hook decision.

Day 6 - Saturday (Week 2)

**Drill 1: useDebounce from memory - 40 min**

- []  Close everything. Implement useDebounce from scratch.
- []  No references. No looking at your own code.
- []  Must have the cleanup function. Must be generic.
- []  If you can't do it in 40 min, that tells you something important.

**Drill 2: explain useReducer vs useState - 20 min**

- []  Voice memo. 3 minutes max.
- []  When do you choose useReducer? Give a concrete example.
- []  What does the discriminated union give you that a plain string doesn't?

**Drill 3: Redux literacy spike - 60 min**

- []  Record a 5-min voice memo (phone is fine) explaining your task manager
- []  Cover: component structure, where state lives, why you made those choices
- []  If you stumble explaining something, that's your next study target
- []  This is interview prep disguised as reflection

**Plan next week - 30 min**

- []  Read Redux Toolkit docs: createSlice, configureStore, useSelector, useDispatch
- []  Do NOT build anything — read and understand the pattern
- []  Write: how does RTK's createSlice compare to your taskReducer + action union?
- []  This is the legacy literacy session from the enterprise readiness plan

Goal: useDebounce from memory. RTK mental model acquired.
