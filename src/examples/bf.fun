val Arr[30000]: Int;
val Bf: String ="++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";

def jumpLeft(prog:String, pc:Int, level:Int) : Int = {
    if pc < 0 then pc else {
        if prog[pc] == "[" && level == 0 then pc + 1 else {
            if prog[pc] == "[" then jumpLeft(prog, pc - 1, level - 1) else {
                 if prog[pc] == "]" then jumpLeft(prog, pc - 1, level + 1) else jumpLeft(prog, pc - 1, level)
            }
        }
    }
};


def jumpRight(prog:String, pc:Int, level: Int) : Int = {
    if length(prog) <= pc then pc else {
        if prog[pc] == "]" && level == 0 then pc + 1 else {
            if prog[pc] == "]" then jumpRight(prog, pc + 1, level - 1) else {
                 if prog[pc] == "[" then jumpRight(prog, pc + 1, level + 1) else jumpRight(prog, pc + 1, level)
            }
        }
    }
};

def compute(prog: String, pc: Int, mp: Int): Int[] = {
    if 0 <= pc && pc < length(prog) then {
        if prog[pc] == ">" then compute(prog, pc + 1, mp + 1) else {
            if prog[pc] == "<" then compute(prog, pc + 1, mp - 1) else {
                if prog[pc] == "+" then { 
                    set_val_i32(Arr,mp, Arr[mp] + 1);
                    compute(prog, pc + 1, mp)} else {
                    if prog[pc] == "-" then {
                        set_val_i32(Arr,mp, Arr[mp] - 1);
                        compute(prog,pc+1,mp)
                    }  else {
                    if prog[pc] == "." then {
                        print_char(Arr[mp]);
                        compute(prog, pc +1, mp)
                    } else {
                    if prog[pc] == "," then {
                        set_val_i32(Arr,mp, read());
                        compute(prog, pc + 1, mp)
                    }    else {
                    if prog[pc] == "[" then {
                        if Arr[mp] == 0 then compute(prog, jumpRight(prog ,pc + 1, 0), mp) else compute(prog, pc + 1, mp)
                    } else {
                    if prog[pc] == "]" then {
                        if Arr[mp] != 0 then compute(prog, jumpLeft(prog, pc - 1, 0), mp) else compute(prog, pc + 1, mp)
                    }
                    else compute(prog,pc + 1, mp)
                    }
                    }
                    }

                    }

                }
            }
        }

    } else Arr
};

def run(prog: String): Int[] = compute(prog,0,0);

run(Bf)