function DateCheck(){
const d = new Date()

let yyyy = d.getFullYear();
let mm = d.getMonth()+1; // getMonth() is zero-based
let dd  = d.getDate();

let year = document.getElementById("year").value;
let month = document.getElementById("month").value;
let day = document.getElementById("day").value;
let yearCheck=false;
let monthCheck=false;
let dayCheck=false;

if(day>0){
    if(month%2==0){
        if(day<=31){
            dayCheck=true;
            document.getElementById("day").style.outline="1px solid hsl(0, 1%, 44%)"
        document.getElementById("error-days").innerText="";
        }
    }else{
        if(day<=30){
            dayCheck=true;
            document.getElementById("day").style.outline="1px solid hsl(0, 1%, 44%)"
        document.getElementById("error-days").innerText="";
        }
        if(month==2){
            if(day<29){
                dayCheck=true;
                document.getElementById("day").style.outline="1px solid hsl(0, 1%, 44%)"
        document.getElementById("error-days").innerText="";
            }else{
                dayCheck=false;
                document.getElementById("day").style.outline="1px solid hsl(0, 100%, 67%)"
        document.getElementById("error-days").innerText="Must be a valid day";
            }
        }
    }
}else{
    document.getElementById("day").style.outline="1px solid hsl(0, 100%, 67%)"
    document.getElementById("error-days").innerText="Must be a valid day";
}
if(month>0 && month<=12){
    monthCheck=true;
    document.getElementById("month").style.outline="1px solid hsl(0, 1%, 44%)"
    document.getElementById("error-months").innerText="";
}else{
        document.getElementById("month").style.outline="1px solid hsl(0, 100%, 67%)"
        document.getElementById("error-months").innerText="Must be a valid month";
    
}
if(year>0){
    yearCheck=true;
    document.getElementById("year").style.outline="1px solid hsl(0, 1%, 44%)"
   document.getElementById("error-years").innerText="";
}else{
    document.getElementById("year").style.outline="1px solid hsl(0, 100%, 67%)"
        document.getElementById("error-years").innerText="Must be a valid year";
}


if(yearCheck&&monthCheck&&dayCheck){
    if(month-mm<0){
        document.getElementById("years-display").innerHTML=yyyy-year-1;
        if(day-dd<0){
            document.getElementById("months-display").innerHTML=12-mm+month-1;
            document.getElementById("days-display").innerHTML=30-dd+day;
        }else{
            document.getElementById("months-display").innerHTML=12-mm+month;
            document.getElementById("days-display").innerHTML=day-dd;
        }
    }else{
        document.getElementById("years-display").innerHTML=yyyy-year;
        document.getElementById("months-display").innerHTML=month-mm;
        if(day-dd<0){
            document.getElementById("days-display").innerHTML=30-dd+day;
        }else{
            document.getElementById("days-display").innerHTML=day-dd;
        }
    }
}else{

    if(!monthCheck){
        document.getElementById("month").style.outline="1px solid hsl(0, 100%, 67%)"
        document.getElementById("error-months").innerHTML="Must be a valid month";
    }
    if(!dayCheck){
        document.getElementById("day").style.outline="1px solid hsl(0, 100%, 67%)"
        document.getElementById("error-days").innerHTML="Must be a valid day";
    }
}
}