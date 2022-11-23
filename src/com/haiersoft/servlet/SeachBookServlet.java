package com.haiersoft.servlet;

import com.haiersoft.db.BookDao;
import com.haiersoft.entity.Book;
import com.sun.xml.internal.bind.v2.model.core.ID;

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
        //获取bookName、publisher的值
        String bookname =request.getParameter("bookName");
        String pid =request.getParameter("publisher");
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
            //仅根据书名查书籍
            if (bookname!=null && bookname.length()>0 && (pid ==null||pid.equals(""))){
                booklist=dao.getBookByName(bookname);

            }//仅根据出版社查书籍
            else if (pid!=null && pid.length()>0 && (bookname==null || bookname.equals(""))){
                booklist=dao.getBookByPublisher(Integer.parseInt(pid));

            }//根据书名与出版社查书籍
            else if (bookname!=null && bookname.length()>0 && pid!=null && pid.length()>0){
                booklist=dao.getBookByNameAndPublish(bookname,Integer.parseInt(pid));
            }//为空，返回所有图书列表
            else {
                booklist=dao.getAllBook();
            }


        } catch (Exception e) {
            e.printStackTrace();
        }
        if (booklist != null) {
            request.setAttribute("bookList", booklist);
        }
        request.getRequestDispatcher("booklist.jsp").forward(request, response);
    }

}
