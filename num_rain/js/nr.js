		var canvas=document.getElementById("canvas0");
		//获取权限
		var ctx=canvas.getContext("2d");
		//获取屏幕信息
		var screenInformation= window.screen;
		//控制台输出屏幕信息
		console.log(screenInformation);
		//设置屏幕信息
		canvas.width=screenInformation.width;
		canvas.height=screenInformation.height;
		
		//字体大小
		var fontSize=20;
		//字体
		var str="01";
		var cols=Math.floor((screenInformation.width)/fontSize);
		var X =[];
		for(var i=0;i<cols;i++){
			X.push(0);
		}


		var gradient=ctx.createLinearGradient(0,0,screenInformation.width,screenInformation.height);
		gradient.addColorStop("0","#ff0099");
		gradient.addColorStop("0.25","#00ccff");
		gradient.addColorStop("0.5","#ffff00");
		gradient.addColorStop("0.75","#cc66cc");
		gradient.addColorStop("0.1","#00ccff");

		function matrix(){
			ctx.fillStyle="rgba(0,0,0,0.02)";
			
			//清除画布
			ctx.fillRect(0,0,canvas.width,canvas.height);
			//设置字体颜色
			ctx.fillStyle=gradient;
			for(var i=0;i<cols;i++){
				var y=X[i]*fontSize;
				ctx.fillText(str[Math.floor(Math.random()*str.length)],i*fontSize,y);
				if(y >= screenInformation.height&&Math.random()>0.99){
					X[i]=0;
				}
				X[i]++;
			}
		}
		setInterval(matrix,30);