'use strict';

const cloud = {
  startX: 100,
  startY: 10,
  width: 420,
  height: 270,
  shadowGap: 10,
  margin: 40,

  colors: ['rgba(0, 0, 0, 0.7)', 'rgba(255, 255, 255)'],
  texts: ['Ура вы победили!', 'Список результатов: ']
};


//Отрисовка прямоугольника
const renderCloud = function (ctx, x, y, width, height, fillColor) {
  ctx.fillStyle = fillColor;
  ctx.fillRect = (x, y, width, height);
};


//Вывод надписи на экан
const renderText = function (ctx, text) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  for (let i = 0; i < text.length; i++) {
    ctx.fillText(text[i], cloud.startX + cloud.margin, cloud.startY + (i + 1) * 25);
  }
};

window.renderStatistics = function(ctx, playersTimes, playersNames) {
    // renderCloud(ctx, cloud.startX + cloud.shadowGap, cloud.startY + cloud.shadowGap, cloud.width, cloud.height, cloud.colors[0]);
    // renderCloud(ctx, cloud.startX, cloud.startY, cloud.width, cloud.height, cloud.colors[1]);

    ctx.fillStyle = cloud.colors[0];
    ctx.fillRect(ctx, cloud.startX + cloud.shadowGap, cloud.startY + cloud.shadowGap, cloud.width, cloud.height);

    renderText(cloud.texts);
};

