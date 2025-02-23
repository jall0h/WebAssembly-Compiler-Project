val Max : Int = 100;

def sqr(x: Int) : Int = x * x;

def all(n: Int) : Void = {
  if n <= Max
  then { log(sqr(n)) ; all(n + 1) }
  else skip()
};

{
  all(0)
} 