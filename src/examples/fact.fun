def fact(n: Int) : Int =
  if n == 0 then 1 else n * fact(n - 1);

def facT(n: Int, acc: Int) : Int =
  if n == 0 then acc else facT(n - 1, n * acc);

def facTi(n: Int) : Int = facT(n, 1);

{print_int(facT(30,1));
print_string("\n");
print_int(fact(30));
print_string("\n")}

