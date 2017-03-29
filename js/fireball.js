function initFireball(startingX,startingY){
	var newFireball = {};
	newFireball.x = startingX;
	newFireball.y = startingY;
	newFireball.name = "JIM";

	var fireballimg = new Image();

	fireballimg.onload = function () {

		newFireball.width = 80;
		newFireball.height = fireballimg.height;

		newFireball.img = fireballimg;


		newFireball.render = function () {
			context.drawImage(newFireball.img,newFireball.x, newFireball.y);
					console.log("fireball ren");
		};

		newFireball.update = function () {
			//newFireball.flyingSprite.update();
		};
	};


	fireballimg.src ="imgs/Fireball.png";
	
	return newFireball;
	
}