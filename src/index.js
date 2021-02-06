module.exports = function toReadable (number) {
    var human = "";
    switch(Math.floor(number/100)){
        case 1:
          human += "one hundred";
          break;
        case 2:
          human += "two hundred";
          break;
        case 3:
          human += "three hundred";
          break;
        case 4:
          human += "four hundred";
          break;
        case 5:
          human += "five hundred";
          break;
        case 6:
          human += "six hundred";
          break;
        case 7:
          human += "seven hundred";
          break;
        case 8:
          human += "eight hundred";
          break;
        case 9:
          human += "nine hundred";
          break;  
    }
    switch(number - Math.floor(number/100) * 100){
        case 10:
          human += " ten";
          break;
        case 11:
          human += " eleven";
          break;
        case 12:
          human += " twelve";
          break;
        case 13:
          human += " thirteen";
          break;
        case 14:
          human += " fourteen";
          break;
        case 15:
          human += " fifteen";
          break;
        case 16:
          human += " sixteen";
          break;
        case 17: 
          human += " seventeen";
          break;
        case 18: 
          human += " eighteen";
          break;
        case 19:
          human += " nineteen";
          break;
        default:
            switch(Math.floor(number/10) * 10 - Math.floor(number/100) * 100){
                case 20: 
                  human += " twenty";
                  break;
                case 30: 
                  human += " thirty";
                  break;
                case 40: 
                  human += " forty";
                  break;
                case 50: 
                  human += " fifty";
                  break;
                case 60: 
                  human += " sixty";
                  break;
                case 70: 
                  human += " seventy";
                  break;
                case 80: 
                  human += " eighty";
                  break;
                case 90: 
                  human += " ninety";
                  break;
              }
              switch(number - Math.floor(number / 10) * 10){
                case 1:
                    human += " one";
                    break;
                  case 2:
                    human += " two";
                    break;
                  case 3:
                    human += " three";
                    break;
                  case 4:
                    human += " four";
                    break;
                  case 5:
                    human += " five";
                    break;
                  case 6:
                    human += " six";
                    break;
                  case 7:
                    human += " seven";
                    break;
                  case 8:
                    human += " eight";
                    break;
                  case 9:
                    human += " nine";
                    break;
                
            }
            break;
        }
    if(number == 0){
        return "zero";
    }
    if(human[0] == ' '){
        var text = human.split('');
        text.shift();
        return text.join('');
    }else{
        return human;
    }
}
