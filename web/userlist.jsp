<%--
  Created by IntelliJ IDEA.
  User: Yoin
  Date: 2022/11/16
  Time: 14:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@page import="com.haiersoft.entity.User"%>
<%@page import="java.util.List"%>
<html>
<head>
    <link type="text/css" rel="stylesheet" href="./css/mp.css">
    <link type="text/css" rel="stylesheet" href="./css/examples.css">
</head>
<body scroll="no">
<!-- ���ͼ���б�Ϊ�գ�����SeachBookServlet���� -->
<!-- ʹ��JSP�ű������ж� -->
<%
    List<User> userList = (List<User>) request.getAttribute("userList");
    //������������ͼ���б�Ϊ�գ���ת��SeachBookServlet���д���
    if (userList == null) {
%>
<jsp:forward page="SeachUserServlet"></jsp:forward>
<%
    }
%>
<table width="100%" height="100%" border="0" cellspacing="0"
       cellpadding="0">

    <tr style="height: 96%">
        <td>
            <table border="0" width="100%" align="center">
                <tr style="height: 1px" class="">
                    <td class="title_td">�û��б�&nbsp;</td>
                </tr>
            </table>
            <div class="list_div" style="height: 87%">
                <table border="0" align="left" cellspacing="0" class="list_table"
                       id="senfe" style='width: 99%'>
                    <thead>
                    <tr>
                        <th width="5%"><span style="font-weight: 400">���</span></th>
                        <th width="15%"><span style="font-weight: 400">�û���</span></th>
                        <th width="15%"><span style="font-weight: 400">�û�����</span></th>
                        <th width="16%"><span style="font-weight: 400">Ȩ��</span></th>
                        <th width="22%"><span style="font-weight: 400">ע��ʱ��</span></th>
                        <th width="15%"><span style="font-weight: 400">��¼����</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <%
                        for (int i = 0; i < userList.size(); i++) {
                            User user = userList.get(i);
                    %>

                    <tr>
                        <td align="center"><%=i+1 %></td>
                        <td><%=user.getUsername()%></td>
                        <td align="center"><%=user.getUserpass()%></td>
                        <td align="center"><%=user.getRole()%></td>
                        <td align="center"><%=user.getRegtime()%></td>
                        <td align="center"><%=user.getLognum()%></td>

                    </tr>
                    <%
                        }
                    %>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
</table>
</body>
</html>