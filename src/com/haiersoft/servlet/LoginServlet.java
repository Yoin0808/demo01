package com.haiersoft.servlet;

import com.haiersoft.db.DBOper;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet(name = "LoginServlet", value = "/LoginServlet")

public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("GBK");
        response.setContentType("text/html;charset=GBK");
        PrintWriter out = response.getWriter();
        // 获取表单用户名
        String username = request.getParameter("username");
        // 获取表单用户密码
        String userpass = request.getParameter("password");

        ServletContext ctx = this.getServletContext();
        // 通过ServletContext获得web.xml中设置的初始化参数
        String server = ctx.getInitParameter("server");// 获取服务器地址
        String dbname = ctx.getInitParameter("dbname");// 获取数据库名
        String user = ctx.getInitParameter("user");// 获取数据库用户名
        String pwd = ctx.getInitParameter("pwd");// 获取数据库密码

        DBOper db = new DBOper();
        try {
            // 连接数据库
            db.getConn(server, dbname, user, pwd);
            String sql = "SELECT username,userpass,role FROM userdetail WHERE username=? AND userpass=?";// 查询userdetail表中符合要求的记录
            ResultSet rs = db.executeQuery(sql, new String[] { username, userpass });// 执行查询，username和userpass放入数组中作为参数
            // 合法的用户
            if (rs != null && rs.next()) {
                // 获取Session
                HttpSession session = request.getSession();
                // 将用户名保存到Session中
                session.setAttribute("username", username);
                //获取用户登录时间，并保存到Session中
                SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
                String logtime=dateFormat.format(new Date());
                session.setAttribute("logtime", logtime);
//				//修改该用户的登录次数
//				sql="UPDATE userdetail SET lognum = lognum+1 WHERE username = '"+username+"'";
//				db.executeUpdate(sql, null);
                //向客户端发送Cookie
                Cookie cookie = new Cookie("userName", username);
                cookie.setMaxAge(60 * 60 * 24 * 30);
                response.addCookie(cookie);
                // 跳转到main.jsp
                RequestDispatcher dispatcher = request.getRequestDispatcher("booklist.jsp");
                dispatcher.forward(request, response);
            } else { // 不合法的用户
                out.println("登录失败!");
                out.println("<br><a href='login.jsp'>重新登录</a>");
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
