(function($){

  var picArr = [
      'IMG_6509_zyt.png'
  ];

  var picWall = {
    doc: window.document, 
    wall: document.querySelector('#J_picWallCanvas'), 
    wallWrap: document.querySelector('#J_picWall'), 
    picArr: picArr, 
    srcPrefix: '//misc.aotu.io/o2/avatars/',
    picSize: 80, 
    navi: navigator.userAgent.toLowerCase().match(/mobile/), 

    init: function(){
      var self = this;

      self.picSize = (!!self.navi)?40:80;
      self.drawPic();
      window.addEventListener('resize', function(){
        self.drawPic();
      });
    }, 

    drawPic: function(){
      var self = this, 
        arr = [], 
        picFArr = [], 
        img = [],
        num = self.picArr.length, 
        width = window.document.documentElement.clientWidth, 
        height = self.wallWrap.offsetHeight, 
        column = Math.ceil(width / self.picSize), 
        row = Math.ceil(height/self.picSize), 
        total = column * row, 
        repeat = Math.ceil(total / num), 
        canvas = self.wall, 
        ctx = canvas.getContext('2d');

      self.wall.style.width = width + 'px';
      self.wall.style.height = height + 'px';

      self.wall.width = width;
      self.wall.height = height;

      // 生成打乱数组
      for(var re=0; re<repeat; re++){
        for(var i=0;i<num;i++){
          arr[i]=i;
        }
        arr.sort(function (){return 0.5 - Math.random()});
        for(var j=0; j<num; j++){
          var tag = arr[j];
          picFArr[num*re + j]=self.picArr[tag];
          // picFArr[num*re + j]=tag;
        }
      }

      // 将照片画上画布
      for(var r=1; r<=row; r++){
        for(var c=1; c<=column; c++){
          (function (c, r) {
            var dr = (c-1) * row + r - 1,
              posX = (c - 1) * self.picSize, 
              posY = (r - 1) * self.picSize;
            img[dr] = new Image();
            img[dr].addEventListener('load', (function(){
              img[dr].src = self.srcPrefix + picFArr[dr];
              if(!img[dr].complete){
                return function () {
                    ctx.drawImage(img[dr], posX, posY, self.picSize, self.picSize);
                  };
              }
              ctx.drawImage(img[dr], posX, posY, self.picSize, self.picSize);
            }()));
          })(c, r);
        }
      }
    }
};


//picWall.init();

})(jQuery);