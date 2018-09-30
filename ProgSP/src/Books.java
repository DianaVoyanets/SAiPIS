import java.awt.*;

public class Books {
    private String name;
    private double price;
    private boolean nameOfIllustration;
    private static double totalPrice = 0;
    private static int countIsIllustration = 0;
    public Books(String name,double price, boolean nameOfIllustration)
    {
        this.name = name;
        this.price = price;
        this.nameOfIllustration = nameOfIllustration;
        totalPrice += this.price;
    }

    public Books(String name, boolean nameOfIllustration)
    {
        this.name = name;
        this.price = 100;
        this.nameOfIllustration = nameOfIllustration;
        totalPrice += this.price;
    }

    public Books(String name,double price)
    {
        this.name = name;
        this.price = price;
        this.nameOfIllustration = true;
        totalPrice += this.price;
    }

    public double getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public boolean isNameOfIllustration() {
        return  false;
    }

    public static int getCountIsIllustration(Books[] obj) {
        for(int i = 0;i < 3;i++) {
            if(obj[i].nameOfIllustration) {
                countIsIllustration++;
            }
        }
        return countIsIllustration;
    }

    public static double getTotalPrice() { return totalPrice;}
}

