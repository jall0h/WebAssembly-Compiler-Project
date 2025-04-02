val arr[30000]: Int;
val pointers[2]: Int;
pointers[0] = 0;
pointers[1] = 0;
val Bf: String ="++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";


def jumpLeft(prog:String, pc:Int, level) : Int = {
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

def compute(prog: String): Int[] = {
    if 0 <= pointers[0] && pointers[0] < length(prog) then {
        if prog[pointers[0]] == ">" then set_val_i32(pointers,0,pointers[0] + 1); set_val_i32(pointers,1,pointers[1] + 1) else {
            if prog[pointers[0]] == "<" then set_val_i32(pointers,0,pointers[0] + 1); set_val_i32(pointers,1,pointers[1] - 1) else {
                if prog[pointers[0]] == "+" then { 
                    set_val_i32(arr,pointers[1], arr[pointers[1]] + 1);
                    set_val_i32(pointers,0, pointers[0] + 1)} else {
                    if prog[pointers[0]] == "-" then {
                        set_val_i32(arr,pointers[1], arr[pointers[1]] - 1);
                        set_val_i32(pointers, 0, pointers[0] + 1)
                    }  else {
                    if prog[pointers[0]] == "." then {
                        print_char(arr[pointers[1]]);
                        set_val_i32(pointers,0, pointers[0] + 1)
                    } else {
                    if prog[pointers[0]] == "," then {
                        set_val_i32(arr,pointers[1], read());
                        set_val_i32(pointers,0, pointers[0] + 1)
                    }    else {
                    if prog[pointers[0]] == "[" then {
                        if arr[pointers[1]] == 0 then set_val_i32(pointers,0, jumpRight(prog ,pointers[0] + 1, 0)) else set_val_i32(pointers,0, pointers[0] + 1)
                    } else {
                    if prog[pointers[0]] == "]" then {
                        if arr[pointers[1]] != 0 then set_val_i32(pointers,0, jumpLeft(prog ,pointers[0] - 1, 0)) else set_val_i32(pointers,0, pointers[0] + 1)
                    }
                    else set_val_i32(pointers,0, pointers[0] + 1)
                    }
                    }
                    }

                    }

                }
            }
        }
    };compute(prog) else arr
};

def run(prog: String): Int[] = compute(prog);

run(Bf)