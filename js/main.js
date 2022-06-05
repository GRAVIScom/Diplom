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
    let sByte = document.getElementById("radio-input-3");
    let short = document.getElementById("radio-input-4");
    let int = document.getElementById("radio-input-5");
    let long = document.getElementById("radio-input-6");
    let float = document.getElementById("radio-input-7");
    let double = document.getElementById("radio-input-8");
    let char = document.getElementById("radio-input-9");
    let byte = document.getElementById("radio-input-10");
    let ushort = document.getElementById("radio-input-11");
    let uint = document.getElementById("radio-input-12");
    let ulong = document.getElementById("radio-input-13");
    let decimal = document.getElementById("radio-input-14");
    let string = document.getElementById("radio-input-15");
    let errorMessage = document.getElementById("error-message");
    let errorMessage2 = document.getElementById("error-message-char-one");
    let success = document.getElementById("success");
    let errorMessage3 = document.getElementById("error-message-3");
    let errorSByte = document.getElementById("sByte-message");
    let errorShort = document.getElementById("short-message");
    let errorInt = document.getElementById("int-message");
    let errorLong = document.getElementById("long-message");
    let errorByte = document.getElementById("byte-message");
    let errorUShort = document.getElementById("ushort-message");
    let errorFloat = document.getElementById("float-message");
    let errorDecimal = document.getElementById("decimal-message");
    
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

        if (sByte.checked == false && short.checked == false && int.checked == false && long.checked == false && float.checked == false && double.checked == false && char.checked == false && byte.checked == false && ushort.checked == false && uint.checked == false && ulong.checked == false && decimal.checked == false && string.checked == false) {
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
        if (sByte.checked === true) {
            if  (parseInt(enterInt.value) < -128) {
                errorSByte.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else if(parseInt(enterInt.value) > 127) {
                errorSByte.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorSByte.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (short.checked === true) {
            if  (parseInt(enterInt.value) < -32768) {
                errorShort.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else if(parseInt(enterInt.value) > 32767) {
                errorShort.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorShort.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (int.checked === true) {
            if  (parseInt(enterInt.value) < -2147483647) {
                errorInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else if(parseInt(enterInt.value) > 2147483647) {
                errorInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorInt.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        

        if (long.checked === true) {
            if  (parseInt(enterInt.value) < -1000000) {
                errorLong.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            
            } else {
                errorLong.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (byte.checked === true) {
            if  (parseInt(enterInt.value) < -1) {
                errorByte.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            
            } else if(parseInt(enterInt.value) > 255) {
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

        if (ushort.checked === true) {
            if  (parseInt(enterInt.value) < -1) {
                errorUShort.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            
            } else if(parseInt(enterInt.value) > 65535) {
                errorUShort.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorUShort.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (uint.checked === true) {
            if  (parseInt(enterInt.value) < -1) {
                errorInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            
            } else if(parseInt(enterInt.value) > 4294967295) {
                errorInt.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            } else {
                errorInt.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (ulong.checked === true && enterInt.value) {
            if  (parseInt(enterInt.value) < -1) {
                errorLong.style.display = "block";
                enterInt.classList.add("error");
                enterInt.value = "";
                binary.value = "";
                hexadecimal.value = "";
            }  else {
                errorLong.style.display = "none";
                enterInt.classList.remove("error");
            }
        }

        if (float.checked === true) {
            let enter = enterInt.value;
            typeof enter === "string";

            if (enter.indexOf(".") > -1) {
                    errorFloat.style.display = "block";
                    enterInt.classList.add("esmallintrror");
                    enterInt.value = "";
                    binary.value = "";
                    hexadecimal.value = "";
            } else {
                   errorFloat.style.display = "none";
                   enterInt.classList.remove("error");
                
            }
        }

        if (decimal.checked === true) {
            let enter = enterInt.value;
            typeof enter === "string";

            if (enter.indexOf(".") > -1) {
                    errorDecimal.style.display = "block";
                    enterInt.classList.add("error");
                    enterInt.value = "";
                    binary.value = "";
                    hexadecimal.value = "";
            } else if (enter.indexOf(",") > -1) {
                    errorDecimal.style.display = "block";
                    enterInt.classList.add("error");
                    enterInt.value = "";
                    binary.value = "";
                    hexadecimal.value = "";
            } else {
                   errorDecimal.style.display = "none";
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

        if (short.checked === true && enterInt.value) {
            binary.value = "00000000 " + binary.value;
            hexadecimal.value = "00 " + hexadecimal.value;
        } else if (int.checked === true && enterInt.value) {
            binary.value = "00000000 00000000 00000000 " + binary.value;
            hexadecimal.value = "00 00 00 " + hexadecimal.value;
        } else if (long.checked === true && enterInt.value) {
            binary.value = "00000000 00000000 00000000 00000000 00000000 00000000 00000000 " + binary.value;
            hexadecimal.value = "00 00 00 00 00 00 00 " + hexadecimal.value;
        }

        if (byte.checked === true) {
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

        } else if (uint.checked === true && enterInt.value) {

            binary.value = "00000000 00000000 00000000 " + binary.value;
            hexadecimal.value = "00 00 00 " + hexadecimal.value;

        } else if (ulong.checked === true && enterInt.value) {
            binary.value = "00000000 00000000 00000000 00000000 00000000 00000000 00000000 " + binary.value;
            hexadecimal.value = "00 00 00 00 00 00 00 " + hexadecimal.value;
        } else if (ushort.checked === true && enterInt.value) {
            binary.value = "00000000 " + binary.value;
            hexadecimal.value = "00 " + hexadecimal.value;
        } else if (decimal.checked === true && enterInt.value) {
            binary.value = "00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 " + binary.value;
            
        } else if (float.checked === true && enterInt.value) {
           
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
            
            
        } else if (double.checked === true) {
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
            

              if (valueBinary.length < 32) {
                  for (var i = 0; valueBinary.length < 64; i++) {
                    valueBinary = valueBinary + "0";
                  }


                
              }

              binary.value = format(valueBinary);

            }



            converterFloatBinary(enterInt.value);
        } else if (string.checked === true) {
            
           let str1 =  textBinary(enterInt.value);
           binary.value = str1;
           let str2 = textHexadecimal(enterInt.value);
           hexadecimal.value = str2;
        } else if (char.checked === true) {

            if (enterInt.value.length > 1) {
                errorMessage2.style.display = "block";
                enterInt.value = "";
            } else {
                errorMessage2.style.display = "none";
            }

            let str3 =  textBinary(enterInt.value);
            binary.value = str3;
            let str4 = textHexadecimal(enterInt.value);
            hexadecimal.value = str4;
           
         }
         
         if (sByte.checked === true && enterInt.value) {
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

         } else if (short.checked === true && enterInt.value) {
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
         } else if(int.checked === true && enterInt.value) {
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
         } else if (long.checked === true && enterInt.value) {
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
            console.log(errorMessage3.textContent = errorMessage3.textContent + "(" + parseInt(binary.value, 2) + ")");
            enterInt.style.border = "1px solid red";
            enterInt.value = "";
            setTimeout(removeRedMessage, 2*1000);
        }
        console.log(parseInt(binary.value, 2));

     });

     sByte.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    short.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    int.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    long.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    byte.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    ushort.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    uint.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    ulong.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    float.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    double.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    decimal.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    char.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });

    string.addEventListener('change', function () {
        enterInt.classList.remove("error");
        errorSByte.style.display = "none";
        errorShort.style.display = "none";
        errorInt.style.display = "none";
        errorLong.style.display = "none";
        errorByte.style.display = "none";
        errorUShort.style.display = "none";
        errorInt.style.display = "none";
        errorFloat.style.display = "none";
        errorDecimal.style.display = "none";
        errorMessage2.style.display = "none";
        errorMessage3.style.display = "none";
        errorMessage.style.display = "none";
    });
  





   
