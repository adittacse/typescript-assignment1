# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Generics allow to write reusable code without losing type safety.

A simple function without generics:

```
function getFirstItem(arr: any[]) {
    return arr[0];
}
```

Function with generics:

```
function getFirstItem<T>(arr: T[]): T {
    return arr[0];
}
```

Now TypeScript remembers the type.

```
// numberItem is number
const numberItem = getFirstItem([10, 20, 30]);

// stringItem is string
const stringItem = getFirstItem(["a", "b", "c"]);
```

Generics help because the function is reusable, but still strictly typed. It works with many data types but TypeScript must check the correct input and output types.
