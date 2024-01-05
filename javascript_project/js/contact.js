function validform(){
                var name=document.myform.name.value;
                var x=document.myform.email.value;
                var atposition=x.indexOf("@");
                var dotposition=x.lastIndexOf(".");
                var num=document.myform.num.value;
                var password=document.myform.password.value;
                var firstpassword=document.myform.password.value;
                var secondpassword=document.myform.password2.value;
                if(name==null || name==""){
                    alert("Name must be blank");
                    return false;
                }
                if (password.length<6){
                    alert("Password must be at least 6 character long");
                    return false;
                }
                if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
                    alert("Please enter a valid e-mail address \n atposition:"+atposition+"\n dotposition:"+dotposition);
                    return false;
                }
                if (isNaN(num)){
                    document.getElementById("numloc").innerHTML="Enter Numeric value only";
                    return false;
                    
                }
                if(firstpassword==secondpassword){
                    
                    return true;
                }
                
                else{
                    alert("Password must be same");
                   return false;
                }
                
            }
