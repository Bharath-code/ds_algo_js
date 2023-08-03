# What is BigO?
BigO represents the worst case scenario a code can perform.
It is denoted by **O(n)**.
<br>
We can determine how well a code can perform using two constrains.

1. Time complexity
2. Space complexity

These two constraint can have different cases and they are as follows.

1. Omega - Best case scenorio - Ω
2. Theta - Average case scenorio - θ
3. Omicron - Worst case scenorio - O (capital o)

> We always go for worst case scenorio i.e Big O notation

> We always calculate time complexity, because and space complexity will be similar for many cases.
Except some sorting algorithms.

## Time Complexity:
It will always be based on the number of operation it will take to complete the process i.e **n**.


So we have different complexity based on  number of operation.They are categorized from Excellent to Horrible.
|BigO      |   Alias Name     | Performace|
|----------|------------|---------|
|O(1)       |  constant| Excellent
|O(logn)| Divide and conquer| Good
|O(n)|  Linear operation| Fair
|O(nlogn)| sorting| Bad
|O(n^2)| Loop with loop| Horrible
|O(2^n)| | Horrible
|O(n!)| Fatorial| Horrible

## Rules for calculating BigO:
1. Remove constant O(n+n) => O(2n) => here 2 is insignificant , so result is O(n).
2. Remove non dominant O(n^2+n) => here n is insignificant, so result is O(n^2).