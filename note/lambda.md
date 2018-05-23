````
Y g = (λf.(λx. f (x x)) (λx. f (x x))) g

````


### BNF of LAMBDA
````
  <expression> := <name> | <function> | <application>
  <function> := λ<name>.<expression>
  <application> := <expression><expression>
````
* There is no algorithm that takes as input two lambda expressions and outputs TRUE or FALSE depending on whether or not the two expressions are equivalent.
* Operation	Name	Description
* (λx.M[x]) → (λy.M[y])	α-conversion	Renaming the bound (formal) variables in the expression. Used to avoid name collisions.
* ((λx.M) E) → (M[x:=E])	β-reduction	Replacing the bound variable with the argument expression in the body of the abstraction
