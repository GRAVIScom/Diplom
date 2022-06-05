let learn = document.getElementById("radio-input");
let control = document.getElementById("radio-input-2");
let binary = document.getElementById("binary");
let hexadecimal = document.getElementById("hexadecimal");
let btn3 = document.getElementById("btn-3");

let enterInt = document.getElementById("enter");

    learn.addEventListener('change', function () {
        document.querySelector(".btn-none").style.display = "none";
        document.querySelector(".container-block-item-input").style.display = "block";
        document.querySelector(".container-block-btn").style.display = "block";
        enterInt.value = "";
        binary.value = "";
        hexadecimal.value = "";
        btn3.style.display = "none";
    });

    control.addEventListener('change', function () {
        document.querySelector(".container-block-item-input").style.display = "block";
        document.querySelector(".container-block-btn").style.display = "none";
        document.querySelector(".btn-none").style.display = "block";
        enterInt.value = "";
        binary.value = "";
        hexadecimal.value = "";
        btn3.style.display = "block";
    });


    let btn = document.getElementById("btn");
    let btn2 = document.getElementById("btn-2");
    let ushort = document.getElementById("radio-input-11");
    let uint = document.getElementById("radio-input-12");
    let errorMessage = document.getElementById("error-message");
    let success = document.getElementById("success");
    let errorMessage3 = document.getElementById("error-message-3");
    let pacsal10 = document.getElementById("pacsal-10");
    let pacsal11 = document.getElementById("pacsal-11");
    let pacsal12 = document.getElementById("pacsal-12");
    let errorShortInt = document.getElementById("shortint-message");
    let shortint = document.getElementById("radio-input-3");
    let smallint = document.getElementById("radio-input-4");
    let longint = document.getElementById("radio-input-5");
    let int64 = document.getElementById("radio-input-6");
    let errorSmallInt = document.getElementById("smallint-message");
    let errorLongInt = document.getElementById("longint-message");
    let errorInt64 = document.getElementById("int64-message");
    let byte = document.getElementById("pacsal-6");
    let word = document.getElementById("pacsal-7");
    let longword = document.getElementById("pacsal-8");
    let errorByte = document.getElementById("byte-message");
    let errorWord = document.getElementById("word-message");
    let errorLongWord = document.getElementById("longword-message");
    let single = document.getElementById("pacsal");
    let real = document.getElementById("pacsal-2");
    let extendet = document.getElementById("radio-input-9-9");
    let errorSingle = document.getElementById("single-message");
    let errorReal = document.getElementById("real-message");
    let errorExtendet = document.getElementById("extendet-message");
    let currency = document.getElementById("pacsal-9");
    let errorCurrency = document.getElementById("currency-message");
    let ansiChar = document.getElementById("pacsal-4");
    let wideChar = document.getElementById("pacsal-5");
    let errorAnsiChar = document.getElementById("ansichar-message");
    let errorWideChar = document.getElementById("widechar-message");
    let char = document.getElementById("pacsal-3");
    let errorChar = document.getElementById("char-message");
    
    function textBinary(string) {
        return string.split('').map(function (char) {
            return char.charCodeAt(0).toString(2);

        }).join(' ');
    }

    function textHexadecimal(string) {
        return string.split('').map(function (char) {
            return char.charCodeAt(0).toString(16);

        }).join(' ');
    }
    
  
     btn.addEventListener('click', function () {

        if (shortint.checked == false && smallint.checked == false && longint.checked == false && int64.checked == false && byte.checked == false && word.checked == false && longword.checked == false && single.checked == false && real.checked == false && extendet.checked == false && currency.checked == false && ansiChar.checked == false && wideChar.checked == false && char.checked == false && pacsal10.checked == false && pacsal11.checked == false && pacsal12.checked == false) {
            enterInt.classList.add("error");
            enterInt.value = "";
            errorMessage.style.display = "block";
        } else {
            enterInt.classList.remove("error");
            errorMessage.style.display = "none";
            let process = parseInt(enterInt.value).toString("2");
            let process_16 = parseInt(enterInt.value).toString("16");
            binary.value = parseInt(process);
            hexadecimal.value = process_16;
        }
            if (enterInt.value === "") {
                binary.value = "";
                hexadecimal.value = "";
            }
     

        if (shortint.checked === true) {
            if  (parseInt(enterInt.value) < -128) {
                errorShortInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else if(parseInt(enterInt.value) > 127) {
                errorShortInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorShortInt.style.display = "none";
                enterInt.classList.remove("error");
                
            }
        }

        if (smallint.checked === true) {
            if  (parseInt(enterInt.value) < -32768) {
                errorSmallInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else if(parseInt(enterInt.value) > 32767) {
                errorSmallInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorSmallInt.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (longint.checked === true) {
            if  (parseInt(enterInt.value) < -2147483647) {
                errorLongInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else if(parseInt(enterInt.value) > 2147483647) {
                errorLongInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorLongInt.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (int64.checked === true) {
            let enter = enterInt.value;
            typeof enter === "string";

            if (enter.indexOf(".") > -1) {
                    errorInt64.style.display = "block";
                    enterInt.classList.add("error");
                    enterInt.value = "";
                    binary.value = "";
                    hexadecimal.value = "";
            } else {
                   errorInt64.style.display = "none";
                   enterInt.classList.remove("error");
            }
          
        }

        if (byte.checked === true) {
            if  (parseInt(enterInt.value) < 0) {
                errorByte.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else if (parseInt(enterInt.value) > 255) {
                errorByte.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorByte.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (word.checked === true) {
            if  (parseInt(enterInt.value) < 0) {
                errorWord.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else if (parseInt(enterInt.value) > 65535) {
                errorWord.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorWord.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (longword.checked === true) {
            if  (parseInt(enterInt.value) < 0) {
                errorLongWord.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else if (parseInt(enterInt.value) > 4294967295) {
                errorLongWord.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorLongWord.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (single.checked === true) {
            let enter = enterInt.value;
            typeof enter === "string";

            if (enter.indexOf(".") > -1) {
                errorSingle.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
        } else {
               errorSingle.style.display = "none";
               enterInt.classList.remove("error");
         }
          
        }

        if (real.checked === true) {
            let enter = enterInt.value;
            typeof enter === "string";

            if (enter.indexOf(".") > -1) {
                errorReal.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
        } else {
               errorReal.style.display = "none";
               enterInt.classList.remove("error");
         }

        }

        if (extendet.checked === true) {
            let enter = enterInt.value;
            typeof enter === "string";

            if (enter.indexOf(".") > -1) {
                    errorExtendet.style.display = "block";
                    enterInt.classList.add("error");
                    enterInt.value = "";
                    binary.value = "";
                    hexadecimal.value = "";
            }   else {
                   errorExtendet.style.display = "none";
                   enterInt.classList.remove("error");
             }
          
        }

        if (currency.checked === true) {
            let enter = enterInt.value;
            typeof enter === "string";

            if (enter.indexOf(".") > -1) {
                    errorCurrency.style.display = "block";
                    enterInt.classList.add("error");
                    enterInt.value = "";
                    binary.value = "";
                    hexadecimal.value = "";
            }  else if (enter.indexOf(",") > -1) {
                    errorCurrency.style.display = "block";
                    enterInt.classList.add("error");
                    enterInt.value = "";
                    binary.value = "";
                    hexadecimal.value = "";
            }   else {
                   errorCurrency.style.display = "none";
                   enterInt.classList.remove("error");
             }
          
        }

        if (binary.value.length === 7) {
            binary.value = "0" + binary.value;
        } else if (binary.value.length === 6) {
            binary.value = "00" + binary.value;
        } else if (binary.value.length === 5) {
            binary.value = "000" + binary.value;
        } else if (binary.value.length === 4) {
            binary.value = "0000" + binary.value;
        } else if (binary.value.length === 3) {
            binary.value = "00000" + binary.value;
        } else if (binary.value.length === 2) {
            binary.value = "00000" + binary.value;
        } else if (binary.value.length === 1) {
            binary.value = "000000" + binary.value;
        }

        // short

        if (smallint.checked === true && enterInt.value) {
            binary.value = "00000000 " + binary.value;
            hexadecimal.value = "00 " + hexadecimal.value;
            if (Number(enterInt.value) <= -1) {
                var numberPull = Math.abs(Number(enterInt.value));
                numberPull = numberPull.toString(2);
                var valueBinary = numberPull;
                if (valueBinary.length < 16) {
                    for (let i = 0; valueBinary.length < 16; i++) {
                        valueBinary = "0" + valueBinary;
                    }
                }

                var res = ""
                for (var i = 0; i < valueBinary.length; i++) {
                    var outPutSign = valueBinary[i];
                    
                    if (outPutSign === "0") {
                        outPutSign = "1";
                    } else if (outPutSign === "1") {
                        outPutSign = "0";
                    }

                    res += outPutSign;

                } 

                function format(s) {
                    return s.toString().replace(/\d{8}(?=.)/g, '$& ');
                }
            }

            function format2(s) {
                return s.toString().replace(/\d{2}(?=.)/g, '$& ');
            }
                
                res = parseInt(res, 2);
                res = res + 1;
                res = res.toString(2);
                binary.value = format(res);

                res = parseInt(res, 2);
                res = res.toString(16);
                hexadecimal.value = res.toUpperCase();
                let hexadecimal1 = hexadecimal.value;
                hexadecimal1 = hexadecimal1.match(/.{1,2}/g);
                hexadecimal.value = hexadecimal1.join(' ');

        } else if (longint.checked === true && enterInt.value) {
            binary.value = "00000000 00000000 00000000 " + binary.value;
            hexadecimal.value = "00 00 00 " + hexadecimal.value;
            if (Number(enterInt.value) <= -1) {
                var numberPull = Math.abs(Number(enterInt.value));
                numberPull = numberPull.toString(2);
                var valueBinary = numberPull;
                if (valueBinary.length < 32) {
                    for (let i = 0; valueBinary.length < 32; i++) {
                        valueBinary = "0" + valueBinary;
                    }
                }

                var res = ""
                for (var i = 0; i < valueBinary.length; i++) {
                    var outPutSign = valueBinary[i];
                    
                    if (outPutSign === "0") {
                        outPutSign = "1";
                    } else if (outPutSign === "1") {
                        outPutSign = "0";
                    }

                    res += outPutSign;

                } 

                function format(s) {
                    return s.toString().replace(/\d{8}(?=.)/g, '$& ');
                }
            }
                
                res = parseInt(res, 2);
                res = res + 1;
                res = res.toString(2);
                binary.value = format(res);

                res = parseInt(res, 2);
                res = res.toString(16);
                hexadecimal.value = res.toUpperCase();
                let hexadecimal1 = hexadecimal.value;
                hexadecimal1 = hexadecimal1.match(/.{1,2}/g);
                hexadecimal.value = hexadecimal1.join(' ');
        } else if (int64.checked === true && enterInt.value) {
            binary.value = "00000000 00000000 00000000 00000000 00000000 00000000 00000000 " + binary.value;
            hexadecimal.value = "00 00 00 00 00 00 00 " + hexadecimal.value;
            if (Number(enterInt.value) <= -1) {
                var numberPull = Math.abs(Number(enterInt.value));
                numberPull = numberPull.toString(2);
                var valueBinary = numberPull;
                if (valueBinary.length < 56) {
                    for (let i = 0; valueBinary.length < 56; i++) {
                        valueBinary = "0" + valueBinary;
                    }
                }

                var res = ""
                for (var i = 0; i < valueBinary.length; i++) {
                    var outPutSign = valueBinary[i];
                    
                    if (outPutSign === "0") {
                        outPutSign = "1";
                    } else if (outPutSign === "1") {
                        outPutSign = "0";
                    }

                    res += outPutSign;

                }

                function format(s) {
                    return s.toString().replace(/\d{8}(?=.)/g, '$& ');
                }
                
                res = parseInt(res, 2);
                res = res + 1;
                res = res.toString(2);
                binary.value = format(res); 

                res = parseInt(res, 2);
                res = res.toString(16);
                hexadecimal.value = res.toUpperCase();
                let hexadecimal1 = hexadecimal.value;
                hexadecimal1 = hexadecimal1.match(/.{1,2}/g);
                hexadecimal.value = hexadecimal1.join(' ');
        }
        } else if (shortint.checked === true && enterInt.value) {
            if (Number(enterInt.value) <= -1) {
                var numberPull = Math.abs(Number(enterInt.value));
                numberPull = numberPull.toString(2);
                var valueBinary = numberPull;
                if (valueBinary.length < 8) {
                    for (let i = 0; valueBinary.length < 8; i++) {
                        valueBinary = "0" + valueBinary;
                    }
                }

                var res = ""
                for (var i = 0; i < valueBinary.length; i++) {
                    var outPutSign = valueBinary[i];
                    
                    if (outPutSign === "0") {
                        outPutSign = "1";
                    } else if (outPutSign === "1") {
                        outPutSign = "0";
                    }

                    res += outPutSign;

                }
                
                res = parseInt(res, 2);
                res = res + 1;
                res = res.toString(2);
                binary.value = res; 

                res = parseInt(res, 2);
                res = res.toString(16);
                hexadecimal.value = res.toUpperCase();
                let hexadecimal1 = hexadecimal.value;
                hexadecimal1 = hexadecimal1.match(/.{1,2}/g);
                hexadecimal.value = hexadecimal1.join(' ');
        }
        }

        if (int64.checked === true) {
            if (binary.value.length === 7) {
                binary.value = "0" + binary.value;
            } else if (binary.value.length === 6) {
                binary.value = "00" + binary.value;
            } else if (binary.value.length === 5) {
                binary.value = "000" + binary.value;
            } else if (binary.value.length === 4) {
                binary.value = "0000" + binary.value;
            } else if (binary.value.length === 3) {
                binary.value = "00000" + binary.value;
            } else if (binary.value.length === 2) {
                binary.value = "00000" + binary.value;
            } else if (binary.value.length === 1) {
                binary.value = "000000" + binary.value;
            }
        } else if (word.checked === true && enterInt.value) {
            binary.value = "00000000 00000000 00000000 " + binary.value;
            hexadecimal.value = "00 " + hexadecimal.value;
        } else if (longword.checked === true && enterInt.value) {
            binary.value = "00000000 00000000 00000000 00000000 00000000 00000000 00000000 " + binary.value;
            hexadecimal.value = "00 00 00 " + hexadecimal.value;
        }  else if (single.checked === true && enterInt.value) {

            var a = parseInt(enterInt.value).toString(2);
          

            function converterFloatBinary(value) {

                var value = enterInt.value.replace(",", ".");
                 var fullPart = Math.trunc(value);
                var floatPartS = Number((value - fullPart).toFixed(100)).toString(2).replace(String(Number((value - fullPart).toFixed(100)).toString(2).charAt(0)), '').replace(String(Number((value - fullPart).toFixed(100)).toString(2).charAt(1)), '');
              
                var fullNumber = a + "," + floatPartS;

                
            //     var res="";
            //     for(var i = fullNumber.length; i>0; i--) {
            //     res+=fullNumber[i-1];
                
            //  }

            //  var res1="";
            //     for(var i = fullNumber.length; i>0; i--) {
            //     res1+=fullNumber[i-1];
                
            //  }

              var fullNumber2 = fullNumber.replace(",", ".");
              fullNumber2 = Number(fullNumber2);
              
                fullNumber = fullNumber.replace(",","");

               
              

              if (!String.prototype.splice) { 
                String.prototype.splice = function(index, del, ...chars) {
                  return this.slice(0, index) + chars.join('') + this.slice(index + Math.abs(del));
                };
              }
            
            
            fullNumber = fullNumber.splice(1, 0, ',');
            fullNumber = fullNumber.replace(",",".");
             
            // res = res.replace(",","");
             fullNumber = Number(fullNumber);
            
            function f(n){
                let i=0;
                if(n%1 != 0){
                  do {
                    n= n*10;
                    i++;
                  } while (n%1 != 0);
                }
                return i;
              }
               var cult = f(fullNumber2);
               var cult2 = f(fullNumber);
               var cult3 = cult2 - cult;
               var exponent = 127;
               exponent = exponent + cult3;

              exponent = exponent.toString(2);
              if (Number(enterInt) < -1){
                var one_char = "1";
              } else {
                 one_char = "0";
              }

               fullNumber = String(fullNumber);
               fullNumber = fullNumber.replace(".", "");
               fullNumber = fullNumber.substr(1);
              
               var valueBinary = one_char + exponent + fullNumber;

              function format(s) {
                return s.toString().replace(/\d{8}(?=.)/g, '$& ');
            }

              if (valueBinary.length < 32) {
                  for (var i = 0; valueBinary.length < 32; i++) {
                    valueBinary = valueBinary + "0";
                  }


                
              }

              binary.value = format(valueBinary);

            }



            converterFloatBinary(enterInt.value);
        } else if (real.checked === true && enterInt.value) {
            var a = parseInt(enterInt.value).toString(2);
          

            function converterFloatBinary(value) {

                var value = enterInt.value.replace(",", ".");
                 var fullPart = Math.trunc(value);
                var floatPartS = Number((value - fullPart).toFixed(100)).toString(2).replace(String(Number((value - fullPart).toFixed(100)).toString(2).charAt(0)), '').replace(String(Number((value - fullPart).toFixed(100)).toString(2).charAt(1)), '');
              
                var fullNumber = a + "," + floatPartS;

                
            //     var res="";
            //     for(var i = fullNumber.length; i>0; i--) {
            //     res+=fullNumber[i-1];
                
            //  }

            //  var res1="";
            //     for(var i = fullNumber.length; i>0; i--) {
            //     res1+=fullNumber[i-1];
                
            //  }

              var fullNumber2 = fullNumber.replace(",", ".");
              fullNumber2 = Number(fullNumber2);
              
                fullNumber = fullNumber.replace(",","");

               
              

              if (!String.prototype.splice) { 
                String.prototype.splice = function(index, del, ...chars) {
                  return this.slice(0, index) + chars.join('') + this.slice(index + Math.abs(del));
                };
              }
            
            
            fullNumber = fullNumber.splice(1, 0, ',');
            fullNumber = fullNumber.replace(",",".");
             
            // res = res.replace(",","");
             fullNumber = Number(fullNumber);
            
            function f(n){
                let i=0;
                if(n%1 != 0){
                  do {
                    n= n*10;
                    i++;
                  } while (n%1 != 0);
                }
                return i;
              }
               var cult = f(fullNumber2);
               var cult2 = f(fullNumber);
               var cult3 = cult2 - cult;
               var exponent = 1023;
               exponent = exponent + cult3;

              exponent = exponent.toString(2);
              if (Number(enterInt) < -1){
                var one_char = "1";
              } else {
                 one_char = "0";
              }

               fullNumber = String(fullNumber);
               fullNumber = fullNumber.replace(".", "");
               fullNumber = fullNumber.substr(1);
              
               var valueBinary = one_char + exponent + fullNumber;

              function format(s) {
                return s.toString().replace(/\d{8}(?=.)/g, '$& ');
            }

              if (valueBinary.length < 64) {
                  for (var i = 0; valueBinary.length < 64; i++) {
                    valueBinary = valueBinary + "0";
                  }


                
              }

              binary.value = format(valueBinary);

            }



            converterFloatBinary(enterInt.value);
        }else if (extendet.checked === true && enterInt.value) {
            var a = parseInt(enterInt.value).toString(2);
          

            function converterFloatBinary(value) {

                var value = enterInt.value.replace(",", ".");
                 var fullPart = Math.trunc(value);
                var floatPartS = Number((value - fullPart).toFixed(100)).toString(2).replace(String(Number((value - fullPart).toFixed(100)).toString(2).charAt(0)), '').replace(String(Number((value - fullPart).toFixed(100)).toString(2).charAt(1)), '');
              
                var fullNumber = a + "," + floatPartS;

                
            //     var res="";
            //     for(var i = fullNumber.length; i>0; i--) {
            //     res+=fullNumber[i-1];
                
            //  }

            //  var res1="";
            //     for(var i = fullNumber.length; i>0; i--) {
            //     res1+=fullNumber[i-1];
                
            //  }

              var fullNumber2 = fullNumber.replace(",", ".");
              fullNumber2 = Number(fullNumber2);
              
                fullNumber = fullNumber.replace(",","");

               
              

              if (!String.prototype.splice) { 
                String.prototype.splice = function(index, del, ...chars) {
                  return this.slice(0, index) + chars.join('') + this.slice(index + Math.abs(del));
                };
              }
            
            
            fullNumber = fullNumber.splice(1, 0, ',');
            fullNumber = fullNumber.replace(",",".");
             
            // res = res.replace(",","");
             fullNumber = Number(fullNumber);
            
            function f(n){
                let i=0;
                if(n%1 != 0){
                  do {
                    n= n*10;
                    i++;
                  } while (n%1 != 0);
                }
                return i;
              }
               var cult = f(fullNumber2);
               var cult2 = f(fullNumber);
               var cult3 = cult2 - cult;
               var exponent = 32770;
               exponent = exponent + cult3;

              exponent = exponent.toString(2);
              if (Number(enterInt) < -1){
                var one_char = "1";
              } else {
                 one_char = "0";
              }

               fullNumber = String(fullNumber);
               fullNumber = fullNumber.replace(".", "");
               fullNumber = fullNumber.substr(1);
              
               var valueBinary = one_char + exponent + fullNumber;

              function format(s) {
                return s.toString().replace(/\d{8}(?=.)/g, '$& ');
            }

              if (valueBinary.length < 80) {
                  for (var i = 0; valueBinary.length < 80; i++) {
                    valueBinary = valueBinary + "0";
                  }


                
              }

              binary.value = format(valueBinary);

            }



            converterFloatBinary(enterInt.value);
           
        } else if (currency.checked === true) {
            binary.value = "00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 " + binary.value;
        } else if (pacsal10.checked === true) {
            
           let str1 =  textBinary(enterInt.value);
           binary.value = str1;
           let str2 = textHexadecimal(enterInt.value);
           hexadecimal.value = str2;
        } else if (char.checked === true) {

            if (enterInt.value.length > 1) {
                errorChar.style.display = "block";
                enterInt.value = "";
            } else {
                errorChar.style.display = "none";
            }

            let str3 =  textBinary(enterInt.value);
            binary.value = str3;
            let str4 = textHexadecimal(enterInt.value);
            hexadecimal.value = str4;
           
         } else if (ansiChar.checked === true) {

            if (enterInt.value.length > 1) {
                errorAnsiChar.style.display = "block";
                enterInt.value = "";
            } else {
                errorAnsiChar.style.display = "none";
            }

            let str3 =  textBinary(enterInt.value);
            binary.value = str3;
            let str4 = textHexadecimal(enterInt.value);
            hexadecimal.value = str4;
           
         } else if (ansiChar.checked === true) {
            
           
            let str3;
            let str4;
             
             if (enterInt.value.length > 1) {
                 errorAnsiChar.style.display = "block";
                 enterInt.value = "";
                 binary.value = "";
                 hexadecimal.value = "";
             } else {
                 errorAnsiChar.style.display = "none";
                 str4 = textHexadecimal(enterInt.value);
                 str3 =  textBinary(enterInt.value);
                 binary.value = "00000000" + str3;
                 hexadecimal.value = str4;
             }
            
             
             
            
          } else if (wideChar.checked === true) {
            
           
           let str3;
           let str4;
            
            if (enterInt.value.length > 1) {
                errorWideChar.style.display = "block";
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorWideChar.style.display = "none";
                str3 =  textBinary(enterInt.value);
                str4 = textHexadecimal(enterInt.value);
                binary.value = "00000000" + str3;
                hexadecimal.value = str4;
            }
           
            
            
           
         } else if (pacsal11.checked === true) {

            let str3 =  textBinary(enterInt.value);
            binary.value = "00000000 00000000" + str3;
            let str4 = textHexadecimal(enterInt.value);
            hexadecimal.value = str4;
            
           
         } else if (pacsal12.checked === true) {
             
            let str3 =  textBinary(enterInt.value);
            binary.value = "00000000 00000000 00000000" + str3;
            let str4 = textHexadecimal(enterInt.value);
            hexadecimal.value = str4;
         } 
        
     });

     btn2.addEventListener('click', function () {
         let sum1 =  Math.floor(Math.random () * (1000 - 1 + 1)) + 1;
         binary.value = sum1.toString(2);
         hexadecimal.value = sum1.toString(16);
     });

     btn3.addEventListener('click', function () {
         function removeGreenMessage() {
            success.style.display = "none";
            enterInt.style.border = "none";
         }

         function removeRedMessage() {
            errorMessage3.style.display = "none";
            enterInt.style.border = "none";
         }

        if (parseInt(enterInt.value) === parseInt(binary.value, 2)) {
            success.style.display = "block";
           enterInt.style.border = "1px solid green";
           errorMessage3.style.display = "none";
           enterInt.value = "";
           setTimeout(removeGreenMessage, 2*1000);

        } else {
            errorMessage3.style.display = "block";
            enterInt.style.border = "1px solid red";
            enterInt.value = "";
            setTimeout(removeRedMessage, 2*1000);
        }
        console.log(parseInt(binary.value, 2));

     });

     shortint.addEventListener('change', function () {
         enterInt.classList.remove("error");
         errorShortInt.style.display = "none";
         errorSmallInt.style.display = "none";
         errorLongInt.style.display = "none";
         errorInt64.style.display = "none";
         errorByte.style.display = "none";
         errorWord.style.display = "none";
         errorSingle.style.display = "none";
         errorReal.style.display = "none";
         errorExtendet.style.display = "none";
         errorCurrency.style.display = "none";
         errorChar.style.display = "none";
         errorAnsiChar.style.display = "none";
         errorWideChar.style.display = "none";
     });
     smallint.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });
    longint.addEventListener('change', function () {
        enterInt.classList.remove("error");
         errorShortInt.style.display = "none";
         errorSmallInt.style.display = "none";
         errorLongInt.style.display = "none";
         errorInt64.style.display = "none";
         errorByte.style.display = "none";
         errorWord.style.display = "none";
         errorSingle.style.display = "none";
         errorReal.style.display = "none";
         errorExtendet.style.display = "none";
         errorCurrency.style.display = "none";
         errorChar.style.display = "none";
         errorAnsiChar.style.display = "none";
         errorWideChar.style.display = "none";
    });
    int64.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    byte.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    word.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    longword.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    single.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    real.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    extendet.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    currency.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    char.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    ansiChar.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    wideChar.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    pacsal10.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    pacsal11.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });

    pacsal12.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorShortInt.style.display = "none";
        errorSmallInt.style.display = "none";
        errorLongInt.style.display = "none";
        errorInt64.style.display = "none";
        errorByte.style.display = "none";
        errorWord.style.display = "none";
        errorSingle.style.display = "none";
        errorReal.style.display = "none";
        errorExtendet.style.display = "none";
        errorCurrency.style.display = "none";
        errorChar.style.display = "none";
        errorAnsiChar.style.display = "none";
        errorWideChar.style.display = "none";
    });



    



  





   
