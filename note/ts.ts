type Point = {
  x: number;
  y: number;
}
type ID = number | string;
type Cstring = string;

interface y {
  x: number;
  y: number;
}
interface ey extends y {
  honye: boolean
}


function padLeft(p: number | string, input: string) {
  return "__".repeat(p) + input
}

const a = 12
type ddd = typeof a
type fn = (s: string) => void
fn = 12

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
