val Max : Int = 100;

def sqr(x: Int) : Int = x * x;

def all(n: Int) : Void = {
  if n <= Max
  then { print_int(sqr(n)); print_string("\n") ; all(n + 1) }
  else skip()
};

{
  all(0)
} 