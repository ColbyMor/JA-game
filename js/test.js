function initTest(startingX,startingY){
	var t = {};
	t.x = startingX;
	t.y = startingY;
	
	var img = new Image();
	
	img.onload = function(){
		
		t.width = img.width;
		t.height = img.heigh;
		t.img = img;
		t.render = function(){
			context.drawImage(t.img,t.x,t.y);
		}
		
	}
	
	img.src = "imgs/Fireball.png";
	
	return t;
}