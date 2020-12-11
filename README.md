# prefresh-bugs-reproduce

## For `@prefresh/nollup` and `@prefresh/snowpack`
### `useEffect` callback changes not trigger refresh
In `preact-nollup/src/Counter.js`:
```jsx
useEffect(() => {
    let interval = setInterval(() => {
        setCount(c => c + 1);
    }, 200);

    return () => {
        clearInterval(interval)
    };
}, []);
```
Changing codes in `useEffect` not triggers refresh. e.g. Change interval time, the counter still use the old value. Or even comment all lines in the `useEffect` callback, the counter still goes on.


## For `@prefresh/snowpack`
### changing a component then changing another component using it causes unexpected behavior
Chang `preact-nollup/src/Counter.jsx` to:
```jsx
import './Counter.css';

export default function Counter () {
    return <div class="Counter">----</div>
}
```
Change `preact-snowpack/src/Internal.jsx` to:
```jsx
import Counter from './Counter';

export const Internal = () => (
  <div>
    Test
    <Counter />
  </div>
);
```
And you can see the `Counter` component above reverted to the previous state. And the subsequent changes to `Counter` will only affect the one below.


