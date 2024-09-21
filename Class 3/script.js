var visitcount = localStorage.getItem(visitcount)
visitcount++

localStorage.setItem('visitCount' , visitcount)

alert("you have visited this site" + visitcount + " times")