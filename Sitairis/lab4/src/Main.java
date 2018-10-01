import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
import java.io.File;

public class Main {

    public static final String xmlFilePath = "D:\\University\\Labs\\Sitairis\\lab4\\src\\company.xml";

    public static void main(String argv[]) {

        try {

            File xmlFile = new File(xmlFilePath);

            DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();

            DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();

            Document doc = documentBuilder.parse(xmlFile);

            doc.getDocumentElement().normalize();

            System.out.println("Root element :" + doc.getDocumentElement().getNodeName());

            NodeList nodeList = doc.getElementsByTagName("book");

            System.out.println("===============================================================");


            for (int itr = 0; itr < nodeList.getLength(); itr++) {

                Node node = nodeList.item(itr);

                System.out.println("\nNode Name :" + node.getNodeName());

                if (node.getNodeType() == Node.ELEMENT_NODE) {

                    Element eElement = (Element) node;

                    System.out.println("Title: "
                            + eElement.getElementsByTagName("title")
                            .item(0).getTextContent());
                    System.out.println("Author : "
                            + eElement.getElementsByTagName("author").item(0)
                            .getTextContent());
                    System.out.println("Year : "
                            + eElement.getElementsByTagName("year").item(0)
                            .getTextContent());
                    System.out.println("Price : "
                            + eElement.getElementsByTagName("price").item(0)
                            .getTextContent());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
