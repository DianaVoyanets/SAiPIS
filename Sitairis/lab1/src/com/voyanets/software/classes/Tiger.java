package com.voyanets.software.classes;

import com.voyanets.software.interfaces.IPredatory;

public class Tiger implements IPredatory {

    @Override
    public void eat() {
        System.out.println("I can eat");
    }

    @Override
    public void roar() {
        System.out.println("I can roar");
    }

    @Override
    public void proliferation() {
        System.out.println("I can proliferation");
    }
}
