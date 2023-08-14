TypeScript React "useLayoutEffect" Demo
=================================

`useEffect`是渲染之后异步执行的，`useLayoutEffect`是在渲染前同步执行的。

绝大多数时间应该使用useEffect，性能更好。只有特殊情况需要使用useLayoutEffect

这个demo中，注意点击button时，`useEffect`会使button闪烁一下，因为屏幕重绘了两次（第一次数值为0，第二次为一个长的数字）；
而 `useLayoutEffect`，button不会闪烁，因为屏幕只重绘了一次。

```
npm install
npm run demo
```

It will open page on browser automatically.
