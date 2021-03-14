function getNumberName(n) {
    let res='';
        switch (n) {
            case 0: {res = 'zero'; break;}
            case 1: {res = 'one';break;}
            case 2: {res = 'two';break;}
            case 3: {res = 'three';break;}
            case 4: {res = 'four';break;}
            case 5: {res = 'five';break;}
            case 6: {res = 'six';break;}
            case 7: {res = 'seven';break;}
            case 8: {res = 'eight';break;}
            case 9: {res = 'nine';break;}
        }
    return res;
}

function getTeenName(n) {
    let str = n.toString();
    let res='';
    if (n >= 10 && n < 14) {
        switch (n) {
            case 10: {
                res = 'ten';
                break;
            }
            case 11: {
                res = 'eleven';
                break;
            }
            case 12: {
                res = 'twelve';
                break;
            }
            case 13: {
                res = 'thirteen';
                break;
            }
        }
    }
    if (n >= 14 && n < 20) {
        res = getNumberName(+str[1]);
        if (n!==15 && n!==18) {
            res = res + 'teen';
        }
        if (n === 15) {res = 'fifteen'}
        if (n === 18) {res = 'eighteen'}
    }
    return res;
}

function getTwoNumberName(number) {
    let str = number.toString();
    let res='';
    res = getNumberName(+str[0]) + 'ty';
    if (+str[0] === 5) {
        res = res.replace('ve', 'f');
    }
    if (+str[0] === 8) {
        res = res.replace('tt', 't');
    }
    if (+str[0] === 2) {
        res = res.replace('o', 'en');
    }
    if (+str[0] === 4) {
        res = res.replace('u', '');
    }
    if (+str[0] === 3) {
        res = res.replace('ree', 'ir');
    }
    if (+str[1] !== 0) {
        res = res + ' ' + getNumberName(+str[1]);
    }
    return res;
}

module.exports = function toReadable (number) {
  let res='';
    let str=number.toString();
    if (number >=0 && number <10) {
        res = getNumberName(number);
        return res;
    }
    if (number >= 10 && number < 20) {
        res = getTeenName(number);
        return res;
    }

    if (number < 100) {
        res = getTwoNumberName(number);
        return res;
    }
    if (number%100 === 0) {
        res = getNumberName(+str[0]) + ' hundred';
        return res;
    }
    if (number > 100) {
      res = getNumberName(+str[0]) + ' hundred ';
      number = +(str[1]+str[2]);
      if (number < 20 ) {
          if (number < 10) {
              res = res + getNumberName(number);
          }
          if (number >= 10 && number < 20) {
              res = res + getTeenName(number);
          }
      } else {
          res = res + getTwoNumberName(number);
      }
      return res;
    }
    return res;
}
