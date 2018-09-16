package com.voyanets.software.classes;

import com.voyanets.software.interfaces.IInterface2;

public class Class6 implements IInterface2 {

    @Override
    public int sub(int a, int b) {
        final int i = a - b;
        return i;
    }

    @Override
    public int func1(int a, int b) {
        return 0;
    }
}
