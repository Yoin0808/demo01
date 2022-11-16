function doDisplay(obj,spId){
	var sp = document.getElementById(spId);
	if(obj.src.indexOf("plus.gif")>=0){
		obj.src="../images/mminus.gif";
		sp.style.display="block";
	} else {
		obj.src="../images/plus.gif";
		sp.style.display="none";
	}
}
function aa(o){
	var a ='url(./images/tr_over.gif)';
		var t=document.getElementById(o).getElementsByTagName("tr");
	for(var i=0;i<t.length;i++){
		t[i].style.background=a;
		
	}
	
	}
function senfe(o,a,b,c,d){
	var t=document.getElementById(o).getElementsByTagName("tr");
	for(var i=0;i<t.length;i++){
		t[i].style.background=(t[i].sectionRowIndex%2==0)?a:b;
		t[i].onclick=function(){
			for(var i=0;i<t.length;i++){
				t[i].style.background=(t[i].sectionRowIndex%2==0)?a:b;
				t[i].x="0";
			}
			this.x="1"
			this.style.background=d;
		}
		t[i].onmouseover=function(){
			if(this.x!="1"){
				this.style.background=c;
			}
		}
		t[i].onmouseout=function(){
			if(this.x!="1"){
				this.style.background=(this.sectionRowIndex%2==0)?a:b;
			}
		}
	}
}

function showCard(divId){
	var divs = document.getElementsByTagName("DIV");
	var cardTds = document.getElementById("cardTable").children[0].children[0].children;
	//alert(document.getElementById(cardTable).children[0].children[0].children.length)
	var clickTr;
	for(var j=0;j<cardTds.length;j++){
		if(cardTds[j]==null
			||cardTds[j].children[0]==null
			||cardTds[j].children[0].children[0]==null
			||cardTds[j].children[0].children[0].children[0]==null
			||cardTds[j].children[0].children[0].children[0].children[0]==null
			||cardTds[j].children[0].children[0].children[0].children[0].children[0]==null){
			continue;
		}
		if(cardTds[j].children[0].children[0].children[0].id==divId){
			clickTr=cardTds[j].children[0].children[0].children[0];
		}
		cardTds[j].children[0].children[0].children[0].children[0].children[0].src="../images/card_hid_left.gif";
		cardTds[j].children[0].children[0].children[0].children[1].background="../images/card_hid_middle.gif";
		cardTds[j].children[0].children[0].children[0].children[2].children[0].src="../images/card_hid_right.gif";
	}
	var div;
	for(var i = 0;i<divs.length;i++){
		if(divs[i].id.indexOf("card")<0){
			continue;
		}
		if(divs[i].id==divId){
			div=divs[i];
		}
		divs[i].style.display='none';
	}
	div.style.display="block";
	var tds = clickTr.children;
	tds[0].children[0].src="../images/card_show_left.gif";
	tds[1].background="../images/card_show_middle.gif";
	tds[2].children[0].src="../images/card_show_right.gif";
}

/**
*
* 弹出模式窗口
* 宽为屏幕大小的1/2
* 高为屏幕大小的1/2
*
* 参数:url	弹出的地址
*/
function showWin(url){
		// 屏幕的宽度
		var screenwidth = screen.width;
		
		// 屏幕的高度
		var screenheight = screen.height;
		
		// 显示窗口的高度
		var height = screenheight*0.6 + "px";

		// 显示窗口的宽度
		var width = screenwidth*0.6 + "px"; 
		
		// 显示窗口
		window.showModalDialog (url, window, "dialogWidth="+width+";dialogHeight="+height+"; status = 0");
}

/**
*
*关闭当前工作页面
*/
function closeWin(){
		var result = window.confirm("确定要关闭该工作页面吗？");
		if(result){
			window.close();
		}
	}
		// 显示信息的方法
	function showToolTipText(obj){
		// 隐藏信息
		closeToolTipText()
		// 显示信息
		try {
			var msgText = document.getElementById(obj.msgId).innerText;
			document.getElementById("toolTipMessage").value = msgText;
		} catch(e) {
			// 不处理
		}
	}
	// 隐藏信息的方法
	function closeToolTipText(){
		try {
			document.getElementById("toolTipMessage").value = "";
		} catch(e) {
			// 不处理
		}
	}
