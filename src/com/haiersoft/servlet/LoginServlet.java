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
        // ��ȡ���û���
        String username = request.getParameter("username");
        // ��ȡ���û�����
        String userpass = request.getParameter("password");

        ServletContext ctx = this.getServletContext();
        // ͨ��ServletContext���web.xml�����õĳ�ʼ������
        String server = ctx.getInitParameter("server");// ��ȡ��������ַ
        String dbname = ctx.getInitParameter("dbname");// ��ȡ���ݿ���
        String user = ctx.getInitParameter("user");// ��ȡ���ݿ��û���
        String pwd = ctx.getInitParameter("pwd");// ��ȡ���ݿ�����

        DBOper db = new DBOper();
        try {
            // �������ݿ�
            db.getConn(server, dbname, user, pwd);
            String sql = "SELECT username,userpass,role FROM userdetail WHERE username=? AND userpass=?";// ��ѯuserdetail���з���Ҫ��ļ�¼
            ResultSet rs = db.executeQuery(sql, new String[] { username, userpass });// ִ�в�ѯ��username��userpass������������Ϊ����
            // �Ϸ����û�
            if (rs != null && rs.next()) {
                // ��ȡSession
                HttpSession session = request.getSession();
                // ���û������浽Session��
                session.setAttribute("username", username);
                //��ȡ�û���¼ʱ�䣬�����浽Session��
                SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
                String logtime=dateFormat.format(new Date());
                session.setAttribute("logtime", logtime);
//				//�޸ĸ��û��ĵ�¼����
//				sql="UPDATE userdetail SET lognum = lognum+1 WHERE username = '"+username+"'";
//				db.executeUpdate(sql, null);
                //��ͻ��˷���Cookie
                Cookie cookie = new Cookie("userName", username);
                cookie.setMaxAge(60 * 60 * 24 * 30);
                response.addCookie(cookie);
                // ��ת��main.jsp
                RequestDispatcher dispatcher = request.getRequestDispatcher("booklist.jsp");
                dispatcher.forward(request, response);
            } else { // ���Ϸ����û�
                out.println("��¼ʧ��!");
                out.println("<br><a href='login.jsp'>���µ�¼</a>");
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
