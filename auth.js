if (localStorage.getItem("UPID") == null) {
   localStorage.setItem("UPID", Math.floor(Math.random() * 10000 ) + '-' + Math.floor(Math.random() * 10000 ) + '-' + Math.floor(Math.random() * 10000 ) )
}

function getUPID() {
    return(localStorage.getItem("UPID"));
}