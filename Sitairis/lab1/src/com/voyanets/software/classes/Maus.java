package com.voyanets.software.classes;

import com.voyanets.software.interfaces.IHares;

public class Maus extends ASquirrel implements IHares {

    @Override
    void climb() {
        System.out.println("I can climb");
    }

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

    @Override
    public void jump() {
        System.out.println("I can jump");
    }

    @Override
    public void gnaw() {
        System.out.println("I can gnaw");
    }
}
