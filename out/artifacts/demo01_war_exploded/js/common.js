/*******************************************************************************
 * 函数名称:isNull 功能:校验字符串除去空格后的非空性 输入参数:strIn 验证的字符串 输出参数:返回值 (true为空,false为非空)
 * 创建者:HaierSoft
 ******************************************************************************/
function isNull(strIn) {
	// 验证参数strIn是否为 null
	if (strIn == null) {
		return true;
	}
	// 去除空格
	var str = trim(strIn);
	// 验证字符串是否为空
	if (str == "") {
		// 为空
		return true;
	} else {
		// 非空
		return false;
	}
}

/*******************************************************************************
 * 函数名称:checkLength 功能:校验字符串(strIn)的长度是否小于用户规定长度(strLength) 输入参数:strIn
 * 验证的字符串,strlength 规定长度[必须为数字] 输出参数:返回值 (true为通过,false为不通过) 创建者:HaierSoft
 ******************************************************************************/
function checkLength(strIn, strLength) {
	// 验证长度是否超过规定长度
	if (strIn.length > strLength) {
		// 返回错误
		return false;
	} else {
		// 返回正确
		return true;
	}
}

/*******************************************************************************
 * 函数名称:isNum 功能:验证输入参数 strIn 是否是数字 输入参数:strIn 需验证的字符串 输出参数:返回值
 * (true为通过,false为不通过) 创建者:HaierSoft
 ******************************************************************************/
function isNum(strIn) {
	// 如果为空，返回true
	if (strIn == "") {
		return true;
	}
	// 将参数 strIn 转换为字符串
	strIn += "";
	// 正则表达式(整数)
	var reg = /^-{0,1}[0-9]+$/;
	// 正则表达式(小数)
	var reg2 = /^-{0,1}[0-9]+.[0-9]+$/;
	var result;
	if (strIn.indexOf('.') == -1) {
		// 对传入字符进行匹配操作
		result = strIn.match(reg);
	} else {
		// 对传入字符进行匹配操作
		result = strIn.match(reg2);
	}
	// 验证传入字符串与正则表达式是否匹配
	if (result == null) {
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * 函数名称：isInt 功能：验证输入参数strIn是否正整型 输入参数：strIn 需验证的字符 输出参数：返回值 (true为通过，false为不通过)
 * 创建者：HaierSoft
 ******************************************************************************/
function isInt(strIn) {
	// 如果为空，返回true
	if (strIn == "") {
		return true;
	}
	// 将参数 strIn 转换为字符串
	strIn += "";
	// 正则表达式(整数)
	var reg = /^[0-9]+$/;
	// 对传入字符进行匹配操作
	var result = strIn.match(reg);
	// 验证传入字符串与正则表达式是否匹配
	if (result == null) {
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * 函数名称:checkDate 功能:校验日期的合法性格式为(yyyy/MM/dd) 输入参数:strDate 日期 输出参数:返回值
 * (true为校验成功,false为校验失败) 创建者:HaierSoft
 ******************************************************************************/
function checkDate(strDate) {
	// 设置一个默认的日期验证模板
	var module = "yyyy/MM/dd";
	// 验证结果
	var result = true;
	// 调用checkDateByModule()方法验证日期是否合法
	result = checkDateByModule(strDate, module);
	// 返回结果
	return result;
}

/*******************************************************************************
 * 函数名称:checkDateByModule 功能:根据输入的日期与模板,按照输入的模板校验日期的合法性
 * 分割符不能是关键字[y,Y,m,M,d,D,h,H,m,M,s,S] 输入参数:strDate 校验日期, module 模板格式 输出参数:返回值
 * (true验证成功，false验证失败) 创建者:HaierSoft
 ******************************************************************************/
function checkDateByModule(strDate, module) {
	if (strDate == null || module == null) {
		return false;
	}
	// 设置年的占位标示符
	var YEAR = "y";
	// 设置月的占位标示符
	var MONTH = "M";
	// 设置日的占位标示符
	var DAY = "d";
	// 设置时的占位标示符
	var HOUR = "H";
	// 设置分的占位标示符
	var MIN = "m";
	// 设置秒的占位标示符
	var SEC = "s";
	// 声明返回值
	var result = true;
	// 取出年的格式
	var yearModule = "";
	// 取出月的格式
	var monthModule = "";
	// 取出日的格式
	var dayModule = "";
	// 取出时的格式
	var hourModule = "";
	// 取出分的格式
	var minModule = "";
	// 取出秒的格式
	var secModule = "";
	// 年
	var strYear = "";
	// 月
	var strMon = "";
	// 日
	var strDay = "";
	// 时
	var strHour = "";
	// 分
	var strMin = "";
	// 秒
	var strSec = "";
	// 比较字符变量
	var tempChr = "";
	if (strDate.length != module.length) {
		result = false;
		return result;
	}
	// 遍历模板变量，取出年月日的位数
	for ( var i = 0; i < module.length; i++) {
		tempChr = module.substring(i, i + 1);
		if (YEAR == tempChr) {
			// 取出模板的年
			yearModule += tempChr;
		} else if (MONTH == tempChr) {
			// 取出模板的月
			monthModule += tempChr;
		} else if (DAY == tempChr) {
			// 取出模板的日
			dayModule += tempChr;
		} else if (HOUR == tempChr) {
			// 取出模板的时
			hourModule += tempChr;
		} else if (MIN == tempChr) {
			// 取出模板的分
			minModule += tempChr;
		} else if (SEC == tempChr) {
			// 取出模板的秒
			secModule += tempChr;
		} else {
			if (module.substring(i, i + 1) != strDate.substring(i, i + 1)) {
				result = false;
				return result;
			}
		}
	}
	if ((yearModule.length + monthModule.length + dayModule.length
			+ hourModule.length + minModule.length + secModule.length) > 14) {
		result = false;
		return result;
	}
	// 取出年
	if (yearModule != "") {
		strYear = strDate.substring(module.indexOf(yearModule), module
				.indexOf(yearModule)
				+ yearModule.length);
	}
	// 取出月
	if (monthModule != "") {
		strMon = strDate.substring((module.indexOf(monthModule)), (module
				.indexOf(monthModule))
				+ monthModule.length);
	}
	// 取出日
	if (dayModule != "") {
		strDay = strDate.substring((module.indexOf(dayModule)), (module
				.indexOf(dayModule))
				+ dayModule.length);
	}
	// 取出小时
	if (hourModule != "") {
		strHour = strDate.substring((module.indexOf(hourModule)), module
				.indexOf(hourModule)
				+ hourModule.length);
	}
	// 取出分
	if (minModule != "") {
		strMin = strDate.substring((module.indexOf(minModule)), module
				.indexOf(minModule)
				+ minModule.length);
	}
	// 取出秒
	if (secModule != "") {
		strSec = strDate.substring((module.indexOf(secModule)), module
				.indexOf(secModule)
				+ secModule.length);
	}

	// 校验日期合法性
	var tempDate = strYear + strMon + strDay + strHour + strMin + strSec;
	if (!isInt(tempDate)) {
		result = false;
		return result;
	}
	// 验证年份的合法性
	if (strYear != "") {
		if (strYear.length != yearModule.length) {
			result = false;
			return result;
		}
	}
	// 验证月份的合法性
	if (strMon != "") {
		if (strMon == 0 || strMon > 12 || strMon.length != monthModule.length) {
			result = false;
			return result;
		}
	}
	// 验证日的合法性
	if (strDay != "") {
		if (strDay == 0 || strDay > 31 || strDay.length != dayModule.length) {
			result = false;
			return result;
		}
	}
	// 当小时存在的时候
	if (strHour != "") {
		if (strHour < 0 || strHour > 23 || strHour.length != hourModule.length) {
			result = false;
			return result;
		}
	}
	// 当分存在的时候
	if (strMin != "") {
		if (strMin < 0 || strMin > 59 || strMin.length != minModule.length) {
			result = false;
			return result;
		}
	}
	// 当秒存在的时候
	if (strSec != "") {
		if (strSec < 0 || strSec > 59 || strSec.length != secModule.length) {
			result = false;
			return result;
		}
	}
	// 当年月日都存在的情况下，验证闰年
	if (strYear != "" && strMon != "" && strDay != "") {
		if (strYear % 4 == 0 && strYear % 100 != 0 || strYear % 400 == 0) {
			// 闰年的情况下
			if (strMon == 2) {
				if (strDay > 29) {
					result = false;
					return result;
				}
			}
		} else {
			// 非闰年的情况下
			if (strMon == 2) {
				if (strDay > 28) {
					result = false;
					return result;
				}
			}
		}
	}
	// 当月日都存在的情况下，验证大小月
	if (strMon != "" && strDay != "") {
		if (strMon == 1 || strMon == 3 || strMon == 5 || strMon == 7
				|| strMon == 8 || strMon == 10 || strMon == 12) {
			// 大月的情况下
			if (strDay > 31) {
				result = false;
				return result;
			}
		}
		if (strMon == 4 || strMon == 6 || strMon == 9 || strMon == 11) {
			// 小月的情况下
			if (strDay > 30) {
				result = false;
				return result;
			}
		}
	}
	// 返回验证结果
	return result;
}
/*******************************************************************************
 * 函数名称:checkEmail 功能:校验邮箱地址格式的正确性 输入参数:str 邮箱地址 输出参数:返回值 (true验证成功，false验证失败)
 * 创建者:HaierSoft
 ******************************************************************************/
function checkEmail(strEmail) {

	// 将参数转换为字符串
	strEmail += "";
	// 如果为空，则通过校验
	tempEmail = trim(strEmail);
	if (tempEmail == "") {
		return true;
	}
	// 正则表达式(数字)
	var reg = /^.+@.+[.].+$/;
	// 对传入字符进行匹配操作
	var r = strEmail.match(reg);
	// 验证传入字符串与正则表达式是否匹配
	if (r == null) {
		return false;
	}

	var obj = (tempEmail.split("@"));
	if (obj.length > 2) {
		return false;
	}
	// 开通结尾不能是.
	if (obj[0].substring(0, 1) == '.' || obj[1].substring(0, 1) == '.'
			|| obj[1].substring(obj[1].length - 1, obj[1].length) == '.') {
		return false;
	}
	var checkChar = " 	“’， 	\"',\\/";
	var tempChar;
	// 循环验证匹配字符
	for ( var i = 0; i < checkChar.length; i++) {
		tempChar = checkChar.substring(i, i + 1);
		if (tempEmail.indexOf(tempChar) != -1) {
			return false;
		}
	}
	// 定义长度变量
	var len = 0;
	// 循环得到字符串的字节长度
	for ( var i = 0; i < strEmail.length; i++) {
		// 如果是全角
		if (strEmail.charCodeAt(i) > 255) {
			len += 2;
		} else {
			len++;
		}
	}
	// 判断是否包含全角字符
	if (strEmail.length != len) {
		return false;
	}

	return true;
}
/*******************************************************************************
 * 函数名称:checkEmail 功能:校验邮箱地址格式的正确性 输入参数:str 邮箱地址 输出参数:返回值 (true验证成功，false验证失败)
 * 创建者:HaierSoft
 ******************************************************************************/
function checkServer(checkValue) {
	var arrtemp = checkValue.split("@");
	// 
	var arr = arrtemp[1].split(".")[0];
	//
	var check = [ "126", "163", "haiersoft", "yahoo", "sohu", "email", "sina",
			"tom", "qq" ];
	// 
	var flag = false;
	for ( var i = 0; i < check.length; i++) {
		var ff = check[i].toUpperCase();
		var cc = arr.toUpperCase();
		if (cc == ff) {
			flag = true;
			break;
		}
	}
	return flag;
}
/*******************************************************************************
 * 函数名称:screenblank 功能:屏蔽空格 输入参数:无 输出参数:无 创建者:HaierSoft
 ******************************************************************************/
function screenBlank() {
	if (event.keyCode == 32) {
		event.returnValue = false;
	}

}

/*******************************************************************************
 * 函数名称:checkPhone 功能:校验电话号码的合法性 输入参数:strPhone 用户输入的电话(手机号或固定电话
 * [区号{3或4位}-固定电话号码{7或8位}]) 输出参数:返回值 (true验证成功，false验证失败) 创建者:HaierSoft
 ******************************************************************************/
function checkPhone(strPhone) {
	// 将参数转换为字符串
	strPhone += "";
	// 去除空格
	var checkObj = trim(strPhone);
	if (checkObj == "") {
		return true;
	}
	// 固定电话的正则表达式
	var gPhone = /^[0-9]{8}$/;
	// 移动电话的正则表达式
	var yPhone = /^[0-9]{11}/;
	var result;
	if (checkObj.length == 11) {
		// 当输入的电话为11位时，验证移动电话的合法性
		result = checkObj.match(yPhone);
	} else {
		// 验证固定电话的合法性
		result = checkObj.match(gPhone);
	}
	if (result == null) {
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * 函数名称:isComprise 功能:验证输入字符串 inString 中的每个字符 是否在传入字符串 refString 中存在
 * 输入参数:inString 需要验证的字符串,refString 需要匹配的字符 输出参数:返回值 (true验证成功，false验证失败)
 * 创建者:HaierSoft
 ******************************************************************************/
function isComprise(inString, refString) {
	// 将参数转换为字符串
	inString += "";
	refString += "";
	// delete by mengkun 20060112
	// 验证传入的参数是否为空
	// if(trim(inString) == "") {
	// return false;
	// }
	// end
	var tempChar;
	// 循环验证匹配字符
	for ( var i = 0; i < inString.length; i++) {
		tempChar = inString.substring(i, i + 1);
		if (refString.indexOf(tempChar) == -1) {
			return false;
		}
	}
	return true;
}

/*******************************************************************************
 * 函数名称:selectAllCheckBox 功能:将传入的名为 checkName 的所有 checkBox 控件的 checked 属性改为 true
 * 输入参数:checkName 输出参数: 创建者:HaierSoft
 ******************************************************************************/
function selectAllCheckBox(checkName) {
	// 取得页面上的Name为checkName的对象
	var obj = document.getElementsByName(checkName);
	for ( var i = 0; i < obj.length; i++) {
		if (obj[i].tagName == "INPUT" && obj[i].type == "checkbox") {
			if (obj[i].checked == false) {
				// 当checkBox的check属性为false的情况下
				obj[i].checked = true;
			}
		}
	}
}

/*******************************************************************************
 * 函数名称:clearAllCheckBox 功能:将传入的名为 checkName 的所有 checkBox 控件的 checked 属性改为 false
 * 输入参数:checkName 输出参数: 创建者:HaierSoft
 ******************************************************************************/
function clearAllCheckBox(checkName) {
	// 取得页面上的Name为checkName的对象
	var obj = document.getElementsByName(checkName);
	for ( var i = 0; i < obj.length; i++) {
		if (obj[i].tagName == "INPUT" && obj[i].type == "checkbox") {
			if (obj[i].checked == true) {
				// 当checkBox的check属性为true的情况下
				obj[i].checked = false;
			}
		}
	}
}

/*******************************************************************************
 * 函数名称:unFormat 功能:反格式化数字字符串 输入参数:需要反格式化的数字 输出参数:反格式化后的数字（去掉了千分位和百分号）
 * 创建者:HaierSoft
 ******************************************************************************/
function unFormat(num) {
	// 确保输入的参数被转为字符串
	num = num + "";
	// 要替换的字符 ","
	var re1 = /,/;
	// 要替换的字符 "%"
	var re2 = /%/;
	// 如果传入的字符串中包含 "," 或 "%"
	while (re1.test(num) || re2.test(num)) {
		// 将 "," 替换为 ""
		num = num.replace(re1, "");
		// 将 "%" 替换为 ""
		num = num.replace(re2, "");
	}
	// 返回反格式化后的字符串
	return num;
}

/*******************************************************************************
 * 函数名称:format 功能:格式化数字字符串 输入参数:需要格式化的数字、整数部分的长度、是否左补0(boolean)、小数部分
 * 的长度、是否右补0(boolean)、是否带有%(boolean) 输出参数:格式化后的数字 创建者:HaierSoft
 ******************************************************************************/
function format(num, intLength, lPad, decLength, rPad, isPre) {
	// 确保输入的参数被转为字符串
	num = num + "";
	if (trim(num) == "") {
		return "";
	}
	// 以 "." 为分隔符将传入的字符串分隔开
	var part = num.split(".");
	// 没有小数点的场合
	if (part.length == 1) {
		// 是否需要左补 "0"
		if (lPad == true) {
			// 左补 "0"
			for ( var i = part[0].length; i < intLength; i++) {
				part[0] = "0" + part[0];
			}
		}
		// 加千分位
		//part[0] = addComma(part[0]);
		// 如果需要右补 "0" ，并且小数位数大于 0 时
		if (rPad == true && decLength > 0) {
			// 追加小数点
			part[0] = part[0] + ".";
			// 右补 "0"
			for ( var i = 0; i < decLength; i++) {
				part[0] = part[0] + "0";
			}
		}
		// 是否需要添加 "%"
		if (isPre == true) {
			// 追加 "%"
			part[0] = part[0] + "%";
		}
		// 返回格式化后的数字字符串
		return part[0];
		// 有小数点的场合
	} else {
		// 判断是否需要左补 "0"
		if (lPad == true) {
			// 左补 "0"
			for ( var i = part[0].length; i < intLength; i++) {
				part[0] = "0" + part[0];
			}
		}
		// 将整数部分转为带千分位的格式
		//part[0] = addComma(part[0]);
		// 小数部分按照指定的位数进行截取
		var temp = part[1].substring(decLength, decLength + 1);
		part[1] = part[1].substring(0, decLength);
		if (isInt(temp)) {
			if (temp > 4) {
				part[1] = part[1] * 1 + 1;
			}
		}
		// 是否需要右补 "0"
		if (rPad == true) {
			// 小数部分右补 "0"
			for ( var i = part[1].length; i < decLength; i++) {
				part[1] = part[1] + "0";
			}
		}
		// 将整数部分和小数部分拼在一起
		var allPart;
		if (part[1] == "") {
			allPart = part[0];
		} else {
			allPart = part[0] + "." + part[1];
		}
		// 是否需要追加 "%"
		if (isPre == true) {
			allPart = allPart + "%";
		}
		// 返回格式化后的数字字符串
		return allPart;
	}
}

/*******************************************************************************
 * 函数名称:addComma 功能:将数字转换为带有千分位的格式 输入参数:需要转换的数字字符串 输出参数:转换后的数字 创建者:HaierSoft
 ******************************************************************************/
function addComma(num) {
	// 确保输入的参数被转为字符串
	num = num + "";
	// 定义格式
	var re = /(-?\d+)(\d{3})/
	// 检测输入的字符串格式是否与制定格式相符
	while (re.test(num)) {
		// 不符则替换
		num = num.replace(re, "$1,$2")
	}
	// 返回替换后的字符串
	return num;
}

/*******************************************************************************
 * 函数名称:LTrim 功能:去除传入字符串 strIn 的左面空格 输入参数:strIn 传入的字符串 输出参数:strOut 去除空格后的值
 * 创建者:HaierSoft
 ******************************************************************************/
function LTrim(strIn) {
	var whiteSpace = new String(" ");
	// 对传入参数格式化
	var strOut = new String(strIn);
	// 取出左面的空格
	if (whiteSpace.indexOf(strOut.charAt(0)) != -1) {
		var j = 0;
		var i = strOut.length;
		while (j < i && whiteSpace.indexOf(strOut.charAt(j)) != -1) {
			j++;
		}
		strOut = strOut.substring(j, i);
	}
	// 返回去除空格后的值
	return strOut;
}

/*******************************************************************************
 * 函数名称:RTrim 功能:去除传入字符串strIn的右面空格 输入参数:strIn 传入的字符串 输出参数:strOut 去除空格后的值
 * 创建者:HaierSoft
 ******************************************************************************/
function RTrim(strIn) {
	var whiteSpace = new String(" ");
	// 对传入参数格式化
	var strOut = new String(strIn);
	// 去除右面的空格
	if (whiteSpace.indexOf(strOut.charAt(strOut.length - 1)) != -1) {
		var i = strOut.length - 1;
		while (i >= 0 && whiteSpace.indexOf(strOut.charAt(i)) != -1) {
			i--;
		}
		strOut = strOut.substring(0, i + 1);
	}
	// 返回去除空格后的值
	return strOut;
}

/*******************************************************************************
 * 函数名称:trim 功能:去除传入字符串strIn的两边空格 输入参数:strIn 传入的字符串 输出参数:去除空格后的值 创建者:HaierSoft
 ******************************************************************************/
function trim(strIn) {
	return RTrim(LTrim(strIn));
}

/*******************************************************************************
 * 函数名称:doDisplay 功能:点击右上角的+-号伸缩窗口 输入参数:obj 按钮对象 spId 要伸缩的table对象 输出参数:
 * 创建者:HaierSoft
 ******************************************************************************/
function doDisplay(obj, spId) {
	// 得到所有的ID为spId的对象
	var sp = document.getElementById(spId);
	// 如果路径obj中包含“plus.gif”的情况下
	if (obj.src.indexOf("plus.gif") >= 0) {
		// 将对象obj的图片换为mminus.gif
		obj.src = "./images/mminus.gif";
		// 将table显示在页面上
		sp.style.display = "block";
	} else {
		// 将对象obj的图片换为plus.gif
		obj.src = "./images/plus.gif";
		// 将图片隐藏
		sp.style.display = "none";
	}
}

/*******************************************************************************
 * 函数名称:showCard 功能:根据传入的divId打开相应的卡片及显示相应的表格 输入参数:divId 点击要显示的卡片Id 输出参数:
 * 创建者:HaierSoft
 ******************************************************************************/
function showCard(divId) {
	// 取得页面上所有的名为"DIV"的对象
	var divs = document.getElementsByTagName("DIV");
	// 取得传入card的所有的TD对象
	var cardTds = document.getElementById("cardTable").children[0].children[0].children;
	var clickTr;
	// 循环遍历cardTds
	for ( var j = 0; j < cardTds.length; j++) {
		// 验证card中的元素是否有为空的
		if (cardTds[j] == null
				|| cardTds[j].children[0] == null
				|| cardTds[j].children[0].children[0] == null
				|| cardTds[j].children[0].children[0].children[0] == null
				|| cardTds[j].children[0].children[0].children[0].children[0] == null
				|| cardTds[j].children[0].children[0].children[0].children[0].children[0] == null) {
			continue;
		}
		// 验证卡片的id与传入的卡片id是否相同
		if (cardTds[j].children[0].children[0].children[0].id == divId) {
			// 相同的情况下，将卡片的中的tr对象放入clickTr变量中
			clickTr = cardTds[j].children[0].children[0].children[0];
		}
		// 改变点中卡片按钮的图片为未选中的样式
		cardTds[j].children[0].children[0].children[0].children[0].children[0].src = "./images/card_hid_left.gif";
		cardTds[j].children[0].children[0].children[0].children[1].background = "./images/card_hid_middle.gif";
		cardTds[j].children[0].children[0].children[0].children[2].children[0].src = "./images/card_hid_right.gif";
	}
	// 声明一个var变量,存放要显示的div对象
	var div;
	// 遍历页面上所有的名为div的对象
	for ( var i = 0; i < divs.length; i++) {
		// 验证div对象中是否存在card字符串
		if (divs[i].id.indexOf("card") < 0) {
			// 没有的情况下
			continue;
		}
		// 当div对象的id与传入id一致时
		if (divs[i].id == divId) {
			// 赋值给div变量
			div = divs[i];
		}
		// 将所有的div对象的display属性改为none
		divs[i].style.display = 'none';
	}
	// 显示选中了的div对象
	div.style.display = "block";
	// 得到点击的按钮的卡片td
	var tds = clickTr.children;
	// 改变按钮的图片为选中状态
	tds[0].children[0].src = "./images/card_show_left.gif";
	tds[1].background = "./images/card_show_middle.gif";
	tds[2].children[0].src = "./images/card_show_right.gif";
}

/*******************************************************************************
 * 函数名称:showWin 功能: 弹出模式窗口 宽为屏幕大小的0.6 高为屏幕大小的0.6 输入参数:弹出的地址 输出参数: 创建者:HaierSoft
 ******************************************************************************/
function showWin(url) {
	// 屏幕的宽度
	var screenWidth = screen.width;
	// 屏幕的高度
	var screenHeight = screen.height;
	// 显示窗口的高度
	var height = screenHeight * 0.6 + "px";
	// 显示窗口的宽度
	var width = screenWidth * 0.6 + "px";
	// 显示窗口
	return window.showModalDialog(url, window, "dialogWidth=" + width
			+ ";dialogHeight=" + height
			+ "; status = 0;scroll=no;resizable=yes");
}
/*******************************************************************************
 * 函数名称:showWin 功能: 弹出模式窗口 宽为屏幕大小的0.6 高为屏幕大小的0.6 输入参数:弹出的地址 输出参数: 创建者:HaierSoft
 ******************************************************************************/
function showWinCheck(url, wid, hei) {
	if (wid * 1 > 1) {
		wid = 0.6;
	}
	if (hei * 1 > 1) {
		hei = 0.6;
	}
	var screenWidth = screen.width;
	// 屏幕的高度
	var screenHeight = screen.height;
	// 显示窗口的高度
	var height = screenHeight * hei + "px";
	// 显示窗口的宽度
	var width = screenWidth * wid + "px";
	// 显示窗口
	return window.showModalDialog(url, window, "dialogWidth=" + width
			+ ";dialogHeight=" + height
			+ "; status = 0;scroll=no;resizable=yes");
}
/*******************************************************************************
 * 函数名称:closeWin 功能: 关闭窗口 输入参数: 输出参数: 创建者:HaierSoft
 ******************************************************************************/
function closeWin() {
	// 弹出提示窗口，接收用户输入的结果
	var result = window.confirm("确定要关闭该工作页面吗?");
	// 如果结果为true的情况下
	if (result) {
		// 关闭窗口
		window.close();
	}
}

/*******************************************************************************
 * 函数名称:showAlert 功能: 根据消息 id (msgId) 和消息内容 (msgContent) 获取消息信息并显示在 alert 消息框中
 * 输入参数:msgId 消息 Id msgContent 消息内容 数组类型[无消息内容请传入 null ] 输出参数:返回值 无
 * 创建者:HaierSoft
 ******************************************************************************/
function showAlert(msgId, msgContent) {
	msgBox(msgId, msgContent, 0);
}

/*******************************************************************************
 * 函数名称:showConfirm 功能: 根据消息 id (msgId) 和消息内容 (msgContent) 获取消息信息并显示在 confirm
 * 消息框中 输入参数:msgId 消息 Id msgContent 消息内容 数组类型[无消息内容请传入 null ] 输出参数:返回值 (true
 * 表示用户点击了确定按钮 false 表示用户点击了取消按钮或关闭了对话框) 创建者:HaierSoft
 ******************************************************************************/
function showConfirm(msgId, msgContent) {
	return (msgBox(msgId, msgContent, 1));
}

/*******************************************************************************
 * 函数名称:msgBox 功能: 根据消息 id (msgId),消息内容 (msgContent) 获取消息信息并根据消息框类型 (msgType)
 * 显示不同的消息框 输入参数:msgId 消息 Id msgContent 消息内容 数组类型[无消息内容请传入 null ] msgType
 * 消息框类型(0 表示 alert 类型,1 表示 confirm 类型) 输出参数:返回值 (如果用户选择的消息框类型为 0 返回值为 true
 * 表示用户点击了确定按钮 false 表示用户点击了取消按钮或关闭了对话框) (如果用户选择的消息框类型为 1 返回值为 undefined)
 * 创建者:HaierSoft
 ******************************************************************************/
function msgBox(msgId, msgContent, msgType) {
	// 传给 msgBoxAcion 的消息内容
	var msg = "";
	// 验证是否包含消息内容
	if (msgContent != null) {
		// 循环组成消息内容
		for ( var i = 0; i < msgContent.length; i++) {
			msg += msgContent[i];
			if (i != msgContent.length - 1) {
				msg += "!_!"
			}
		}
	}
	// 模式窗口显示的 url
	var url = "./msgBox.do?method=messageBox&content=" + msg + "&id=" + msgId;
	// 传入模式窗口的对象
	var obj = new Object();
	// 设置显示消息框的类型
	obj.type = msgType;
	// 打开模式窗口
	var result = window.showModalDialog(url, obj);
	// 返回结果
	return result;
}
/*******************************************************************************
 * 功能:校验字符串中不能有汉字、英文字母、数字、下划线、小数点、连接符以外的字符。 输入参数:arg0 验证的字符串 输入参数:arg1
 * true:表示可以包含汉字 false:表示不可以包含汉字 输入参数:arg2 true:表示可以包含英文字母 false:表示不可以包含英文字母
 * 输入参数:arg3 true:表示可以包含数字 false:表示不可以包含数字 输入参数:arg4 true:表示可以包含下划线
 * false:表示不可以包含下划线 输入参数:arg5 true:表示可以包含小数点 false:表示不可以包含小数点 输入参数:arg6
 * true:表示可以包含连接符 false:表示不可以包含连接符 输出参数:返回值 (true为符合条件,false为不符合条件)
 ******************************************************************************/
function validate(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
	var str = arg0;
	// 允许包含汉字
	if (arg1) {
		str = str.replace(/[\u4E00-\u9FA5]/g, '');
	}
	// 允许包含英文字母
	if (arg2) {
		str = str.replace(/[A-Za-z]/g, '');
	}
	// 允许包含数字
	if (arg3) {
		str = str.replace(/[\d]/g, '');
	}
	// 允许包含下划线
	if (arg4) {
		str = str.replace(/[\_]/g, '');
	}
	// 允许包含小数点
	if (arg5) {
		str = str.replace(/[\.]/g, '');
	}
	// 允许包含连接符
	if (arg6) {
		str = str.replace(/[\-]/g, '');
	}
	// 返回值
	if (str == "") {
		return true;
	} else {
		return false;
	}
}
// 显示信息的方法
function showToolTipText(obj) {
	//
	closeToolTipText()
	//
	try {
		var msgText = document.getElementById(obj.msgId).innerText;
		document.getElementById("toolTipMessage").value = msgText;
	} catch (e) {
		//
	}
}
// 隐藏信息的方法
function closeToolTipText() {
	try {
		document.getElementById("toolTipMessage").value = "";
	} catch (e) {
		//
	}
}
/*******************************************************************************
 * 功能:判断复选框有没有被选择。 输入参数:chk 复选框的name 输出参数:返回值 (true为选中,false为没有选中)
 * 用例：isSelectCheckbox("chk")
 ******************************************************************************/
function isSelectCheckbox(chk) {

	// 获得复选框的对象
	var chkbox = document.getElementsByName(chk);
	// 判断复选框是否存在
	if (chkbox == null) {
		return;
	}
	// 声明计数器
	var flag = 0;
	// 判断有没有选择复选框
	for ( var i = 0; i < chkbox.length; i++) {
		if (chkbox[i].checked == true) {
			flag++;
		}
	}
	if (flag == 0) {
		return false;
	} else {
		return true;
	}

}

/*******************************************************************************
 * 功能:校验登陆名是否合法 输入参数:strName 验证的登陆名字符串 输出参数:返回值 (true为合法,false为不合法)
 ******************************************************************************/
function checkLoginName(strName) {
	// 定义中间变量
	var strTemp = trim(strName);
	// 判断登陆名是否为空
	if (strTemp == "") {
		return true;
	}
	// 正则表达式 字母或数字
	var reg = /^[A-Za-z0-9]+$/;
	// 定义返回值
	var result;
	// 比较表达式
	result = strTemp.match(reg);
	// 验证传入字符串与正则表达式是否匹配
	if (result == null) {
		return false;
	} else {
		return true;
	}
}

// 20070620 add by wangjc start
/*******************************************************************************
 * 功能:校验用户名是否合法 输入参数:strName 验证的用户名字符串 输出参数:返回值 (true为合法,false为不合法)
 ******************************************************************************/
function checkChineseName(strName) {
	// 定义中间变量
	var strTemp = trim(strName);
	// 判断登陆名是否为空
	if (strTemp == "") {
		return true;
	}
	// 正则表达式 字母或数字
	var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
	// 定义返回值
	var result;
	// 比较表达式
	result = strTemp.match(reg);
	// 验证传入字符串与正则表达式是否匹配
	if (result == null) {
		return false;
	} else {
		return true;
	}
}
// 20070620 add by wangjc end

/*******************************************************************************
 * 功能:校验登陆名是否合法 输入参数:strName 验证的登陆名字符串 输出参数:返回值 (true为合法,false为不合法)
 ******************************************************************************/
function checkLogin(strName) {
	// 定义中间变量
	var strTemp = trim(strName);
	// 判断登陆名是否为空
	if (strTemp == "") {
		return true;
	}
	// 正则表达式 字母或数字
	var reg = /[^_][a-z0-9A-Z_]+$/;
	// 定义返回值
	var result;
	// 比较表达式
	result = strTemp.match(reg);
	// 验证传入字符串与正则表达式是否匹配
	if (result == null) {
		return false;
	} else {
		return true;
	}
}
/*******************************************************************************
 * 功能:校验登陆名是否合法 输入参数:strName 验证的登陆名字符串 输出参数:返回值 (true为合法,false为不合法)
 ******************************************************************************/
function PhoneCheck(s) {
	var str = s;
	var reg = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/
	return reg.test(str);
}
/*******************************************************************************
 * 功能:校验身份证是否合法 输入参数:num 验证的身份证字符串 输出参数:返回值 (true为合法,false为不合法)
 ******************************************************************************/
function isIdCardNo(num) {
	var error;
	var varArray = new Array();
	var lngProduct = 0;
	var intCheckDigit;
	var intStrLen = num.length;
	var idNumber = num;
	
	if ((intStrLen != 15) && (intStrLen != 18)) {
		error = "输入身份证号码长度不对！";
		alert(error);
		return false;
	}
	
	if (intStrLen == 18) {	
		for (i = 0; i < intStrLen - 1; i++) {
			varArray[i] = idNumber.charAt(i);
			if ((varArray[i] < '0' || varArray[i] > '9')) {
				error = "错误的身份证号码！";
				alert(error);
				return false;
			}
		}
		if (varArray[intStrLen] != 'X' || varArray[intStrLen] != 'x'){
			if(varArray[intStrLen] < '0' || varArray[intStrLen] > '9' ){
				error = "错误的身份证号码！";
				alert(error);
				return false;
			}
		}
	}else{
		for (i = 0; i < intStrLen; i++) {
			varArray[i] = idNumber.charAt(i);
			if ((varArray[i] < '0' || varArray[i] > '9')) {
				error = "错误的身份证号码！";
				alert(error);
				return false;
			}
		}
	}
	return true;
}

function round(num, decPlaces)
{
  var decSep = ".";  
  var buff;          
  var i;            
  
  var descrep;
  var segments;
  var leftSide;
  var rightSide;
  
  num = Number(num);

  if(isNaN(num))
    return("NaN");

  buffer = "" + Math.round(num * Math.pow(10, decPlaces)) / Math.pow(10, decPlaces);

  i = buffer.indexOf(decSep);
  segments = buffer.split(".");

  if(i == 0)
    buffer = "0" + buffer;
  
  if(segments.length == 2)  
    descrep = decPlaces - segments[1].length;
  else
  {
    descrep = decPlaces;
    
    if(descrep > 0)
      buffer += decSep;
  }
  
  for(var j=0; j<descrep; j++)
    buffer += "0";
      
  return(buffer);
}
/*******************************************************************************
 * 功能:表格隔行换色 参数:o 表格名称, a 奇数行背景, b 偶数行背景, c 鼠标经过背景, d 点击后背景
 ******************************************************************************/
function senfe(o){
	var a ='';
	var b ='';
	var c ='url(../images/tr_over.gif)';
	var d ='url(../images/tr_select.gif)';	
	var t=document.getElementById(o).getElementsByTagName("tr");
	for(var i=0;i<t.length;i++){
		t[i].style.backgroundImage=(t[i].sectionRowIndex%2==0)?a:b;
		t[i].onclick=function(){
			for(var i=0;i<t.length;i++){
				t[i].style.backgroundImage=(t[i].sectionRowIndex%2==0)?a:b;
				t[i].x="0";
			}
			this.x="1"
			this.style.backgroundImage=d;
		}
		t[i].onmouseover=function(){
			if(this.x!="1"){
				this.style.backgroundImage=c;
			}
		}
		t[i].onmouseout=function(){
			if(this.x!="1"){
				this.style.backgroundImage=(this.sectionRowIndex%2==0)?a:b;
			}
		}
	}
}