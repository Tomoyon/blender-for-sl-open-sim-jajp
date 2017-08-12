//javascript:(function(){ s=document.createElement('script'); s.src='https://www.dropbox.com/s/ta56257o28087g2/getYt5xhr.user.js?dl=1'; d=document.getElementsByTagName('body')[0]; d.appendChild(s); s.id='getyt5xhr';})()

//javascript:
function prom(promptstr){
  //ファイル名をコピペできるようにプロンプトで表示
  pr=prompt(promptstr,promptstr);
  if (pr==null) {return false;} else {return true;}
}
function fgetyt(ytp_config){
  //tit = document.getElementsByName("title")[0].content;
  //tit = document.getElementById("eow-title").title;
  //tit = document.title;
  tit = ytp_config.args.title;
  ngfilechar = new Array("\\\\","/",":","\\*","\\?","\"","<",">","\\|");
  okfilechar = "￥／：＊？”＜＞｜";
  for(var i=0; i<ngfilechar.length; i++)
    {tit=tit.replace(new RegExp(ngfilechar[i],'g'),okfilechar[i]);}
  tit=tit.replace(/\'/g,'&apos;');
  //タイトルからダメ文字を置き換え

  arr = ytp_config.args.url_encoded_fmt_stream_map.split(',');
  for (var i = 0; i < arr.length; i++) {
     arr[i]=arr[i].split("&");
     var arrb = new Object();
     for (var j = 0; j < arr[i].length; j++) {
       arr[i][j].match(/=/);
       arrb[RegExp.leftContext]=unescape((RegExp.rightContext));}
     arr[i]=arrb;
  }
  locsearch=location.search;
  promptstr=tit+" ("+location.search.match(/v=([^&]*)/)[1]+")";
  elem = document.createElement('div'); 
  for(var i = 0; i < arr.length; i++) {
     ext="."+/\/(x-)?(.*)/.exec(arr[i].type.split(";")[0])[2];
     ptit=promptstr + arr[i].itag;
     ihtm = " <a href=" + arr[i].url;
     ihtm += '&title='+encodeURIComponent(ptit);
     if('undefined'!=typeof arr[i].sig){
       ihtm += '&signature='+arr[i].sig;
     }
     ihtm += " title=" + arr[i].type;
     ihtm += " target='_blank'";
     ihtm += " download='"+ ptit + ext +"'";
//https://developer.mozilla.org/ja/docs/Web/HTML/Element/a#attr-download
     ihtm += " onclick='return prom(\"";
     ihtm += ptit + ext + "\");'>";
     ihtm += arr[i].itag + ext + "</a>";
     elem.innerHTML += ihtm;
  }
  objBody = document.getElementsByTagName('Body').item(0); 
  elem.style.zIndex=2147483647;
  elem.style.position='fixed';
  elem.style.top='0px';
  elem.style.background='rgba(255, 255, 255, 0.5)';
  elem.id='getyt';
  objBody.appendChild(elem);

  //動画変更検出
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log("MUTEtype:"+mutation.type
          +" 〓location.search:"+location.search+" 〓locsearch:"+locsearch);
      if(location.search != locsearch){
        observer.disconnect();
        console.log("動画変更検出");
        var dgetyt=document.getElementById('getyt');
        if(dgetyt!=undefined){dgetyt.remove();}
        var sgetyt=document.getElementById('getyt5xhr');
        if(sgetyt!=undefined){sgetyt.remove();}
      }
    });
  });
  var config = { childList: true, characterData: true, subtree: true };
  content=document.getElementById("content");
  observer.observe(content, config);
}

(function(){
  //fgetyt(ytplayer.config);
  var yres;
  var yreq = new XMLHttpRequest();
  yreq.onreadystatechange = function() {
    if (yreq.readyState == 4) { // 通信の完了時
      if (yreq.status == 200) { // 通信の成功時
        console.log("完了");
        yres = yreq.responseText;
        yres = yres.split('ytplayer.config')[1];
        yres = yres.split(';');
        yres.pop();
        yres = yres.join(';');
        eval('yres'+yres);
        fgetyt(yres);
        //yres.args.title;
      }
    }else{
      console.log("通信中...");
    }
  }
  yreq.open('GET', location.href, true);
  yreq.send(null);

})()//title prompt html5'g decodeURI ext|ytplayer
//chrome@win7ok,chrome@ubu10.04ok
