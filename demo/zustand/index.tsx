import React, { useSyncExternalStore } from 'react';
import { createRoot } from 'react-dom/client';

const create = (f) => {
  let state;
  const listeners = new Set();
  
  const setState = (partial) => {
    const newState = typeof partial === 'function' ? partial(state) : partial;
    state = { ...state, ...newState }; 
    listeners.forEach(l => l());
  };
  
  const getState = () => state;
  const subscribe = (l) => (listeners.add(l), () => listeners.delete(l));
  
  const initialState = f(setState, getState);
  state = { ...initialState };
  
  return (selector = s => s) => 
    useSyncExternalStore(subscribe, () => selector(state));
};

// 使用示例
const useStore = create((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
}));

function Counter() {
  const { count, inc } = useStore();
  return <button onClick={inc}>{count}</button>;
}
const App = () => {
  return <div><h1>Hello, world!</h1>
  <Counter />
    <ul >
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>;
};

createRoot(document.getElementById('app')!).render(<App />);

