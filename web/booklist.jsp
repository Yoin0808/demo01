<%@ page language="java" contentType="text/html; charset=GBK"%>
<%@page import="com.haiersoft.entity.Book"%>
<%@page import="java.util.List"%>
<html>
<head>
<link type="text/css" rel="stylesheet" href="./css/mp.css">
<link type="text/css" rel="stylesheet" href="./css/examples.css">
<script language="javascript">
	function select(){
		document.search.submit();
	}
	function showShop() {
		window.parent.frmMain.location = "cart.jsp";
	}
</script>
</head>
<body scroll="no">
<!-- 如果图书列表为空，跳到SeachBookServlet处理 -->
<!-- 使用JSP脚本进行判断 -->
<%
	List<Book> bookList = (List<Book>) request.getAttribute("bookList");
	//如果请求对象中图书列表为空，则转到SeachBookServlet进行处理
	if (bookList == null) {
%>
<jsp:forward page="SeachBookServlet"></jsp:forward>
<%
	}
%>
<table width="100%" height="100%" border="0" cellspacing="0"
	cellpadding="0">
	<tr style="height: 2%">
		<td>
		<table border="0" width="100%" align="center">
			<tr>
				<td class="title_td">图书一览</td>
			</tr>
		</table>
		</td>
	</tr>
	<tr style="height: 96%">
		<td>
		<form method="POST" name="search" action="SeachBookServlet">
		<table width="70%">
			<tr>
				<td width="10%" class="item_td">&nbsp;图书名称：</td>
				<td class="input_td" style="width: 20%"><input type="text"
					name="bookName" value="" style="width: 100%" class="input_input"
					size="30"></td>
				<td style="width: 1%">&nbsp;</td>
				<td width="10%" class="item_td">&nbsp;出版社：</td>
				<td width="15%" class="input_td"><select name="publisher"
					style="width: 100%" class="input_drop">
					<option value=""></option>
					<option value="1">人民邮电出版社</option>
					<option value="2">清华大学出版社</option>
					<option value="3">电子工业出版社</option>
				</select></td>
				<td style="width: 1%">&nbsp;</td>
				<td width="29%">
				<button onclick="select()" id="btnSearch" name="btnSearch"
					style="width: 15%">查询</button>
				</td>
			</tr>
		</table>
		</form>
		<table border="0" width="100%" align="center">
			<tr style="height: 1px" class="">
				<td class="title_td">图书列表&nbsp;</td>
			</tr>
		</table>
		<div
			style="position: absolute; left: 0px; bottom: 1px; z-index: 1000;"
			id="excel">
		<table style="width: 40%">
			<tr>
				<td style="cursor: hand;">
				<button onclick="showShop()" id="btnSave" name="btnSave"
					style="width: 24%">查看购物车</button>
				</td>
			</tr>
		</table>
		</div>
		<div class="list_div" style="height: 87%">
		<table border="0" align="left" cellspacing="0" class="list_table"
			id="senfe" style='width: 99%'>
			<thead>
				<tr>
					<th width="5%"><span style="font-weight: 400">序号</span></th>
					<th width="28%"><span style="font-weight: 400">书名</span></th>
					<th width="15%"><span style="font-weight: 400">出版社</span></th>
					<th width="16%"><span style="font-weight: 400">ISBN</span></th>
					<th width="15%"><span style="font-weight: 400">价格(￥)</span></th>
					<th width=""><span style="font-weight: 400">操作</span></th>
				</tr>
			</thead>
			<tbody>
				<%
					for (int i = 0; i < bookList.size(); i++) {
						Book book = bookList.get(i);
				%>

				<tr>
					<td align="center"><%=i+1 %></td>
					<td><%=book.getBookName()%></td>
					<td align="center">
					<%
						if (book.getPublisherID() == 1) {
					%> 人民邮电出版社 <%
						} else if (book.getPublisherID() == 2) {
					%> 清华大学出版社 <%
						} else if (book.getPublisherID() == 3) {
					%> 电子工业出版社 <%
						}
					%>
					</td>
					<td align="center"><%=book.getIsbn()%></td>
					<td align="center"><%=book.getPrice()%></td>
					<td align="center" nowrap="nowrap"><a
						href="book.jsp?isbn=<%=book.getIsbn()%>">查看详细</a>&nbsp;
						<a href="BuyServlet?isbn=<%=book.getIsbn()%>"><img src="./images/buy.gif" style="border:0px"/></a></td>
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