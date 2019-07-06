
const hrefList = ['index1.html', 'index2.html', 'index3.html', 'index4.html', 'index5.html', 'index6.html', 'index7.html', 'index8.html', 'index9.html', 'index10.html', 'index11.html', 'index12.html', 'index13.html', 'index14.html', 'index15.html', 'index16.html'];
const Index = window.location.href.split("index")[1].split('.')[0];

function aa (state) {
    if(!state) {
        document.getElementById("word").style.display="none";
        document.getElementById("member").style.display="none";
        document.getElementById("style" +Index).style.display="block";
    } else if(state == "false") {
        history.go(0);
    } else if(Index < hrefList.length) {
        document.getElementById("word").style.display="block";
        document.getElementById("member").style.display="block";
        window.location.href= hrefList[Index];
    } else {
        computeTime();
    }
}

function computeTime() {
    var spacetime = new Date().getTime() - sessionStorage.getItem('time');

    //计算出相差天数
    var days=Math.floor(spacetime/(24*3600*1000))
    
    //计算出小时数
    var leave1=spacetime%(24*3600*1000)    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000))
    //计算相差分钟数
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))
    //计算相差秒数
    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000)
    alert(" 用时 "+minutes+" 分钟"+seconds+" 秒")
    window.location.href = "index.html";
}