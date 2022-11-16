/*******************************************************************************
 * ��������:isNull ����:У���ַ�����ȥ�ո��ķǿ��� �������:strIn ��֤���ַ��� �������:����ֵ (trueΪ��,falseΪ�ǿ�)
 * ������:HaierSoft
 ******************************************************************************/
function isNull(strIn) {
	// ��֤����strIn�Ƿ�Ϊ null
	if (strIn == null) {
		return true;
	}
	// ȥ���ո�
	var str = trim(strIn);
	// ��֤�ַ����Ƿ�Ϊ��
	if (str == "") {
		// Ϊ��
		return true;
	} else {
		// �ǿ�
		return false;
	}
}

/*******************************************************************************
 * ��������:checkLength ����:У���ַ���(strIn)�ĳ����Ƿ�С���û��涨����(strLength) �������:strIn
 * ��֤���ַ���,strlength �涨����[����Ϊ����] �������:����ֵ (trueΪͨ��,falseΪ��ͨ��) ������:HaierSoft
 ******************************************************************************/
function checkLength(strIn, strLength) {
	// ��֤�����Ƿ񳬹��涨����
	if (strIn.length > strLength) {
		// ���ش���
		return false;
	} else {
		// ������ȷ
		return true;
	}
}

/*******************************************************************************
 * ��������:isNum ����:��֤������� strIn �Ƿ������� �������:strIn ����֤���ַ��� �������:����ֵ
 * (trueΪͨ��,falseΪ��ͨ��) ������:HaierSoft
 ******************************************************************************/
function isNum(strIn) {
	// ���Ϊ�գ�����true
	if (strIn == "") {
		return true;
	}
	// ������ strIn ת��Ϊ�ַ���
	strIn += "";
	// ������ʽ(����)
	var reg = /^-{0,1}[0-9]+$/;
	// ������ʽ(С��)
	var reg2 = /^-{0,1}[0-9]+.[0-9]+$/;
	var result;
	if (strIn.indexOf('.') == -1) {
		// �Դ����ַ�����ƥ�����
		result = strIn.match(reg);
	} else {
		// �Դ����ַ�����ƥ�����
		result = strIn.match(reg2);
	}
	// ��֤�����ַ�����������ʽ�Ƿ�ƥ��
	if (result == null) {
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * �������ƣ�isInt ���ܣ���֤�������strIn�Ƿ������� ���������strIn ����֤���ַ� �������������ֵ (trueΪͨ����falseΪ��ͨ��)
 * �����ߣ�HaierSoft
 ******************************************************************************/
function isInt(strIn) {
	// ���Ϊ�գ�����true
	if (strIn == "") {
		return true;
	}
	// ������ strIn ת��Ϊ�ַ���
	strIn += "";
	// ������ʽ(����)
	var reg = /^[0-9]+$/;
	// �Դ����ַ�����ƥ�����
	var result = strIn.match(reg);
	// ��֤�����ַ�����������ʽ�Ƿ�ƥ��
	if (result == null) {
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * ��������:checkDate ����:У�����ڵĺϷ��Ը�ʽΪ(yyyy/MM/dd) �������:strDate ���� �������:����ֵ
 * (trueΪУ��ɹ�,falseΪУ��ʧ��) ������:HaierSoft
 ******************************************************************************/
function checkDate(strDate) {
	// ����һ��Ĭ�ϵ�������֤ģ��
	var module = "yyyy/MM/dd";
	// ��֤���
	var result = true;
	// ����checkDateByModule()������֤�����Ƿ�Ϸ�
	result = checkDateByModule(strDate, module);
	// ���ؽ��
	return result;
}

/*******************************************************************************
 * ��������:checkDateByModule ����:���������������ģ��,���������ģ��У�����ڵĺϷ���
 * �ָ�������ǹؼ���[y,Y,m,M,d,D,h,H,m,M,s,S] �������:strDate У������, module ģ���ʽ �������:����ֵ
 * (true��֤�ɹ���false��֤ʧ��) ������:HaierSoft
 ******************************************************************************/
function checkDateByModule(strDate, module) {
	if (strDate == null || module == null) {
		return false;
	}
	// �������ռλ��ʾ��
	var YEAR = "y";
	// �����µ�ռλ��ʾ��
	var MONTH = "M";
	// �����յ�ռλ��ʾ��
	var DAY = "d";
	// ����ʱ��ռλ��ʾ��
	var HOUR = "H";
	// ���÷ֵ�ռλ��ʾ��
	var MIN = "m";
	// �������ռλ��ʾ��
	var SEC = "s";
	// ��������ֵ
	var result = true;
	// ȡ����ĸ�ʽ
	var yearModule = "";
	// ȡ���µĸ�ʽ
	var monthModule = "";
	// ȡ���յĸ�ʽ
	var dayModule = "";
	// ȡ��ʱ�ĸ�ʽ
	var hourModule = "";
	// ȡ���ֵĸ�ʽ
	var minModule = "";
	// ȡ����ĸ�ʽ
	var secModule = "";
	// ��
	var strYear = "";
	// ��
	var strMon = "";
	// ��
	var strDay = "";
	// ʱ
	var strHour = "";
	// ��
	var strMin = "";
	// ��
	var strSec = "";
	// �Ƚ��ַ�����
	var tempChr = "";
	if (strDate.length != module.length) {
		result = false;
		return result;
	}
	// ����ģ�������ȡ�������յ�λ��
	for ( var i = 0; i < module.length; i++) {
		tempChr = module.substring(i, i + 1);
		if (YEAR == tempChr) {
			// ȡ��ģ�����
			yearModule += tempChr;
		} else if (MONTH == tempChr) {
			// ȡ��ģ�����
			monthModule += tempChr;
		} else if (DAY == tempChr) {
			// ȡ��ģ�����
			dayModule += tempChr;
		} else if (HOUR == tempChr) {
			// ȡ��ģ���ʱ
			hourModule += tempChr;
		} else if (MIN == tempChr) {
			// ȡ��ģ��ķ�
			minModule += tempChr;
		} else if (SEC == tempChr) {
			// ȡ��ģ�����
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
	// ȡ����
	if (yearModule != "") {
		strYear = strDate.substring(module.indexOf(yearModule), module
				.indexOf(yearModule)
				+ yearModule.length);
	}
	// ȡ����
	if (monthModule != "") {
		strMon = strDate.substring((module.indexOf(monthModule)), (module
				.indexOf(monthModule))
				+ monthModule.length);
	}
	// ȡ����
	if (dayModule != "") {
		strDay = strDate.substring((module.indexOf(dayModule)), (module
				.indexOf(dayModule))
				+ dayModule.length);
	}
	// ȡ��Сʱ
	if (hourModule != "") {
		strHour = strDate.substring((module.indexOf(hourModule)), module
				.indexOf(hourModule)
				+ hourModule.length);
	}
	// ȡ����
	if (minModule != "") {
		strMin = strDate.substring((module.indexOf(minModule)), module
				.indexOf(minModule)
				+ minModule.length);
	}
	// ȡ����
	if (secModule != "") {
		strSec = strDate.substring((module.indexOf(secModule)), module
				.indexOf(secModule)
				+ secModule.length);
	}

	// У�����ںϷ���
	var tempDate = strYear + strMon + strDay + strHour + strMin + strSec;
	if (!isInt(tempDate)) {
		result = false;
		return result;
	}
	// ��֤��ݵĺϷ���
	if (strYear != "") {
		if (strYear.length != yearModule.length) {
			result = false;
			return result;
		}
	}
	// ��֤�·ݵĺϷ���
	if (strMon != "") {
		if (strMon == 0 || strMon > 12 || strMon.length != monthModule.length) {
			result = false;
			return result;
		}
	}
	// ��֤�յĺϷ���
	if (strDay != "") {
		if (strDay == 0 || strDay > 31 || strDay.length != dayModule.length) {
			result = false;
			return result;
		}
	}
	// ��Сʱ���ڵ�ʱ��
	if (strHour != "") {
		if (strHour < 0 || strHour > 23 || strHour.length != hourModule.length) {
			result = false;
			return result;
		}
	}
	// ���ִ��ڵ�ʱ��
	if (strMin != "") {
		if (strMin < 0 || strMin > 59 || strMin.length != minModule.length) {
			result = false;
			return result;
		}
	}
	// ������ڵ�ʱ��
	if (strSec != "") {
		if (strSec < 0 || strSec > 59 || strSec.length != secModule.length) {
			result = false;
			return result;
		}
	}
	// �������ն����ڵ�����£���֤����
	if (strYear != "" && strMon != "" && strDay != "") {
		if (strYear % 4 == 0 && strYear % 100 != 0 || strYear % 400 == 0) {
			// ����������
			if (strMon == 2) {
				if (strDay > 29) {
					result = false;
					return result;
				}
			}
		} else {
			// ������������
			if (strMon == 2) {
				if (strDay > 28) {
					result = false;
					return result;
				}
			}
		}
	}
	// �����ն����ڵ�����£���֤��С��
	if (strMon != "" && strDay != "") {
		if (strMon == 1 || strMon == 3 || strMon == 5 || strMon == 7
				|| strMon == 8 || strMon == 10 || strMon == 12) {
			// ���µ������
			if (strDay > 31) {
				result = false;
				return result;
			}
		}
		if (strMon == 4 || strMon == 6 || strMon == 9 || strMon == 11) {
			// С�µ������
			if (strDay > 30) {
				result = false;
				return result;
			}
		}
	}
	// ������֤���
	return result;
}
/*******************************************************************************
 * ��������:checkEmail ����:У�������ַ��ʽ����ȷ�� �������:str �����ַ �������:����ֵ (true��֤�ɹ���false��֤ʧ��)
 * ������:HaierSoft
 ******************************************************************************/
function checkEmail(strEmail) {

	// ������ת��Ϊ�ַ���
	strEmail += "";
	// ���Ϊ�գ���ͨ��У��
	tempEmail = trim(strEmail);
	if (tempEmail == "") {
		return true;
	}
	// ������ʽ(����)
	var reg = /^.+@.+[.].+$/;
	// �Դ����ַ�����ƥ�����
	var r = strEmail.match(reg);
	// ��֤�����ַ�����������ʽ�Ƿ�ƥ��
	if (r == null) {
		return false;
	}

	var obj = (tempEmail.split("@"));
	if (obj.length > 2) {
		return false;
	}
	// ��ͨ��β������.
	if (obj[0].substring(0, 1) == '.' || obj[1].substring(0, 1) == '.'
			|| obj[1].substring(obj[1].length - 1, obj[1].length) == '.') {
		return false;
	}
	var checkChar = " 	������ 	\"',\\/";
	var tempChar;
	// ѭ����֤ƥ���ַ�
	for ( var i = 0; i < checkChar.length; i++) {
		tempChar = checkChar.substring(i, i + 1);
		if (tempEmail.indexOf(tempChar) != -1) {
			return false;
		}
	}
	// ���峤�ȱ���
	var len = 0;
	// ѭ���õ��ַ������ֽڳ���
	for ( var i = 0; i < strEmail.length; i++) {
		// �����ȫ��
		if (strEmail.charCodeAt(i) > 255) {
			len += 2;
		} else {
			len++;
		}
	}
	// �ж��Ƿ����ȫ���ַ�
	if (strEmail.length != len) {
		return false;
	}

	return true;
}
/*******************************************************************************
 * ��������:checkEmail ����:У�������ַ��ʽ����ȷ�� �������:str �����ַ �������:����ֵ (true��֤�ɹ���false��֤ʧ��)
 * ������:HaierSoft
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
 * ��������:screenblank ����:���οո� �������:�� �������:�� ������:HaierSoft
 ******************************************************************************/
function screenBlank() {
	if (event.keyCode == 32) {
		event.returnValue = false;
	}

}

/*******************************************************************************
 * ��������:checkPhone ����:У��绰����ĺϷ��� �������:strPhone �û�����ĵ绰(�ֻ��Ż�̶��绰
 * [����{3��4λ}-�̶��绰����{7��8λ}]) �������:����ֵ (true��֤�ɹ���false��֤ʧ��) ������:HaierSoft
 ******************************************************************************/
function checkPhone(strPhone) {
	// ������ת��Ϊ�ַ���
	strPhone += "";
	// ȥ���ո�
	var checkObj = trim(strPhone);
	if (checkObj == "") {
		return true;
	}
	// �̶��绰��������ʽ
	var gPhone = /^[0-9]{8}$/;
	// �ƶ��绰��������ʽ
	var yPhone = /^[0-9]{11}/;
	var result;
	if (checkObj.length == 11) {
		// ������ĵ绰Ϊ11λʱ����֤�ƶ��绰�ĺϷ���
		result = checkObj.match(yPhone);
	} else {
		// ��֤�̶��绰�ĺϷ���
		result = checkObj.match(gPhone);
	}
	if (result == null) {
		return false;
	} else {
		return true;
	}
}

/*******************************************************************************
 * ��������:isComprise ����:��֤�����ַ��� inString �е�ÿ���ַ� �Ƿ��ڴ����ַ��� refString �д���
 * �������:inString ��Ҫ��֤���ַ���,refString ��Ҫƥ����ַ� �������:����ֵ (true��֤�ɹ���false��֤ʧ��)
 * ������:HaierSoft
 ******************************************************************************/
function isComprise(inString, refString) {
	// ������ת��Ϊ�ַ���
	inString += "";
	refString += "";
	// delete by mengkun 20060112
	// ��֤����Ĳ����Ƿ�Ϊ��
	// if(trim(inString) == "") {
	// return false;
	// }
	// end
	var tempChar;
	// ѭ����֤ƥ���ַ�
	for ( var i = 0; i < inString.length; i++) {
		tempChar = inString.substring(i, i + 1);
		if (refString.indexOf(tempChar) == -1) {
			return false;
		}
	}
	return true;
}

/*******************************************************************************
 * ��������:selectAllCheckBox ����:���������Ϊ checkName ������ checkBox �ؼ��� checked ���Ը�Ϊ true
 * �������:checkName �������: ������:HaierSoft
 ******************************************************************************/
function selectAllCheckBox(checkName) {
	// ȡ��ҳ���ϵ�NameΪcheckName�Ķ���
	var obj = document.getElementsByName(checkName);
	for ( var i = 0; i < obj.length; i++) {
		if (obj[i].tagName == "INPUT" && obj[i].type == "checkbox") {
			if (obj[i].checked == false) {
				// ��checkBox��check����Ϊfalse�������
				obj[i].checked = true;
			}
		}
	}
}

/*******************************************************************************
 * ��������:clearAllCheckBox ����:���������Ϊ checkName ������ checkBox �ؼ��� checked ���Ը�Ϊ false
 * �������:checkName �������: ������:HaierSoft
 ******************************************************************************/
function clearAllCheckBox(checkName) {
	// ȡ��ҳ���ϵ�NameΪcheckName�Ķ���
	var obj = document.getElementsByName(checkName);
	for ( var i = 0; i < obj.length; i++) {
		if (obj[i].tagName == "INPUT" && obj[i].type == "checkbox") {
			if (obj[i].checked == true) {
				// ��checkBox��check����Ϊtrue�������
				obj[i].checked = false;
			}
		}
	}
}

/*******************************************************************************
 * ��������:unFormat ����:����ʽ�������ַ��� �������:��Ҫ����ʽ�������� �������:����ʽ��������֣�ȥ����ǧ��λ�Ͱٷֺţ�
 * ������:HaierSoft
 ******************************************************************************/
function unFormat(num) {
	// ȷ������Ĳ�����תΪ�ַ���
	num = num + "";
	// Ҫ�滻���ַ� ","
	var re1 = /,/;
	// Ҫ�滻���ַ� "%"
	var re2 = /%/;
	// ���������ַ����а��� "," �� "%"
	while (re1.test(num) || re2.test(num)) {
		// �� "," �滻Ϊ ""
		num = num.replace(re1, "");
		// �� "%" �滻Ϊ ""
		num = num.replace(re2, "");
	}
	// ���ط���ʽ������ַ���
	return num;
}

/*******************************************************************************
 * ��������:format ����:��ʽ�������ַ��� �������:��Ҫ��ʽ�������֡��������ֵĳ��ȡ��Ƿ���0(boolean)��С������
 * �ĳ��ȡ��Ƿ��Ҳ�0(boolean)���Ƿ����%(boolean) �������:��ʽ��������� ������:HaierSoft
 ******************************************************************************/
function format(num, intLength, lPad, decLength, rPad, isPre) {
	// ȷ������Ĳ�����תΪ�ַ���
	num = num + "";
	if (trim(num) == "") {
		return "";
	}
	// �� "." Ϊ�ָ�����������ַ����ָ���
	var part = num.split(".");
	// û��С����ĳ���
	if (part.length == 1) {
		// �Ƿ���Ҫ�� "0"
		if (lPad == true) {
			// �� "0"
			for ( var i = part[0].length; i < intLength; i++) {
				part[0] = "0" + part[0];
			}
		}
		// ��ǧ��λ
		//part[0] = addComma(part[0]);
		// �����Ҫ�Ҳ� "0" ������С��λ������ 0 ʱ
		if (rPad == true && decLength > 0) {
			// ׷��С����
			part[0] = part[0] + ".";
			// �Ҳ� "0"
			for ( var i = 0; i < decLength; i++) {
				part[0] = part[0] + "0";
			}
		}
		// �Ƿ���Ҫ��� "%"
		if (isPre == true) {
			// ׷�� "%"
			part[0] = part[0] + "%";
		}
		// ���ظ�ʽ����������ַ���
		return part[0];
		// ��С����ĳ���
	} else {
		// �ж��Ƿ���Ҫ�� "0"
		if (lPad == true) {
			// �� "0"
			for ( var i = part[0].length; i < intLength; i++) {
				part[0] = "0" + part[0];
			}
		}
		// ����������תΪ��ǧ��λ�ĸ�ʽ
		//part[0] = addComma(part[0]);
		// С�����ְ���ָ����λ�����н�ȡ
		var temp = part[1].substring(decLength, decLength + 1);
		part[1] = part[1].substring(0, decLength);
		if (isInt(temp)) {
			if (temp > 4) {
				part[1] = part[1] * 1 + 1;
			}
		}
		// �Ƿ���Ҫ�Ҳ� "0"
		if (rPad == true) {
			// С�������Ҳ� "0"
			for ( var i = part[1].length; i < decLength; i++) {
				part[1] = part[1] + "0";
			}
		}
		// ���������ֺ�С������ƴ��һ��
		var allPart;
		if (part[1] == "") {
			allPart = part[0];
		} else {
			allPart = part[0] + "." + part[1];
		}
		// �Ƿ���Ҫ׷�� "%"
		if (isPre == true) {
			allPart = allPart + "%";
		}
		// ���ظ�ʽ����������ַ���
		return allPart;
	}
}

/*******************************************************************************
 * ��������:addComma ����:������ת��Ϊ����ǧ��λ�ĸ�ʽ �������:��Ҫת���������ַ��� �������:ת��������� ������:HaierSoft
 ******************************************************************************/
function addComma(num) {
	// ȷ������Ĳ�����תΪ�ַ���
	num = num + "";
	// �����ʽ
	var re = /(-?\d+)(\d{3})/
	// ���������ַ�����ʽ�Ƿ����ƶ���ʽ���
	while (re.test(num)) {
		// �������滻
		num = num.replace(re, "$1,$2")
	}
	// �����滻����ַ���
	return num;
}

/*******************************************************************************
 * ��������:LTrim ����:ȥ�������ַ��� strIn ������ո� �������:strIn ������ַ��� �������:strOut ȥ���ո���ֵ
 * ������:HaierSoft
 ******************************************************************************/
function LTrim(strIn) {
	var whiteSpace = new String(" ");
	// �Դ��������ʽ��
	var strOut = new String(strIn);
	// ȡ������Ŀո�
	if (whiteSpace.indexOf(strOut.charAt(0)) != -1) {
		var j = 0;
		var i = strOut.length;
		while (j < i && whiteSpace.indexOf(strOut.charAt(j)) != -1) {
			j++;
		}
		strOut = strOut.substring(j, i);
	}
	// ����ȥ���ո���ֵ
	return strOut;
}

/*******************************************************************************
 * ��������:RTrim ����:ȥ�������ַ���strIn������ո� �������:strIn ������ַ��� �������:strOut ȥ���ո���ֵ
 * ������:HaierSoft
 ******************************************************************************/
function RTrim(strIn) {
	var whiteSpace = new String(" ");
	// �Դ��������ʽ��
	var strOut = new String(strIn);
	// ȥ������Ŀո�
	if (whiteSpace.indexOf(strOut.charAt(strOut.length - 1)) != -1) {
		var i = strOut.length - 1;
		while (i >= 0 && whiteSpace.indexOf(strOut.charAt(i)) != -1) {
			i--;
		}
		strOut = strOut.substring(0, i + 1);
	}
	// ����ȥ���ո���ֵ
	return strOut;
}

/*******************************************************************************
 * ��������:trim ����:ȥ�������ַ���strIn�����߿ո� �������:strIn ������ַ��� �������:ȥ���ո���ֵ ������:HaierSoft
 ******************************************************************************/
function trim(strIn) {
	return RTrim(LTrim(strIn));
}

/*******************************************************************************
 * ��������:doDisplay ����:������Ͻǵ�+-���������� �������:obj ��ť���� spId Ҫ������table���� �������:
 * ������:HaierSoft
 ******************************************************************************/
function doDisplay(obj, spId) {
	// �õ����е�IDΪspId�Ķ���
	var sp = document.getElementById(spId);
	// ���·��obj�а�����plus.gif���������
	if (obj.src.indexOf("plus.gif") >= 0) {
		// ������obj��ͼƬ��Ϊmminus.gif
		obj.src = "./images/mminus.gif";
		// ��table��ʾ��ҳ����
		sp.style.display = "block";
	} else {
		// ������obj��ͼƬ��Ϊplus.gif
		obj.src = "./images/plus.gif";
		// ��ͼƬ����
		sp.style.display = "none";
	}
}

/*******************************************************************************
 * ��������:showCard ����:���ݴ����divId����Ӧ�Ŀ�Ƭ����ʾ��Ӧ�ı�� �������:divId ���Ҫ��ʾ�Ŀ�ƬId �������:
 * ������:HaierSoft
 ******************************************************************************/
function showCard(divId) {
	// ȡ��ҳ�������е���Ϊ"DIV"�Ķ���
	var divs = document.getElementsByTagName("DIV");
	// ȡ�ô���card�����е�TD����
	var cardTds = document.getElementById("cardTable").children[0].children[0].children;
	var clickTr;
	// ѭ������cardTds
	for ( var j = 0; j < cardTds.length; j++) {
		// ��֤card�е�Ԫ���Ƿ���Ϊ�յ�
		if (cardTds[j] == null
				|| cardTds[j].children[0] == null
				|| cardTds[j].children[0].children[0] == null
				|| cardTds[j].children[0].children[0].children[0] == null
				|| cardTds[j].children[0].children[0].children[0].children[0] == null
				|| cardTds[j].children[0].children[0].children[0].children[0].children[0] == null) {
			continue;
		}
		// ��֤��Ƭ��id�봫��Ŀ�Ƭid�Ƿ���ͬ
		if (cardTds[j].children[0].children[0].children[0].id == divId) {
			// ��ͬ������£�����Ƭ���е�tr�������clickTr������
			clickTr = cardTds[j].children[0].children[0].children[0];
		}
		// �ı���п�Ƭ��ť��ͼƬΪδѡ�е���ʽ
		cardTds[j].children[0].children[0].children[0].children[0].children[0].src = "./images/card_hid_left.gif";
		cardTds[j].children[0].children[0].children[0].children[1].background = "./images/card_hid_middle.gif";
		cardTds[j].children[0].children[0].children[0].children[2].children[0].src = "./images/card_hid_right.gif";
	}
	// ����һ��var����,���Ҫ��ʾ��div����
	var div;
	// ����ҳ�������е���Ϊdiv�Ķ���
	for ( var i = 0; i < divs.length; i++) {
		// ��֤div�������Ƿ����card�ַ���
		if (divs[i].id.indexOf("card") < 0) {
			// û�е������
			continue;
		}
		// ��div�����id�봫��idһ��ʱ
		if (divs[i].id == divId) {
			// ��ֵ��div����
			div = divs[i];
		}
		// �����е�div�����display���Ը�Ϊnone
		divs[i].style.display = 'none';
	}
	// ��ʾѡ���˵�div����
	div.style.display = "block";
	// �õ�����İ�ť�Ŀ�Ƭtd
	var tds = clickTr.children;
	// �ı䰴ť��ͼƬΪѡ��״̬
	tds[0].children[0].src = "./images/card_show_left.gif";
	tds[1].background = "./images/card_show_middle.gif";
	tds[2].children[0].src = "./images/card_show_right.gif";
}

/*******************************************************************************
 * ��������:showWin ����: ����ģʽ���� ��Ϊ��Ļ��С��0.6 ��Ϊ��Ļ��С��0.6 �������:�����ĵ�ַ �������: ������:HaierSoft
 ******************************************************************************/
function showWin(url) {
	// ��Ļ�Ŀ��
	var screenWidth = screen.width;
	// ��Ļ�ĸ߶�
	var screenHeight = screen.height;
	// ��ʾ���ڵĸ߶�
	var height = screenHeight * 0.6 + "px";
	// ��ʾ���ڵĿ��
	var width = screenWidth * 0.6 + "px";
	// ��ʾ����
	return window.showModalDialog(url, window, "dialogWidth=" + width
			+ ";dialogHeight=" + height
			+ "; status = 0;scroll=no;resizable=yes");
}
/*******************************************************************************
 * ��������:showWin ����: ����ģʽ���� ��Ϊ��Ļ��С��0.6 ��Ϊ��Ļ��С��0.6 �������:�����ĵ�ַ �������: ������:HaierSoft
 ******************************************************************************/
function showWinCheck(url, wid, hei) {
	if (wid * 1 > 1) {
		wid = 0.6;
	}
	if (hei * 1 > 1) {
		hei = 0.6;
	}
	var screenWidth = screen.width;
	// ��Ļ�ĸ߶�
	var screenHeight = screen.height;
	// ��ʾ���ڵĸ߶�
	var height = screenHeight * hei + "px";
	// ��ʾ���ڵĿ��
	var width = screenWidth * wid + "px";
	// ��ʾ����
	return window.showModalDialog(url, window, "dialogWidth=" + width
			+ ";dialogHeight=" + height
			+ "; status = 0;scroll=no;resizable=yes");
}
/*******************************************************************************
 * ��������:closeWin ����: �رմ��� �������: �������: ������:HaierSoft
 ******************************************************************************/
function closeWin() {
	// ������ʾ���ڣ������û�����Ľ��
	var result = window.confirm("ȷ��Ҫ�رոù���ҳ����?");
	// ������Ϊtrue�������
	if (result) {
		// �رմ���
		window.close();
	}
}

/*******************************************************************************
 * ��������:showAlert ����: ������Ϣ id (msgId) ����Ϣ���� (msgContent) ��ȡ��Ϣ��Ϣ����ʾ�� alert ��Ϣ����
 * �������:msgId ��Ϣ Id msgContent ��Ϣ���� ��������[����Ϣ�����봫�� null ] �������:����ֵ ��
 * ������:HaierSoft
 ******************************************************************************/
function showAlert(msgId, msgContent) {
	msgBox(msgId, msgContent, 0);
}

/*******************************************************************************
 * ��������:showConfirm ����: ������Ϣ id (msgId) ����Ϣ���� (msgContent) ��ȡ��Ϣ��Ϣ����ʾ�� confirm
 * ��Ϣ���� �������:msgId ��Ϣ Id msgContent ��Ϣ���� ��������[����Ϣ�����봫�� null ] �������:����ֵ (true
 * ��ʾ�û������ȷ����ť false ��ʾ�û������ȡ����ť��ر��˶Ի���) ������:HaierSoft
 ******************************************************************************/
function showConfirm(msgId, msgContent) {
	return (msgBox(msgId, msgContent, 1));
}

/*******************************************************************************
 * ��������:msgBox ����: ������Ϣ id (msgId),��Ϣ���� (msgContent) ��ȡ��Ϣ��Ϣ��������Ϣ������ (msgType)
 * ��ʾ��ͬ����Ϣ�� �������:msgId ��Ϣ Id msgContent ��Ϣ���� ��������[����Ϣ�����봫�� null ] msgType
 * ��Ϣ������(0 ��ʾ alert ����,1 ��ʾ confirm ����) �������:����ֵ (����û�ѡ�����Ϣ������Ϊ 0 ����ֵΪ true
 * ��ʾ�û������ȷ����ť false ��ʾ�û������ȡ����ť��ر��˶Ի���) (����û�ѡ�����Ϣ������Ϊ 1 ����ֵΪ undefined)
 * ������:HaierSoft
 ******************************************************************************/
function msgBox(msgId, msgContent, msgType) {
	// ���� msgBoxAcion ����Ϣ����
	var msg = "";
	// ��֤�Ƿ������Ϣ����
	if (msgContent != null) {
		// ѭ�������Ϣ����
		for ( var i = 0; i < msgContent.length; i++) {
			msg += msgContent[i];
			if (i != msgContent.length - 1) {
				msg += "!_!"
			}
		}
	}
	// ģʽ������ʾ�� url
	var url = "./msgBox.do?method=messageBox&content=" + msg + "&id=" + msgId;
	// ����ģʽ���ڵĶ���
	var obj = new Object();
	// ������ʾ��Ϣ�������
	obj.type = msgType;
	// ��ģʽ����
	var result = window.showModalDialog(url, obj);
	// ���ؽ��
	return result;
}
/*******************************************************************************
 * ����:У���ַ����в����к��֡�Ӣ����ĸ�����֡��»��ߡ�С���㡢���ӷ�������ַ��� �������:arg0 ��֤���ַ��� �������:arg1
 * true:��ʾ���԰������� false:��ʾ�����԰������� �������:arg2 true:��ʾ���԰���Ӣ����ĸ false:��ʾ�����԰���Ӣ����ĸ
 * �������:arg3 true:��ʾ���԰������� false:��ʾ�����԰������� �������:arg4 true:��ʾ���԰����»���
 * false:��ʾ�����԰����»��� �������:arg5 true:��ʾ���԰���С���� false:��ʾ�����԰���С���� �������:arg6
 * true:��ʾ���԰������ӷ� false:��ʾ�����԰������ӷ� �������:����ֵ (trueΪ��������,falseΪ����������)
 ******************************************************************************/
function validate(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
	var str = arg0;
	// �����������
	if (arg1) {
		str = str.replace(/[\u4E00-\u9FA5]/g, '');
	}
	// �������Ӣ����ĸ
	if (arg2) {
		str = str.replace(/[A-Za-z]/g, '');
	}
	// �����������
	if (arg3) {
		str = str.replace(/[\d]/g, '');
	}
	// ��������»���
	if (arg4) {
		str = str.replace(/[\_]/g, '');
	}
	// �������С����
	if (arg5) {
		str = str.replace(/[\.]/g, '');
	}
	// ����������ӷ�
	if (arg6) {
		str = str.replace(/[\-]/g, '');
	}
	// ����ֵ
	if (str == "") {
		return true;
	} else {
		return false;
	}
}
// ��ʾ��Ϣ�ķ���
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
// ������Ϣ�ķ���
function closeToolTipText() {
	try {
		document.getElementById("toolTipMessage").value = "";
	} catch (e) {
		//
	}
}
/*******************************************************************************
 * ����:�жϸ�ѡ����û�б�ѡ�� �������:chk ��ѡ���name �������:����ֵ (trueΪѡ��,falseΪû��ѡ��)
 * ������isSelectCheckbox("chk")
 ******************************************************************************/
function isSelectCheckbox(chk) {

	// ��ø�ѡ��Ķ���
	var chkbox = document.getElementsByName(chk);
	// �жϸ�ѡ���Ƿ����
	if (chkbox == null) {
		return;
	}
	// ����������
	var flag = 0;
	// �ж���û��ѡ��ѡ��
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
 * ����:У���½���Ƿ�Ϸ� �������:strName ��֤�ĵ�½���ַ��� �������:����ֵ (trueΪ�Ϸ�,falseΪ���Ϸ�)
 ******************************************************************************/
function checkLoginName(strName) {
	// �����м����
	var strTemp = trim(strName);
	// �жϵ�½���Ƿ�Ϊ��
	if (strTemp == "") {
		return true;
	}
	// ������ʽ ��ĸ������
	var reg = /^[A-Za-z0-9]+$/;
	// ���巵��ֵ
	var result;
	// �Ƚϱ��ʽ
	result = strTemp.match(reg);
	// ��֤�����ַ�����������ʽ�Ƿ�ƥ��
	if (result == null) {
		return false;
	} else {
		return true;
	}
}

// 20070620 add by wangjc start
/*******************************************************************************
 * ����:У���û����Ƿ�Ϸ� �������:strName ��֤���û����ַ��� �������:����ֵ (trueΪ�Ϸ�,falseΪ���Ϸ�)
 ******************************************************************************/
function checkChineseName(strName) {
	// �����м����
	var strTemp = trim(strName);
	// �жϵ�½���Ƿ�Ϊ��
	if (strTemp == "") {
		return true;
	}
	// ������ʽ ��ĸ������
	var reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
	// ���巵��ֵ
	var result;
	// �Ƚϱ��ʽ
	result = strTemp.match(reg);
	// ��֤�����ַ�����������ʽ�Ƿ�ƥ��
	if (result == null) {
		return false;
	} else {
		return true;
	}
}
// 20070620 add by wangjc end

/*******************************************************************************
 * ����:У���½���Ƿ�Ϸ� �������:strName ��֤�ĵ�½���ַ��� �������:����ֵ (trueΪ�Ϸ�,falseΪ���Ϸ�)
 ******************************************************************************/
function checkLogin(strName) {
	// �����м����
	var strTemp = trim(strName);
	// �жϵ�½���Ƿ�Ϊ��
	if (strTemp == "") {
		return true;
	}
	// ������ʽ ��ĸ������
	var reg = /[^_][a-z0-9A-Z_]+$/;
	// ���巵��ֵ
	var result;
	// �Ƚϱ��ʽ
	result = strTemp.match(reg);
	// ��֤�����ַ�����������ʽ�Ƿ�ƥ��
	if (result == null) {
		return false;
	} else {
		return true;
	}
}
/*******************************************************************************
 * ����:У���½���Ƿ�Ϸ� �������:strName ��֤�ĵ�½���ַ��� �������:����ֵ (trueΪ�Ϸ�,falseΪ���Ϸ�)
 ******************************************************************************/
function PhoneCheck(s) {
	var str = s;
	var reg = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/
	return reg.test(str);
}
/*******************************************************************************
 * ����:У�����֤�Ƿ�Ϸ� �������:num ��֤�����֤�ַ��� �������:����ֵ (trueΪ�Ϸ�,falseΪ���Ϸ�)
 ******************************************************************************/
function isIdCardNo(num) {
	var error;
	var varArray = new Array();
	var lngProduct = 0;
	var intCheckDigit;
	var intStrLen = num.length;
	var idNumber = num;
	
	if ((intStrLen != 15) && (intStrLen != 18)) {
		error = "�������֤���볤�Ȳ��ԣ�";
		alert(error);
		return false;
	}
	
	if (intStrLen == 18) {	
		for (i = 0; i < intStrLen - 1; i++) {
			varArray[i] = idNumber.charAt(i);
			if ((varArray[i] < '0' || varArray[i] > '9')) {
				error = "��������֤���룡";
				alert(error);
				return false;
			}
		}
		if (varArray[intStrLen] != 'X' || varArray[intStrLen] != 'x'){
			if(varArray[intStrLen] < '0' || varArray[intStrLen] > '9' ){
				error = "��������֤���룡";
				alert(error);
				return false;
			}
		}
	}else{
		for (i = 0; i < intStrLen; i++) {
			varArray[i] = idNumber.charAt(i);
			if ((varArray[i] < '0' || varArray[i] > '9')) {
				error = "��������֤���룡";
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
 * ����:�����л�ɫ ����:o �������, a �����б���, b ż���б���, c ��꾭������, d ����󱳾�
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