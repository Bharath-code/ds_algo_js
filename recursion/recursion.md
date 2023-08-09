# Recursion

## What is recursion?
> Recursion is function that calls itself, until its done.

## Components of recursion?
1. Recursion case
2. Base case

How value return from recursion is very important to remember. It's a concept called **Call Stack**.
<br>
Without understanding what is call stack , it will be hard to understand recursion.

## Base case:
Without specifying the base case function call will be infinite loop. So specify the case , so that if satisfy the condition it will exist from the recursion.
This base case should have **return** statement.

## Recursive case:
This case will the call its function again and again until it satisfies the base case and return value according call stack. In this case value should decrement in each call, so that it satisfies the base case.
