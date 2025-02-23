// Right and Left Jumps in BF loops
val arr: Int[30000];
val bf: String = "";

def jumpRight(prog:String, pc:Int, level: Int) : Int = {
    if length(prog) <= pc then pc else {
        if prog[pc] == ']' && level == 0 then pc + 1 else {
            if prog[pc] == ']' then jumpRight(prog, pc + 1, level - 1) else {
                 if prog[pc] == '[' then jumpRight(prog, pc + 1, level + 1) else jumpRight(prog, pc + 1, level)
            }
        }
    }
}

def jumpLeft(prog:String, pc:Int, level: Int) : Int = {
    if length(prog) < 0 then pc else {
        if prog[pc] == '[' && level == 0 then pc + 1 else {
            if prog[pc] == '[' then jumpLeft(prog, pc - 1, level - 1) else {
                 if prog[pc] == ']' then jumpLeft(prog, pc - 1, level + 1) else jumpLeft(prog, pc - 1, level)
            }
        }
    }
}

// main interpreter loop

def compute(prog: String, pc: Int, mp: Int, mem: Int[]): Int[] = {
    if 0 <= pc && pc < length(prog) then {
        val curr = prog[pc];
        if curr == '>' then compute(prog, pc + 1, mp + 1, mem) else {
            if curr == '<' then compute(prog, pc + 1, mp - 1, mem) else {
                if curr == '+' then { 
                    mem[mp] = mem[mp] + 1;
                    compute(prog, pc + 1, mp, mem)} else {
                    if curr == '-' then {
                        mem[mp] = mem[mp] - 1;
                        compute(prog,pc+1,mp,mem)
                    }  else {
                    if curr == '.' then {
                        print_char(mem[mp]);
                        compute(prog, pc +1, mp, mem);
                    } else {
                    if curr == ',' then {
                        val x: Int = read();
                        mem[mp] = x;
                        compute(prog, pc + 1, mp, mem)
                    }    else {
                    if curr == '[' then {
                        val y: Int = jumpRight(prog ,pc + 1, 0)
                        if mem[mp] == 0 then compute(prog, y, mp, mem) else compute(prog, pc + 1, mp, mem)
                    } else {
                    if curr == ']' then {
                        val z: Int = jumpLeft(prog ,pc - 1, 0)
                        if mem[mp] == 0 then compute(prog, z, mp, mem) else compute(prog, pc + 1, mp, mem)
                    }
                    else compute(prog,pc + 1, mp, mem)
                    }
                    }
                    }

                    }

                }
            }
        }

    } else mem
}

def run(prog: String) = compute(prog,0,0,arr)

run(bf)