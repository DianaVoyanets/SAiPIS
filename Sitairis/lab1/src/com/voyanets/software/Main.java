package com.voyanets.software;

import com.voyanets.software.classes.Dog;
import com.voyanets.software.classes.Maus;
import com.voyanets.software.interfaces.IMammals;
import com.voyanets.software.interfaces.IMaus;

public class Main {
    public static void main(String[] args) {
        Dog obj = new Dog();
        IMammals maus = new Maus();
        ((Maus) maus).eat();
    }
}

