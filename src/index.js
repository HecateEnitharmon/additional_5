module.exports = function check(str, bracketsConfig) {
    var currentRegexp = "";
    if (/\d/g.test(bracketsConfig)) {
        for (var a = 0; a < bracketsConfig.length; a++) {
            currentRegexp = currentRegexp + "|" + bracketsConfig[a][0] + bracketsConfig[a][1];
        }
    } else {
        for (var b = 0; b < bracketsConfig.length; b++) {
            currentRegexp = currentRegexp + "|" + "\\" + bracketsConfig[b][0] + "\\" + bracketsConfig[b][1];
        }
    }
    currentRegexp = currentRegexp.substring(1);

    var regexpObject;
    regexpObject = new RegExp(currentRegexp);

    var newStr = str;
    do {
        newStr = newStr.replace(regexpObject, '');
    } while (newStr.match(regexpObject));
    if (newStr.length === 0) {
        return true;
    } else {
        return false;
    }
};
