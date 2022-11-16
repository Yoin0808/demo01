<!--
//窗口状态控制begin
var windowStatus;
function setStatus(obj) {
	obj.focus();
	windowStatus = window.status;
	window.status = obj.innerHTML.substring(obj.innerHTML.indexOf(">") + 7);
	//window.status = 'Welcome!';
	return true;
}
function resetStatus() {
	window.status = windowStatus;
	//window.status ='完毕';
	return true;
}
//窗口状态控制end

//disable IE contentMenu
//document.oncontextmenu=new Function("window.status='完毕';return false");

//disable IE Toolbar and cache
//document.onselectstart=new Function ("window.status='完毕';return false");

function closewinandf5Pwin() {	//关闭子窗口刷新父窗口 调用:在 子<body onbeforeunload="closewinandf5Pwin()">
    if(event.clientX>document.body.clientWidth&&event.clientY<0||event.altKey) //检测窗口关闭事件 
       { 
          self.close(); 
          window.opener.location.href=window.opener.location.href;   //不能用window.opener.location.reload(),否则会出提示框 
       } 
}

//选中或反选指定名称(name=String(objectID))的所有check或radio对象
function doSelectAll(objectID) {  
	var e = document.all(objectID);
	if (e!=null) {
		if (isNaN(parseInt(e.length))) {
			e.checked = !e.checked ;
		} else {
			for (var check=!e[0].checked, i = 0; i < parseInt(e.length) ; i++) {
				e[i].checked = check;
			}
		}
	}
}
function doSelectAllLike(objectID) {  //选中或反选指定名称(name=String(objectID))的所有check或radio对象
	var e = document.all;
	if (e!=null) {
		if (isNaN(parseInt(e.length))) {
			if (e.id.substring(0,objectID.length)==objectID) { e.checked = !e.checked ; }
		} else {
			for (var iFirst=0,check, i = 0; i < parseInt(e.length) ; i++) {
				if (e[i].id.length>=objectID.length && e[i].id.substring(0,objectID.length)==objectID) { 
					if (iFirst==0){check = !e[i].checked ;iFirst=1;}
					e[i].checked = check ; 
				}
			}
		}
	}
}
//显示或隐藏对象,隐藏后不保留物理空间
function show(canshu,img_id,imgurl)
{
if (canshu.style.display == 'none')
{
canshu.style.display = 'block';
if (img_id!='')
{
	img_id.src=imgurl+'_1.gif'
}
}else if(canshu.style.display == 'block')
{
canshu.style.display = 'none'
if (img_id!='')
{
	img_id.src=imgurl+'_2.gif'
}
}
}

function reSetSize() {//页面分页信息层大小
	var e = document.all["DataGridPro1_ScrollPage"];
	if (e!=null) {
		e.style.posTop = document.body.clientHeight - 20;
		e.style.width = document.body.clientWidth;
		e.style.height = 20;
		e.style.visibility = 'visible';
	}
}

//交换图片
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
 // tHideAll();
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//隐藏对象
function hiddenObject() {    
	var i,x,a=hiddenObject.arguments;
	for (i=0; i<a.length; i++) {
		if ((x=MM_findObj(a[i]))!=null) {
			x.style.display = 'none';
		}
	}
}
//显示对象（参数：'obja.id','objb.id',''...
function showObject() {      
	var i,x,a=showObject.arguments;
	for (i=0; i<a.length; i++) {
		if ((x=MM_findObj(a[i]))!=null) {
			x.style.display = '';
		}
	}
}
//检测数值
function isNumberString (InString,RefString)
{
	if(InString.length<=0)
		return false;
	for (var Count=0; Count < InString.length; Count++)  
	{
		TempChar= InString.substring (Count, Count+1);
		if (RefString.indexOf (TempChar)==-1)  
		return false;
	}
	return true;
}
function LTrim(str)
{
	var whitespace = new String(" \t\n\r");
	var s = new String(str);
	if (whitespace.indexOf(s.charAt(0)) != -1)
	{
		var j=0, i = s.length;
		while (j < i && whitespace.indexOf(s.charAt(j)) != -1)
        {
            j++;
        }
        s = s.substring(j, i);
    }
    return s;
}

function RTrim(str)
{
    var whitespace = new String(" \t\n\r");
    var s = new String(str);
    if (whitespace.indexOf(s.charAt(s.length-1)) != -1)
    {
        var i = s.length - 1;
        while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1)
        {
            i--;
        }
        s = s.substring(0, i+1);
    }
    return s;
}

function trim(str)
{
    return RTrim(LTrim(str));
}
//返回字符长度
function strlen(str)
{ 
	var len; 
	var i; 
	len = 0; 
	for (i=0;i<str.length;i++) 
	{ 
		if (str.charCodeAt(i)>255) 
			len+=2; 
		else
			len++; 
	} 
	return len; 
}

var getScroll
var arrFix = new Array()
//将需固定的列根据class找出并放入数组中
function conArrFix(){
	var aTh = document.getElementsByTagName("td");
	var i,j
	j=0;
	for (var i = 0; i < aTh.length; i++) {
	  if (aTh[i].className.match(/[\w\s ]*fixTd[\w\s ]*/)) {
	    arrFix[j]=aTh[i];
		j++;
	  }
	}
}

//将固定的td的left改变
function fixLeft(){
	var i;
	var aDiv = document.getElementById("mainDiv").scrollLeft;
	if(arrFix != null && getScroll != aDiv ) {
	  for (i=0;i<arrFix.length;i++){
	    arrFix[i].style.left =aDiv;
	    getScroll = aDiv;
	  }
	}

}
//表头排序用 开始
function SortableTable(oTable, oSortTypes) {

this.element = oTable;
this.tHead = oTable.tHead;
this.tBody = oTable.tBodies[0];
this.document = oTable.ownerDocument || oTable.document;

this.sortColumn = null;
this.descending = null;

var oThis = this;
this._headeronclick = function (e) {
oThis.headeronclick(e);
};


// only IE needs this
var win = this.document.defaultView || this.document.parentWindow;
this._onunload = function () {
oThis.destroy();
};
if (win && typeof win.attachEvent != "undefined") {
win.attachEvent("onunload", this._onunload);
}

this.initHeader(oSortTypes || []);
}

SortableTable.gecko = navigator.product == "Gecko";
SortableTable.msie = /msie/i.test(navigator.userAgent);
// Mozilla is faster when doing the DOM manipulations on
// an orphaned element. MSIE is not
SortableTable.removeBeforeSort = SortableTable.gecko;

SortableTable.prototype.onsort = function () {};

// adds arrow containers and events
// also binds sort type to the header cells so that reordering columns does
// not break the sort types
SortableTable.prototype.initHeader = function (oSortTypes) {
var cells = this.tHead.rows[0].cells;
var l = cells.length;
var img, c;
//
for (var i = 0; i < l; i++) {
c = cells[i];
img = this.document.createElement("IMG");
img.src = "/images/SPACER.GIF";
c.appendChild(img);
if (oSortTypes[i] != null) {
c._sortType = oSortTypes[i];
}
if (typeof c.addEventListener != "undefined")
c.addEventListener("click", this._headeronclick, false);
else if (typeof c.attachEvent != "undefined")
c.attachEvent("onclick", this._headeronclick);
}
this.updateHeaderArrows();
};

// remove arrows and events
SortableTable.prototype.uninitHeader = function () {
var cells = this.tHead.rows[0].cells;
var l = cells.length;
var c;
for (var i = 0; i < l; i++) {
c = cells[i];
c.removeChild(c.lastChild);
if (typeof c.removeEventListener != "undefined")
c.removeEventListener("click", this._headeronclick, false);
else if (typeof c.detachEvent != "undefined")
c.detachEvent("onclick", this._headeronclick);
}
};

SortableTable.prototype.updateHeaderArrows = function () {
var cells = this.tHead.rows[0].cells;
var l = cells.length;
var img;
for (var i = 0; i < l; i++) {
img = cells[i].lastChild;
if (i == this.sortColumn)
img.className = "sort-arrow " + (this.descending ? "descending" : "ascending");
else
img.className = "sort-arrow";
}
};

SortableTable.prototype.headeronclick = function (e) {
// find TD element
var el = e.target || e.srcElement;
while (el.tagName != "TH")
el = el.parentNode;

this.sort(SortableTable.msie ? SortableTable.getCellIndex(el) : el.cellIndex);
};

// IE returns wrong cellIndex when columns are hidden
SortableTable.getCellIndex = function (oTd) {
var cells = oTd.parentNode.childNodes
var l = cells.length;
var i;
for (i = 0; cells[i] != oTd && i < l; i++)
;
return i;
};

SortableTable.prototype.getSortType = function (nColumn) {
var cell = this.tHead.rows[0].cells[nColumn];
var val = cell._sortType;
if (val != "")
return val;
return "String";
};

// only nColumn is required
// if bDescending is left out the old value is taken into account
// if sSortType is left out the sort type is found from the sortTypes array

SortableTable.prototype.sort = function (nColumn, bDescending, sSortType) {
if (sSortType == null)
sSortType = this.getSortType(nColumn);

// exit if None
if (sSortType == "None")
return;

if (bDescending == null) {
if (this.sortColumn != nColumn)
this.descending = true;
else
this.descending = !this.descending;
}

this.sortColumn = nColumn;

if (typeof this.onbeforesort == "function")
this.onbeforesort();

var f = this.getSortFunction(sSortType, nColumn);
var a = this.getCache(sSortType, nColumn);
var tBody = this.tBody;

a.sort(f);

if (this.descending)
a.reverse();

if (SortableTable.removeBeforeSort) {
// remove from doc
var nextSibling = tBody.nextSibling;
var p = tBody.parentNode;
p.removeChild(tBody);
}

// insert in the new order
var l = a.length;
for (var i = 0; i < l; i++)
tBody.appendChild(a[i].element);

if (SortableTable.removeBeforeSort) {
// insert into doc
p.insertBefore(tBody, nextSibling);
}

this.updateHeaderArrows();

this.destroyCache(a);

if (typeof this.onsort == "function")
this.onsort();
};

SortableTable.prototype.asyncSort = function (nColumn, bDescending, sSortType) {
var oThis = this;
this._asyncsort = function () {
oThis.sort(nColumn, bDescending, sSortType);
};
window.setTimeout(this._asyncsort, 1);
};

SortableTable.prototype.getCache = function (sType, nColumn) {
var rows = this.tBody.rows;
var l = rows.length;
var a = new Array(l);
var r;
for (var i = 0; i < l; i++) {
r = rows[i];
a[i] = {
value: this.getRowvalue(r, sType, nColumn),
element: r
};
};
return a;
};

SortableTable.prototype.destroyCache = function (oArray) {
var l = oArray.length;
for (var i = 0; i < l; i++) {
oArray[i].value = null;
oArray[i].element = null;
oArray[i] = null;
}
}

SortableTable.prototype.getRowvalue = function (oRow, sType, nColumn) {
var s;
var c = oRow.cells[nColumn];
if (typeof c.innerText != "undefined")
s = c.innerText;
else
s = SortableTable.getInnerText(c);
return this.getvalueFromString(s, sType);
};

SortableTable.getInnerText = function (oNode) {
var s = "";
var cs = oNode.childNodes;
var l = cs.length;
for (var i = 0; i < l; i++) {
switch (cs[i].nodeType) {
case 1: //ELEMENT_NODE
s += SortableTable.getInnerText(cs[i]);
break;
case 3: //TEXT_NODE
s += cs[i].nodevalue;
break;
}
}
return s;
}

SortableTable.prototype.getvalueFromString = function (sText, sType) {
switch (sType) {
case "Number":
return Number(sText);
case "CaseInsensitiveString":
return sText.toUpperCase();
case "Date":
var parts = sText.split("-");
var d = new Date(0);
d.setFullYear(parts[0]);
d.setDate(parts[2]);
d.setMonth(parts[1] - 1);
return d.valueOf();
}
return sText;
};

SortableTable.prototype.getSortFunction = function (sType, nColumn) {
return function compare(n1, n2) {
if (n1.value < n2.value)
return -1;
if (n2.value < n1.value)
return 1;
return 0;
};
};

SortableTable.prototype.destroy = function () {
this.uninitHeader();
var win = this.document.parentWindow;
if (win && typeof win.detachEvent != "undefined") { // only IE needs this
win.detachEvent("onunload", this._onunload);
}
this._onunload = null;
this.element = null;
this.tHead = null;
this.tBody = null;
this.document = null;
this._headeronclick = null;
this.sortTypes = null;
this._asyncsort = null;
this.onsort = null;
};
//表头排序用 结束
-->