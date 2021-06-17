var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"b80XB9X8E1Y0Ag6Xvy75GTFFf4zkbKxS","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"EPZdTR2ZW8IYcFHHgbUZiu7bQi_y2lWH","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"lAe1DNArd3C1XGsO243z2eKJwisIr3he","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var monkey = createSprite(200, 200, 20, 50);
monkey.setAnimation("monkey");
monkey.scale = 0.1;
//sorry but you cant download code on code.org. :(
var count = 0;

var ground = createSprite(200,380,900,20);
ground.x = ground.width / 2;

monkey.setCollider("circle", 0, 0, 300);

var bananaGroup = createGroup();
var obstacleGroup = createGroup();

function draw() {
  background(255);
  ground.velocityX = -(6 + 6*count/100);
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  text("Survival Time: "+ count, 250, 100);
  
  monkey.collide(ground);
  
  if(keyDown("space")){
      monkey.velocityY = -18;
    }
    
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnObstacles();
  
  spawnBananas();
  
  if(bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    count = count + 1;
    }
    
  if(obstacleGroup.isTouching(monkey)) {
    monkey.velocityX = 0;
    ground.velocityX = 0;
    obstacleGroup.velocityX = 0;
    obstacleGroup.velocityY = 0;
    bananaGroup.velocityX = 0;
    bananaGroup.velocityY = 0;
  }
  
  drawSprites();
}

function spawnObstacles() {
  if(World.frameCount % 80 === 0) {
    var obstacle = createSprite(400,335,10,40);
    obstacle.setAnimation("Stone");
    obstacle.velocityX = - (6 + 6*count/100);
    obstacle.setAnimation("Stone");
    
    obstacle.scale = 0.2;
    obstacle.lifetime = 70;

    obstacleGroup.add(obstacle);
  }
}

function spawnBananas() {
 
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = randomNumber(240,280);
    banana.setAnimation("Banana");
    banana.scale = 0.05;
    banana.velocityX = -3;
    
    banana.lifetime = 134;
  
    bananaGroup.add(banana);
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
