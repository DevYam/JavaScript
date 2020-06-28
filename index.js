fn=()=>{
    console.log("ai")
    var fname = document.getElementById("fname").value;
    console.log(fname);
    var sname = document.getElementById("sname").value;
    var fullname = fname + " " + sname;

    console.log(fullname);
    document.getElementById("name").innerText = fullname;

}
