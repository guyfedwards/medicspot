# Answers
## Q1
```
> 2
> 1
```
The setTimeout will run the function asynchronously causing it to be executed after the synchronous call of `console.log("2")`.

## Q2
```
> 10
> 9
> 8
> 7
> 6
> 5
> 4
> 3
> 2
> 1
> 0
```
The function calls itself recursively synchronously so will execute each level of recursion before continuing execution. This results in the deepest call being logged first and unwrapping all the way up.

## Q3
Modifying arguments can cause unexpected behaviour so is generally bad practice as following code may want to access the arguments as they were passed.

## Q4 
```
> 3
```
`foo` returns a function with a closure. This allows the returned function to access the value passed to `foo`.
`var bar = foo(1)` is setting the variable `a = 1` which is stored in the closure to be used when `bar(2)` is called

## Q5
This is the callback pattern used to pass a function you wish to be called after some asynchronous work has been completed.  
In this example the `done()` function is called after a short timer.
