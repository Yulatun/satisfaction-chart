# The initialization code
```html
<div id="chartID"></div>
<link href="https://spike4848.github.io/mindlode_graphic/static/css/main.e4750207.css" rel="stylesheet" /><script>
  const data = [
    { type: "excitement", score: 20.125 },
    { type: "fulfillment", score: .625 },
    { type: "selfesteem", score: 6 },
    { type: "progress", score: .5 },
    { type: "reward", score: -5.125 },
    { type: "security", score: .375 },
    { type: "contentment", score: -2.6 }
  ];

  window.SatisfactionChartScriptOnLoad = (function () { InitSatisfactionChart("chartID", data, settingsOverrides) });
</script><script defer="defer" src="https://spike4848.github.io/mindlode_graphic/static/js/main.fe8915b1.js"></script>
```

## The default settings

```
const defaultSettings = {
  excitement: {
    topText: 'EXCITED',
    bottomText: 'BORED',
    color: '#b83f3a',
    benchmark: 0.4,
    topEmoji: 'excited',
    bottomEmoji: 'bored',
    minValue: -50,
    maxValue: 50,
  },
  fulfillment: {
    topText: 'FULFILLED',
    bottomText: 'POINTLESS',
    color: '#e69846',
    benchmark: 0.4,
    topEmoji: 'fulfilled',
    bottomEmoji: 'pointless',
    minValue: -50,
    maxValue: 50,
  },
  selfesteem: {
    topText: 'PROUD',
    bottomText: 'EMBARASSED',
    color: '#f0ca00',
    benchmark: 0.4,
    topEmoji: 'proud',
    bottomEmoji: 'embarrassed',
    minValue: -50,
    maxValue: 50,
  },
  progress: {
    topText: 'VALUABLE',
    bottomText: 'STUCK',
    color: '#9acea8',
    benchmark: 0.4,
    topEmoji: 'valuable',
    bottomEmoji: 'stuck',
    minValue: -50,
    maxValue: 50,
  },
  reward: {
    topText: 'REWARDED',
    bottomText: 'DISDAINED',
    color: '#a6c6e4',
    benchmark: 0.4,
    topEmoji: 'rewarded',
    bottomEmoji: 'disdained',
    minValue: -50,
    maxValue: 50,
  },
  security: {
    topText: 'SAFE',
    bottomText: 'THREATENED',
    color: '#975ba1',
    benchmark: 0.4,
    topEmoji: 'safe',
    bottomEmoji: 'threatened',
    minValue: -50,
    maxValue: 50,
  },
  contentment: {
    topText: 'CONTENDED',
    bottomText: 'DESPONDENT',
    color: '#bd619a',
    benchmark: 0.4,
    topEmoji: 'contended',
    bottomEmoji: 'despondent',
    minValue: -50,
    maxValue: 50,
  },
};

"excitement" is the type of scale;
"topText" is the description of the highest value title;
"bottomText" is the description of the lowest value title;
"color" is the RGB value of the color;
"benchmark" is the benchmark value;
"topEmoji" is the emoji associated with the highest value;
"bottomEmoji" is the emoji associated with the lowest value;
"minValue" is the minimum value of the scale;
"maxValue" is the maximum value of the scale.
```

## Change the default settings

The default settings can be overridden by passing an object with the desired changes as the third parameter to the InitSatisfactionChart function.
```
const settingsOverrides = {
  excitement: {
    benchmark: 4,
  },
};

InitSatisfactionChart("chartID", data, settingsOverrides) 

```
