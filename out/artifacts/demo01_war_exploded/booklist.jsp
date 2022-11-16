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
<!-- ���ͼ���б�Ϊ�գ�����SeachBookServlet���� -->
<!-- ʹ��JSP�ű������ж� -->
<%
	List<Book> bookList = (List<Book>) request.getAttribute("bookList");
	//������������ͼ���б�Ϊ�գ���ת��SeachBookServlet���д���
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
				<td class="title_td">ͼ��һ��</td>
			</tr>
		</table>
		</td>
	</tr>
	<tr style="height: 96%">
		<td>
		<form method="POST" name="search" action="SeachBookServlet">
		<table width="70%">
			<tr>
				<td width="10%" class="item_td">&nbsp;ͼ�����ƣ�</td>
				<td class="input_td" style="width: 20%"><input type="text"
					name="bookName" value="" style="width: 100%" class="input_input"
					size="30"></td>
				<td style="width: 1%">&nbsp;</td>
				<td width="10%" class="item_td">&nbsp;�����磺</td>
				<td width="15%" class="input_td"><select name="publisher"
					style="width: 100%" class="input_drop">
					<option value=""></option>
					<option value="1">�����ʵ������</option>
					<option value="2">�廪��ѧ������</option>
					<option value="3">���ӹ�ҵ������</option>
				</select></td>
				<td style="width: 1%">&nbsp;</td>
				<td width="29%">
				<button onclick="select()" id="btnSearch" name="btnSearch"
					style="width: 15%">��ѯ</button>
				</td>
			</tr>
		</table>
		</form>
		<table border="0" width="100%" align="center">
			<tr style="height: 1px" class="">
				<td class="title_td">ͼ���б�&nbsp;</td>
			</tr>
		</table>
		<div
			style="position: absolute; left: 0px; bottom: 1px; z-index: 1000;"
			id="excel">
		<table style="width: 40%">
			<tr>
				<td style="cursor: hand;">
				<button onclick="showShop()" id="btnSave" name="btnSave"
					style="width: 24%">�鿴���ﳵ</button>
				</td>
			</tr>
		</table>
		</div>
		<div class="list_div" style="height: 87%">
		<table border="0" align="left" cellspacing="0" class="list_table"
			id="senfe" style='width: 99%'>
			<thead>
				<tr>
					<th width="5%"><span style="font-weight: 400">���</span></th>
					<th width="28%"><span style="font-weight: 400">����</span></th>
					<th width="15%"><span style="font-weight: 400">������</span></th>
					<th width="16%"><span style="font-weight: 400">ISBN</span></th>
					<th width="15%"><span style="font-weight: 400">�۸�(��)</span></th>
					<th width=""><span style="font-weight: 400">����</span></th>
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
					%> �����ʵ������ <%
						} else if (book.getPublisherID() == 2) {
					%> �廪��ѧ������ <%
						} else if (book.getPublisherID() == 3) {
					%> ���ӹ�ҵ������ <%
						}
					%>
					</td>
					<td align="center"><%=book.getIsbn()%></td>
					<td align="center"><%=book.getPrice()%></td>
					<td align="center" nowrap="nowrap"><a
						href="book.jsp?isbn=<%=book.getIsbn()%>">�鿴��ϸ</a>&nbsp;
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