package com.voyanets.software.classes;

import com.voyanets.software.interfaces.IPrimates;

public class Monkey implements IPrimates {
    @Override
    public void eatBananas() {
        System.out.println("I can eat bananas");
    }

    @Override
    public void proliferation() {
        System.out.println("I can proliferation");
    }
}
