package com.voyanets.software.classes;

public class Fox extends ADog {

    @Override
    void barc() {
        System.out.println("I can barc");
    }

    @Override
    void run() {
        System.out.println("I can run");
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
}
