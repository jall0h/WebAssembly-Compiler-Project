def fib(n:Int):Int = {
    if n <= 1 then n else fib(n-1) + fib(n-2)
};

{print_int(fib(30));
print_string("\n")}