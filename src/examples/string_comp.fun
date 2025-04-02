val Bf: String = "[]";

def is_equal(x: String, y: String) : Void = {
    if x == y[0] then print_string("Equal\n") else print_string("Not Equal\n")
};

def is_not_equal(x: String, y: String) : Void = {
    if x != y[1] then print_string("Not Equal\n") else print_string("Equal\n")
};


{is_equal("[", Bf);
is_not_equal("[", Bf)}