val Bf: String = "[";

def print_hello(x: String, y: String) : Void = {
    if x == y[0] then print_string("Equal\n") else print_string("Not Equal\n")
};


print_hello("[", Bf)