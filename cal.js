// f(5)= 2
// f(3)=1
// f(2)=1
// f(4)=1
// f(1)=0
// f(n)=f(n-5)+g(n-3)+k(n-2)=f(n-5)+g(n-3)+1=f(n-5)+g(n)

// g(n)=g(n-3)+k(n-2)=g(n-3)+1
// g(n)-1=g(n-3)
// k(n)=1

// g(5)=1
// g(4)=0
// g(3)=1
// g(2)=0
// g(1)=0

const g = x => {
  if (1 < x && x < 6) return 1;
  if (x === 1) return -1;
  return g(x - 3) + 1;
};
const f = x => {
  if (x === 5) return 2;
  if (1 < x && x < 5) return 1;
  if (x === 1) return -1;
  return f(x - 5) + g(x);
};
