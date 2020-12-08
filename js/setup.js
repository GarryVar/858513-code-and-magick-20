var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var SIMILAR_CLASS = {
  setup: '.setup',
  similar: '.setup-similar',
  list: '.setup-similar-list',
  item: '.setup-similar-item',
  label: '.setup-similar-label'
}

var WIZARD_BODY_CLASS = {
  eyes: '.wizard-eyes',
  coat: '.wizard-coat',
  head: '.wizard-head'
}


var setup = document.querySelector(SIMILAR_CLASS.setup);
var setupSimilar = document.querySelector(SIMILAR_CLASS.similar);
var fragment = document.createDocumentFragment();


var randomizer = function(array) {
  return Math.floor(Math.random() * array.length);
};


var removeHidden = function(node, className) {
  node.classList.remove(className);
};


removeHidden(setup, 'hidden');
removeHidden(setupSimilar, 'hidden');


var similarElementList = document.querySelector(SIMILAR_CLASS.list);
var similarWizardElement = document.querySelector('#similar-wizard-template')
  .content
  .querySelector(SIMILAR_CLASS.item);



var createWizard = function(random, names, lastNames, coatsColors, eyesColors) {
  var wizard = {};
    wizard.name = names[random(names)] + ' ' + lastNames[random(lastNames)];
    wizard.coat = coatsColors[random(coatsColors)];
    wizard.eyes = eyesColors[random(eyesColors)];

  return wizard;
};


var wizards = [];
for(var i = 0; i < 4; i++) {
  wizards.push(createWizard(randomizer, NAMES, LAST_NAMES, coatColor, eyesColor));
};


var renderWizards = function(wizard) {
  // клонируем темплейт
  var wizardElement = similarWizardElement.cloneNode(true);


  // находим и вставляем имена, фамилии и.т.д
  wizardElement.querySelector(SIMILAR_CLASS.label).textContent = wizard[i].name;
  wizardElement.querySelector(WIZARD_BODY_CLASS.eyes).style.fill = wizard[i].eyes;
  wizardElement.querySelector(WIZARD_BODY_CLASS.coat).style.fill = wizard[i].coat;
  wizardElement.querySelector(WIZARD_BODY_CLASS.head).style.fill = wizard[i].head;

  // Вставляем магов в список
  fragment.appendChild(wizardElement);
  similarElementList.appendChild(fragment);
};

for(var i = 0; i < wizards.length; i++) {
  renderWizards(wizards);
};
