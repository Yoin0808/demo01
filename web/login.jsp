<%@ page language="java" contentType="text/html; charset=GBK"%>
<HTML>
<HEAD>
<TITLE>���Ϲ���ϵͳ</TITLE>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<script language="javascript">
	/****************************************************
	 �������ƣ�loginClick
	 ���ܣ���֤��¼
	 �����������
	 �����������
	 ****************************************************/
	function loginClick() {
		//��¼�û���Ϣ�ж�
		var user = document.getElementById("username").value;
		var pass = document.getElementById("password").value;
		if (user == null || user == "") {
			alert("����д�û���");
			document.getElementById("username").focus();
		} else if (pass == null || pass == "") {
			alert("����д����");
			document.getElementById("password").focus();
		} else
			document.Regsiter.submit();
	}
	function res() {
		document.getElementById("username").value = "";
		document.getElementById("password").value = "";
	}
</script>
<style type="text/css">
<!--
.login_td {
	font-family: ����;
	font-size: 12px;
	color: #000066;
}

.login_button {
	padding: 2 4 0 4;
	font-size: 12px;
	height: 18;
	background: url(./images/button_bk.gif) border-width :   
		                  
		      1px;
	cursor: hand;
	border: 1px solid #003c74;
	padding-left: 4px;
	padding-right: 4px;
	padding-top: 1px;
	padding-bottom: 1px;
}
-->
</style>
</HEAD>
<body bgColor=#ffffff>
<table
	style="background-image: url(./images/login_Page/logPage.jpg); height: 100%; width: 100%">
	<tr align="center" valign="middle">
		<td>
		<TABLE style="height: 300; width: 492" cellSpacing=0 cellPadding=0
			border=0 align="center">
			<TBODY>
				<TR valign="middle">
					<TD colSpan=2
						style="background-image: url(./images/login_Page/loginPage_01.jpg)"
						height=44><font face="����" size="4px" color="#196ed1"
						style="padding-left: 20px; vertical-align: middle">���Ϲ���ϵͳϵͳ-�û���¼</font></TD>
				</TR>
				<TR>
					<TD width="203"><IMG height=200 alt=""
						src="./images/login_Page/loginPage_02.jpg" width=202></TD>
					<TD
						style="background-image: url(./images/login_Page/loginPage_03.jpg)"
						height=200 width=497>
					<form method="POST" name="Regsiter" action="LoginServlet">
					<%
						Cookie[] cookies = request.getCookies();
						String userName = "";

						// ���cookie���鲻Ϊnull�ҳ��ȴ���0����ȡCookie
						if (cookies != null && cookies.length > 0) {
							for (int i = 0; i < cookies.length; i++) {
								// ȡ����¼��
								if (cookies[i].getName().equals("userName")) {
									userName = cookies[i].getValue();
								}
							}
						}
					%>
					<table>
						<tr>
							<td width="66" height="20" class="login_td">��¼����</td>
							<td width="115" height="20" class="login_td"><input
								type="text" name="username" value="<%=userName%>"
								style="WIDTH: 110px"></td>
							<td></td>
						</tr>
						<tr>
							<td height="20" class="login_td">�� �룺</td>
							<td height="20" class="login_td"><input type="password"
								name="password" value="" style="WIDTH: 110px"></td>
							<td></td>
						</tr>
						<tr>
							<td height="20" colspan="2" align="center">
							<button class="login_button" onClick="res();">����</button>
							&nbsp;
							<button class="login_button" onClick="loginClick();">��¼</button>
							&nbsp;</td>
							<td class="login_td" align="left" width=71><a
								href="regist.html">���û�ע��</a></td>
						</tr>
					</table>
					</form>
					</TD>
				</TR>
				<TR>
					<TD colSpan=2
						style="background-image: url(./images/login_Page/loginPage_04.jpg)"
						G height=56 align="center" class="login_td">��Ȩ����</TD>
				</TR>
			</TBODY>
		</TABLE>
		</td>
	</tr>
</table>
</BODY>
</HTML>
