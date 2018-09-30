public class Main {
    public static void main(String[] args) {
        Books[] books = new Books[3];
        books[0] = new Books("AAA",50,true);
        books[1] = new Books("BBB",40,false);
        books[2] = new Books("CCC",30,true);
        for(int i = 0;i < 3; i++) {
            System.out.println(books[i].getPrice());
        }
        System.out.println("Total price: " + Books.getTotalPrice());
        System.out.println("Count book with illustration: " + Books.getCountIsIllustration(books));
    }
}
