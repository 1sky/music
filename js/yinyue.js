$(function(){
		//歌词动
  var geci=$('.asd').height();
//	s=setInterval(function(){
// 		$('.asd').css('top',-geci+'px')
// 		
// 		
// 	},1)
	function s(){
		$('.asd').css('top',-geci+'px')
	}
	$('#touxiang').on('touchend',function(){
		$('.box').css('transform','translateY(0)')
		$('.xiao').css('bottom','-0.7rem');
	})
	$('.a').on('touchend',function(){
		$('.box').css('transform','translateY(100%)');
		$('.xiao').css('bottom','0');
		$('.xiala').css('bottom','-45%')
	})
//	播放暂停
var y;
	var audio =  $('#audio').get(0);
	$('.d').on('touchend',function(){
//		if(audio.paused){
			audio.play()
			$('.gg').css('display','block')
			$('.d').css('display','none')
		y=setInterval(s,1)
//		}else{
			
//		}
	})
	//歌曲状态
//	if(audio.play()){
//		$('.gg').css('display','block');
//		$('.kk').css('display','block')
//		$('.d').css('display','none')
//		$('.bb').css('display','none')
//	}
//	if(audio.pause()){
//		$('.gg').css('display','none');
//		$('.kk').css('display','none')
//		$('.d').css('display','block')
//		$('.bb').css('display','block')
//	}



	
	$('.gg').on('touchend',function(){
		audio.pause()
		$('.gg').css('display','none');
		$('.d').css('display','block');
	})
	$('.bb').on('touchend',function(){
		audio.play()
		$('.kk').css('display','block')
		$('.bb').css('display','none')
		var y=setInterval(s,1)
	})
	$('.kk').on('touchend',function(){
		audio.pause()
		$('.bb').css('display','block')
		$('.kk').css('display','none')
		clearInterval(y);
	})
//	$audio.on('loadstart',function(){
//		
//	})
//	$audio.on('play',function(){
//		
//	})
//	$audio.on('pause',function(){
//		
//	})
//	$audio.on('seek',function(){
//		
//	})
//	$audio.on('timeupdate',function(){
//		
//	})
//	$audio.on('ended',function(){
//		
//	})
//	$audio.on('progress',function(){
//		
//	})
//	$audio.on('canplay',function(){
//		
//	})
//	$audio.on('loadstart',function(){
//		
//	})



//歌曲列表
//  var list=
	
//	闪屏
 	var t=setInterval(function(){
 		$('.flash').css('display','none')
 		
 		
 	},3000)
//下拉框	
$('.f').on('touchend',function(){
	$('.xiala').css('bottom','0');
	
})
	$(".fff").on('touchend',function(){
		$('.xiala').css('bottom','-45%');
	})
	$('.quxiao').on('touchend',function(){
		$('.xiala').css('bottom','-45%');
	})
//收藏
	var tt=$('.l').css('color','$color');
	$('.l').on('touchend',function(){
		if(tt){
			$('.l').css('color','red')
		}else{
			$('.l').css('color','$color')
		}
		
	})
//遍表单
	for(var i=0;i<$('.uuu').length;i++){
		
		$($('.uuu')[i]).on('touchend',function(){

			$('.uuu').removeClass('hong')
			$(this).addClass('hong');
		})
	}
	
	for(var i=0;i<$('.rr').length;i++){
		
		$($('.rr')[i]).on('touchend',function(){

			$('.rr').removeClass('cu')
			$(this).addClass('cu');
			$(this).find(".we").addClass("block")
//			console.log(this)
//			var pp=
			var we=$('.we');
			for(var j=0;j<we.length;j++){
				we.removeClass('block')
				$(we).addClass('block');
			}
	})
	}

//	目录
	$('#mulu').on('touchend',function(){
		$('.list').css('bottom','0')
	})
	$('#mulu2').on('touchend',function(){
		$('.list').css('bottom','0')
	})
	$('#guanbi').on('touchend',function(){
		$('.list').css('bottom','-1.8rem')
	})



//	切歌
	var currentIndex=1;
	var musics=[
		{
			name:"三寸天堂",
			author:"严艺丹",
			src:"music/三寸天堂.mp3",
			tou:"img/9.png",
			zhuan:"步步惊情",
			beijinga:"img/7.jpg"
		},
		{
			name:"绅士",
			author:"薛之谦",
			src:"music/绅士.mp3",
			tou:"img/薛之谦.jpg",
			zhuan:"绅士",
			beijinga:"img/a.png"
		},
		{
			name:"地心",
			author:"汪峰",
			src:"music/地心.mp3",
			tou:"img/单冲锋.jpg",
			zhuan:"北京爱情故事",
			beijinga:"img/b.png"
		},
		{
			name:"难道",
			author:"苏立生",
			src:"music/难道.mp3",
			tou:"img/苏立生.jpg",
			zhuan:"只因有你",
			beijinga:"img/d.png"
		}	
	]
	
	function render(){
			$("#lists").empty();
			$.each(musics, function(i,v) {
				var c=(i==currentIndex)?"active":"";
				$('<li><span class="b">'+v.name+'</span><span class="e">'+v.author+'</span><span class="iconfont c">&#xe665;</span><span class="iconfont d">&#xe65e;</span></li>').appendTo("#lists");
		});
	}
	
	//下一首要执行的函数
	function next(){
		currentIndex+=1;
		if(currentIndex == musics.length){
			currentIndex=0;
		}
		audio.src=musics[currentIndex].src;
		$("#touxiang").html("<img src='"+musics[currentIndex].tou+"' alt=''  class='aa'/>");
		$(".geming").html(musics[currentIndex].name);
		$('.yanchang').html(musics[currentIndex].author);
		$(".bei").html("<img src='"+musics[currentIndex].beijinga+"' alt='' class='beijing'/>");
		render();
		audio.play();
	}
	$("#shang").on("touchend",function(){
		next();
		$('.gg').css('display','block');
		$('.kk').css('display','block')
		$('.d').css('display','none')
		$('.bb').css('display','none')
	})
	//上一世要执行的函数
	function prev(){
		currentIndex-=1;
		if(currentIndex == -1){
			currentIndex=musics.length-1;
		}
		audio.src=musics[currentIndex].src;
		$("#touxiang").html("<img src='"+musics[currentIndex].tou+"' alt=''  class='aa'/>");
		$(".geming").html(musics[currentIndex].name);
		$('.yanchang').html(musics[currentIndex].author);
		$(".bei").html("<img src='"+musics[currentIndex].beijinga+"' alt='' class='beijing' />");
		render();
		audio.play();
	}
	$("#xia").on("touchend",function(){
		prev();
		$('.gg').css('display','block');
		$('.kk').css('display','block')
		$('.d').css('display','none')
		$('.bb').css('display','none')
	})
	$("#xia2").on("touchend",function(){
		prev();
		$('.gg').css('display','block');
		$('.kk').css('display','block')
		$('.d').css('display','none')
		$('.bb').css('display','none')
	})
//	var tt=$('.gg').css('display','block');
//	var ttt=$('.gg').css('display','none');
//	if(tt){
//		$('.kk').css('display','block');
//		$('.bb').css('display','none');
//	}else if(ttt){
//		$('.kk').css('display','none');
//		$('.bb').css('display','block');
//	}
//	//列表删除
//	$("#list").on("touchend",".d",function(){
//		var li=$(this).closest("li");
//		var index=li.index();
//		musics.splice(index,1);
//		if(index==currentIndex){
//			if(musics[currentIndex]){
//				audio.src=musics[currentIndex].src;
//			}else{
//				audio.src="";
//			}
//		}else if(index>currentIndex){
//			//不做任何事情
//		}else if(index<currentIndex){
//			currentIndex-=1;
//		}
//		render();
//	})
//	//列表新增
//	$(".song-list").on("touchend","div",function(){
//		var d=$(this).attr("data-v");
//		render()
//	})
//	$("#list").on("touchend","li",function(){
//		var index=$(this).index();
//		currentIndex=index;
//		audio.src=musics[currentIndex].src;
//		render();
//	})
//	render();
	
		//进度条点击
		function format(v){
			v=Math.floor(v);
			var s=v % 60;
			s=(s<10)?("0"+s):s;
			var m=Math.floor(v/60);
			return m+":"+s;
		}
		//歌曲的结束时间
		var time2=$('.time2')
		$(audio).on("canplay",function(){
			time2.html(format(audio.duration));
		})
		//歌曲当前已播放时长以及进度条的移动
		var jindu=$('#jindu')
		var quan=$(".quan")
		var time=$('.time')
		$(audio).on("timeupdate",function(){
			time.html(format(audio.currentTime));
			var left=jindu.width() * audio.currentTime/audio.duration;
			quan.css("left",left);
		})
			//进度条拖拽
//		quan.on("touchend",false);
//		quan.on('touchstart',function(e){
//			var offsetx=e.originalEvent.changedTouches[0].clientX-quan.offset().left;
//			var r=quan.width()/2;
//			var start=r-e.offsetx;
//			$(document).on('touchmove',function(e){
//				var left=e.originalEvent.changedTouches[0].clientX; - jindu.position().left + start;
//				var c=left / jindu.width() * audio.duration;
//				if(c>=audio.duration||c<=0){
//					return;
//				}
//				audio.currentTime=c;
//			})
//			return false;
//		})
//	
//			$(document).on('touchend',function(){
//				$(document).off('touchmove');
//			})
//	
	
//	歌词
//var lyric=[{
//[ti:三寸天堂]
//[ar:刘诗诗]
//[al:电视剧《步步惊心》片尾曲]
//[by:唐门意幽]
//[00:00.84]三寸天堂（电视剧《步步惊心》插曲）
//[00:11.61]
//[00:15.80]唱：严艺丹
//[00:20.31]lrc:唐门意幽
//[00:23.45]
//[00:26.47]
//[02:22.58][00:36.05]停在这里不敢走下去
//[02:28.74][00:41.94]让悲伤无法上演
//[02:35.63][00:47.48]下一页
//[02:36.83][00:49.65]你亲手写上的离别
//[02:41.68][00:54.49]由不得我拒绝
//[02:48.11][01:01.23]这条路我们走得太匆忙
//[02:54.57][01:07.64]拥抱着并不真实的欲望
//[03:00.63][01:14.04]来不及等不及回头欣赏
//[03:07.66][01:20.54]木兰香遮不住伤
//[01:25.72][03:48.54]不再看天上太阳透过云彩的光
//[01:32.22][03:54.94]不再找
//[01:34.18][03:57.03]约定了的天堂
//[01:38.74][04:01.32]不再叹你说过的人间世事无常
//[01:45.23][04:07.91]借不到的三寸日光。
//[01:53.09]
//[03:19.23]不再看天上太阳透过云彩的光
//[03:25.50]不再找
//[03:27.74]约定了的天堂
//[03:32.24]不再叹你说过的人间世事无常
//[03:38.67]借不到的三寸日光。
//[04:14.33]那天堂是我爱过你的地方
//[04:23.63]
//[04:25.59]
//},
//{
//[ti:绅士]
//[ar:薛之谦]
//[00:00.23]绅士 - 薛之谦
//[00:07.54]词：薛之谦
//[00:10.71]曲：薛之谦
//[00:13.55]
//[00:19.28]好久没见了什么角色呢
//[00:23.52]细心装扮着
//[00:25.31]白色衬衫的袖扣是你送的
//[00:31.98]尽量表现着像不在意的
//[00:36.17]频繁暴露了自欺欺人者
//[00:41.55]越掩饰越深刻
//[00:44.59]你说我说听说
//[00:47.87]忍着言不由衷的段落
//[00:52.16]我反正决定自己难过
//[00:58.73]
//[01:01.50]我想摸你的头发
//[01:03.70]只是简单的试探啊
//[01:07.04]
//[01:09.79]我想给你个拥抱
//[01:12.13]像以前一样可以吗
//[01:16.92]你退半步的动作认真的吗
//[01:21.58]小小的动作伤害还那么大
//[01:25.86]我只能扮演个绅士
//[01:29.05]才能和你说说话
//[01:33.13]
//[01:34.83]我能送你回家吗
//[01:37.44]可能外面要下雨啦
//[01:40.63]
//[01:43.51]我能给你个拥抱
//[01:45.75]像朋友一样可以吗
//[01:49.12]
//[01:50.93]我忍不住从背后抱了一下
//[01:55.30]尺度掌握在不能说想你啊
//[01:59.29]你就当刚认识的绅士
//[02:02.88]闹了个笑话吧
//[02:07.95]
//[02:21.36]尽量表现着善解人意的
//[02:25.62]频繁暴露了不欲人知的
//[02:31.18]越掩饰越深刻
//[02:34.13]想说听说别说
//[02:37.30]忍着言不由衷的段落
//[02:41.43]我反正注定留在角落
//[02:48.33]
//[02:50.57]我想摸你的头发
//[02:53.23]只是简单的试探啊
//[02:59.00]我想给你个拥抱
//[03:01.62]像以前一样可以吗
//[03:05.32]
//[03:06.74]你退半步的动作认真的吗
//[03:11.16]小小的动作伤害还那么大
//[03:15.28]我只能扮演个绅士
//[03:18.57]才能和你说说话
//[03:22.44]
//[03:24.41]我能送你回家吗
//[03:26.95]可能外面要下雨啦
//[03:32.27]我能给你个拥抱
//[03:35.32]像朋友一样可以吗
//[03:38.94]
//[03:40.39]我忍不住从背后抱了一下
//[03:44.87]尺度掌握在不能说想你啊
//[03:48.77]你就当刚认识的绅士
//[03:52.42]闹了个笑话吧
//[03:56.62]
//[03:58.28]你能给我只左手
//[04:00.53]牵你到马路那头吗
//[04:04.18]
//[04:06.09]我会像以前一样
//[04:09.00]看着来往的车子啊
//[04:14.19]我们的距离在眉间皱了下
//[04:18.73]迅速还原成路人的样子啊
//[04:22.98]越有礼貌我越害怕
//[04:26.06]绅士要放得下	
//},
//{[ver:v1.0]
//[ti:不好不热]
//[00:01.36]地心 - 汪峰
//[00:11.32]忽然间黄昏像雨落下
//[00:17.41]夕阳飘洒金黄了我的忐忑
//[00:26.25]在眼前你就像溪流
//[00:32.33]像朵火焰像星辰像一个谜
//[00:41.24]我是如此的爱着你
//[00:48.80]几乎已经彻底忘却这个世界
//[00:59.14]你充满了我的全部思绪
//[01:10.08]像紫罗兰香般挥之不去
//[01:16.87]这感觉就像是完全的淹没
//[01:25.05]爱已将我深埋地心
//[01:35.37]我该拿什么留住你
//[01:41.74]给你穷瘠的街巷破碎的星星
//[01:50.68]给你绝望彩虹还是
//[01:56.73]永恒凝望孤星升腾的叹息
//[02:05.71]我是这样的爱着你
//[02:13.17]几乎已经彻底抛弃那个自己
//[02:23.43]你充满了我的辽阔心底
//[02:34.50]像深冬的雪般铺天漫地
//[02:41.22]这思念就像是无尽的掩埋
//[02:49.45]你已将我深埋地心
//[03:24.41]终点其实是被彻底忘记
//[03:30.47]旅程不过是场善意的触骨铭心
//[03:39.42]你可曾记得我的孤寂
//[03:45.43]我们早已在起点各奔东西
//[03:54.45]我会怎样的爱着你
//[04:01.82]直到这段倔强生命最终停息
//[04:12.34]你充满了我的全部思绪
//[04:23.38]像紫罗兰香般挥之不去
//[04:30.18]这感觉就像是完全的淹没
//[04:38.37]爱已将我深埋地心
//[04:46.26]你充满了我的辽阔心底
//[04:57.39]像深冬的雪般铺天漫地
//[05:04.17]这思念就像彻底的掩埋
//[05:12.40]你已将我深埋地心},{[ti:难道]
//[ar:羽泉]
//[al:冷酷到底]
//[by:www.5nd.com]
//[00:01]--==羽泉·难道==--
//[00:42]夜深时
//[00:44]有没有人为你点是一盏灯
//[00:49]在你入梦后
//[00:52]有没有人为你把手放平
//[00:57]当你伤心时
//[01:00]有没有人为你擦干眼泪
//[01:03]在你失落后
//[01:06]有没有人把你拥入怀中
//[01:13]难道——你真的没有感觉到
//[01:21]你对我来说是多么的重要
//[01:29]难道——你真的没有感觉到
//[01:37]我的爱不需要再说什么天荒地老
//[01:40]
//[02:30]
//[02:31]夜深时
//[02:33]有没有人为你点是一盏灯
//[02:38]在你入梦后
//[02:41]有没有人为你把手放平
//[02:46]当你伤心时
//[02:49]有没有人为你擦干眼泪
//[02:53]在你失落后
//[02:55]有没有人把你拥入怀中
//[03:00]难道——你真的没有感觉到
//[03:08]你对我来说是多么的重要
//[03:15]难道——你真的没有感觉到
//[03:23]我的爱不需要再说什么天荒地老
//[03:38]难道——你真的没有感觉到
//[03:46]你对我来说是多么的重要
//[03:53]难道——你真的没有感觉到
//[04:01]我的爱不需要再说什么天荒地老}]
//	
//	
//	var lyric=$('.lyric')
//	function lyric_ctrl()
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
	

	
	
	
})
