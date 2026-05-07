# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

```any``` labeled as type safety hole, because typeScript will not check type of data if any mentioned. That means it stopped safety guard.

```
let text: any = "Learning TypeScript";

data.toUpperCase();  // This is correct
data.toFixed(2);  // TypeScript will not give any error here, but it will give runtime error
```

```unkown``` is safer,, because it can't be use directly. There must me type check first.

```
let text: unknown = "I am learning TypeScript";

// text.toUpperCase(); // incorrect way

if (typeof text === "string") {
    return text.toUpperCase();  // correct way
}
```

## Concept of type narrowing:

Type narrowing is, mention type to TypeScript by using checking data like ```if else``` conditional checking.

```
type StringOrNumber = string | number;

const processData = (value: StringOrNumber): StringOrNumber => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value.toFixed(2);
}
```
