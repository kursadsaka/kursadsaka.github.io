function calculateMyAge() {
    birth = new Date('1998-08-18');
    today = new Date();
    document.getElementById("date").innerHTML = (today.getTime()-birth.getTime())/(1000*60*60*24*365);
}
