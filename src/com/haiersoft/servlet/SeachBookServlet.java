package com.haiersoft.servlet;

import com.haiersoft.db.BookDao;
import com.haiersoft.entity.Book;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "SeachBookServlet", value = "/SeachBookServlet")

public class SeachBookServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("GBK");
        response.setContentType("text/html;charset=GBK");
        ServletContext ctx = this.getServletContext();
        // 通过ServletContext获得web.xml中设置的初始化参数
        String server = ctx.getInitParameter("server");// 获取服务器地址
        String dbname = ctx.getInitParameter("dbname");// 获取数据库名
        String user = ctx.getInitParameter("user");// 获取数据库用户名
        String pwd = ctx.getInitParameter("pwd");// 获取数据库密码

        BookDao dao = new BookDao();
        List<Book> booklist = null;
        try {
            dao.getConn(server, dbname, user, pwd);
            //返回所有图书列表
            booklist = dao.getAllBook();
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (booklist != null) {
            request.setAttribute("bookList", booklist);
        }
        request.getRequestDispatcher("booklist.jsp").forward(request, response);
    }

}
