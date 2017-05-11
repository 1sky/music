//alert(1)
	var play_btn=document.getElementById("play_btn");
		var prev_btn=document.getElementById("prev_btn");
		var next_btn=document.getElementById("next_btn");
		var audio=document.getElementsByTagName("audio")[0];
		var initTime=document.getElementsByTagName("time")[0];
		var time=document.getElementsByTagName("time")[1];
		var progress_bar=document.getElementById("progress_bar");
		var progress_cube=document.getElementById("progress_cube");
		var vol_bar=document.getElementById("vol_bar");
		var vol_cube=document.getElementById("vol_cube");
		var lyric_con=document.getElementById("lyric_con");
		var lyric_txt=document.getElementById("lyric_txt");
		var photo_pic=document.getElementById("photo_pic");
		var icon1=document.getElementById("icon1");
		var icon2=document.getElementById("icon2");
		var lyric_tit=document.getElementById("lyric_tit");
		var list_con=document.getElementById("list_con");
//		var list_item=list_con.getElementsByTagName("p");
		var songIndex=0;
		var container=document.getElementById("box");
		var obj;		
//		function config()
//		{
//			this.play_mark=true;
//			this.duration=audio.duration;
//			this.play_btn="";
//			this.vol=audio.volume;
//			this.timer=null;
//			this.rotateSum=0;
//			this.icon1=icon1.innerHTML;
//			this.icon2=icon2.innerHTML;
//			this.icon1_co=icon1.style.color;
//			this.endplay_btn="";
//			this.endicon1=icon1.innerHTML;
//			this.endicon2="";
//		}
//		
//		obj= new config();
//		//列表控制
//		
//		var allSong="";
//		for(var song=0;song<lyric.length;song++)
//		{
//			allSong+="<p>"+lyric[song].name+"</p>"
//		}
//		list_con.innerHTML=allSong;
//		list_con.style.height=lyric.length*30+"px";
//		for(var listIndex=0;listIndex<list_item.length;listIndex++)
//			{
//				list_item[listIndex].index=listIndex;
//				list_item[listIndex].onclick=function(ev)
//				{
//					var ev=ev||window.event;
//					ev.stopPropagation();
//					songIndex=this.index;
//					change_music();
//				}
//			}
//		list_con.style.display="none";
//		list.onclick=function()
//		{
//			if(list_con.style.display=="none")
//			{
//				list_con.style.display="block";
//			}
//			else{
//				list_con.style.display="none";
//			}
//		}
//		//下一首
//		next_btn.onclick=function(){
//			songIndex++;
//			change_music();
//		}
//		prev_btn.onclick=function(){
//			songIndex--;
//			change_music();
//		}
//		function change_music()
//		{
//			clearInterval(obj.timer);
//			if(songIndex>=lyric.length)
//				{songIndex=0}
//			else if(songIndex<0)
//				{songIndex=lyric.length}
//			obj= new config();		
//			iconinit();
//			audioInit();
//			playedTime();
//			lyric_ctrl();
//		}
//		//初始化总时长、音量等
//		function audioInit()
//		{
//			time.innerHTML=format(audio.duration);
//			audio.volume=0.5;
//			play_btn.innerHTML=obj.play_btn;
//			vol_cube.style.left=audio.volume*vol_bar.offsetWidth+"px";
//			lyric_tit.innerText=lyric[songIndex].name;
//			photo_pic.style.background="url("+lyric[songIndex].img+")";
//			audio.src=lyric[songIndex].audio_src;			
//			progress_cube.style.left=0;
//		}
//		audioInit();
//		//播放时间
//		audio.addEventListener("timeupdate",function()
//		{
//			playedTime();
//		})
//		function playedTime(){
//			if(audio.currentTime==audio.duration)
//			{
//				next_btn.onclick();
//				play_btn.onclick();
//			}
//			var n=audio.currentTime/audio.duration;
//			progress_cube.style.left=n*progress_bar.offsetWidth+"px";
//			initTime.innerHTML=format(audio.currentTime);
//			var id_num=parseInt(audio.currentTime);
//			var lyric_p=document.getElementsByTagName("p");
//			for(var i=0;i<lyric_p.length;i++)
//				{
//					lyric_p[i].index=i;
//				}
//			if(document.getElementById("lyric"+id_num))
//			{				
//				var obj=document.getElementById("lyric"+id_num);
//				for(var i=0;i<obj.index;i++)
//				{
//					lyric_p[i].className="played";
//				}
//				for(var j=obj.index;j<lyric_p.length;j++)
//				{
//					lyric_p[j].className="";
//				}
//				obj.className="yellow active";				
//				lyric_txt.style.top=lyric_con.offsetHeight/2-obj.offsetTop+"px";			
//			}
//		}
//		function format(time)
//		{
//			var time=parseInt(time);
//			var m=parseInt(time/60);
//			var s=parseInt(time%60);
//			m=zero(m);
//			s=zero(s);
//			function zero(num)
//			{
//				if(num<10)
//				{
//					num="0"+num;
//				}
//				return num;
//			}
//			return m+":"+s;
//		}
		//拖拽进度条
		var quan=document.getElementsByClassName('quan')[0];
		quan.ontouchstart=function(ev)
		{
			var ev=ev||window.event;
			var initX=ev.clientX-this.offsetLeft;
			this.ontouchmove=function(ev)
			{
				var ev=ev||window.event;
				var x=ev.clientX-initX;
				if(x<0){x=0}
					if(x>quan.offsetWidth-14){x=quan.offsetWidth-14}
				play_ctrl(x);
			}
			document.ontouchend=function()
			{
				document.ontouchmove=null;
				quan.ontouchmove=null;
			}
		}
		function play_ctrl(x){
				var timego=x/quan.offsetWidth*audio.duration;
				quan.style.left=x+"px";
				audio.currentTime=timego;
				playedTime();
		}
		//点击进度条位置
		quan.onclick=function(ev)
		{
			var ev=ev||window.event;
			var dis=ev.clientX-(container.offsetLeft+quan.offsetLeft)-7;
			quan.style.left=dis+"px";
			play_ctrl(dis);
		}/**/
		//拖动音量键
//		vol_cube.onmousedown=function(ev)
//		{
//			var ev=ev||window.event;
//			var initX=ev.clientX-vol_cube.offsetLeft;
//			this.onmousemove=function(ev)
//			{
//				var ev=ev||window.event;
//				var x=ev.clientX-initX;
//				if(x<0){x=0}
//					if(x>vol_bar.offsetWidth-11){x=vol_bar.offsetWidth-11}
//				var volresult=x/vol_bar.offsetWidth;
//				this.style.left=x+"px";
//				audio.volume=volresult;
//			}
//			document.onmouseup=function()
//			{
//				document.onmousemove=null;
//				vol_cube.onmousemove=null;
//			}
//		}		
//		//点击播放
//		play_btn.onclick=function()
//		{
//			clearInterval(obj.timer);
//			if(obj.play_mark)
//			{
//				this.innerHTML=obj.endplay_btn;
//				audio.play();
//				obj.timer=setInterval(function()
//				{	obj.rotateSum=obj.rotateSum+1;
//					photo_pic.style.transform="rotate("+obj.rotateSum+"deg)";
//				},30)
//			}
//			else{
//				this.innerHTML=obj.play_btn;
//				audio.pause();
//			}
//			obj.play_mark=!obj.play_mark;
//		}
//		//歌词处理
//		var lyric=document.getElementsByClassName("lyric")[0];
//		function lyric_ctrl()
//		{
//			var lyricObj=lyric[songIndex].content;
//			var temp=lyricObj.split("[");
//			var html="";
//			for(var i=0;i<temp.length;i++)
//			{
//				var arr=temp[i].split("]");
//				var text=(arr[1]);
//				var time=arr[0].split(",");
//				var temp2=time[0].split(".");
//				var ms=temp2[1];//毫秒
//				var temp3=temp2[0].split(":");			
//				var s=temp3[1];//秒
//				var m=temp3[0];//分
//				var s_sum=parseInt(m*60)+parseInt(s);
//				if(text)
//				{
//					html+="<p id='lyric"+s_sum+"'>"+text+"</p>";
//				}	
//			}
//			lyric_txt.innerHTML=html;
//		}
//		lyric_ctrl();
//		function iconinit(){
//			icon1.className="icon";
//			icon1.innerHTML=obj.icon1;
//			icon1.style.color="#fff";
//			icon2.className="icon";
//			icon2.style.color="#fff";
//		}
//		//喜欢 收藏
//		icon2.onclick=function()
//		{
//			if(this.innerHTML==obj.icon2)
//			{
//				this.innerHTML=obj.endicon2;
//				this.style.color="yellow";
//				this.className="icon yellow";
//			}
//			else{ 
//				this.innerHTML=obj.icon2;
//				this.style.color="#fff";	
//				this.className="icon";			
//			}
//		}
//		icon1.onclick=function()
//		{
//			if(this.style.color==obj.icon1_co)
//			{
//				this.innerHTML=obj.endicon1;
//				this.style.color="#f7759f";
//				this.className="icon pink";
//			}
//			else{ 
//				this.innerHTML=obj.icon1;
//				this.style.color=obj.icon1_co;	
//				this.className="icon";			
//			}
//		}
//	
//	
	
	

