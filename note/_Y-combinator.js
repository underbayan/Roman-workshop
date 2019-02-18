function Y(f){
         g = function(h){
                return function(x){
                         return f(h(h))(x);
                }
         }

         return g(g);
 }
Fibonacci = Y(
       function(h){
               return function(n){
                     if(n < 2){
                             return 1;
                       }

                       return n * h(n-1);
              }
      }
 );
// console.log(Fibonacci(4))
