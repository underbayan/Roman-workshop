function Y(f) {
        g = function (h) {
                return function (x) {
                        return f(h(h))(x);
                }
        }

        return g(g);
}
Fibonacci = Y(
        function (h) {
                return function (n) {
                        if (n < 2) {
                                return 1;
                        }

                        return n * h(n - 1);
                }
        }
);
// console.log(Fibonacci(4))

const I = x => x
const K = x => y => x
const A = f => x => f(x)
const T = x => f => f(x)
const W = f => x => f(x)(x)
const C = f => y => x => f(x)(y)
const B = f => g => x => f(g(x))
const S = f => g => x => f(x)(g(x))
const P = f => g => x => y => f(g(x))(g(y))
const Y = f => (g => g(g))(g => f(x => g(g)(x)))