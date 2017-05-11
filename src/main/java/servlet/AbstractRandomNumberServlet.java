package servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Random;

public class AbstractRandomNumberServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
//        Json.createWriter(resp.getOutputStream())
//            .writeObject(Json.createObjectBuilder()
//                .add("randomNumber", new Random().nextInt(100))
//                .build());
        resp.getWriter().print("{\"randomNumber\": " + new Random().nextInt(100) + "}");
    }
}
