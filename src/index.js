const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    expr = expr.split("**********");
    var arr = [];
    for (var i = 0; i < expr.length; i++) {
        var l = 0;
        while (l < expr[i].length) {
            switch (expr[i].substring(l, l+2)) {
                case "10":
                    arr.push(".");
                    break;
                case "11":
                    arr.push("-");
                    break;
                case "00":
                    break;
                default:
                    break;
            }
            l += 2;
            if (l % 10 == 0) arr.push(" ");
        }
        if (i + 1 != expr.length) arr.push(" ");
    }

    var q = arr.join("").split("  ");

    var str = [];
    for (var i = 0; i < q.length; i++) {
        var l = 0;
        var el = q[i].split(" ");
        while (l < el.length) {
            str.push(MORSE_TABLE[el[l]]);
            l++;
        }
        if (i + 1 != q.length) str.push(" ");
    }

    str.pop();
    return str.join("");
}

module.exports = {
    decode
}