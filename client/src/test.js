// The function foo() below has been implemented without
// much concern for readability. Without running this code,
// explain what it does and what the expected output of the
// following examples looks like:
//
// foo('XyXyXy10X3');
// foo('abc5def7g3');

function printBarGraph(formula) {
  var bars = formula.match(/[a-z ]+\d+/ig).map(function(bar) { //['XyXyXy10','X3']
    var barInfo = s1.match(/([a-z ]+)(\d+)/i);
    return {barLabel: barInfo[1], barHeight: barInfo[2]}; 
  }); // [{k:'XyXyXy', v:'10'}, {k:'X', v:'3'}]

  var width = Math.max.apply(this, bars.map(function(bar) { return bar.barLabel.length; })); // item {k:'XyXyXy', v:'10'} return 6, return 1; w = 6;
  var maxHeight = Math.max.apply(this, bars.map(function(bar) { return bar.barHeight; })); // r = 10;

  for (var y = maxHeight; y > 0; y--) {
    console.log(bars.map(function(bar) {
      const barFill = bar.barHeight >= y ? '*' : ' ';
      let barDraw = '';
      for (var x = 0; x < width; x++) {
        barDraw += barFill;
      }
      return out;
    }).join('  '));
  }
  /**
   * item.v = 3, ri = 10;
   * ch = "      "
   * ch = *, out = ""; out = "******        "; 
   *  "******        ";
   *  "******        ";
   *  "******        "; 
   *  "******        "; 
   *  "******        "; 
   *  "******        "; 
   *  "******        "; 
   *  "******  ******";
   * "******  ******";
   * "******  ******";
   */

   // w = 6, i.k.l = 6, 1
  console.log(data.map(function(item) {
    var name = '';
    for (var ni = 0; ni < (w - item.k.length) / 2; ni ++) { // ni = 0; ni < 2.5; ni++
      name += ' ';
    } // "   "
    name += item.k; // name = 'XyXyXy'  //"   X"
    for (var ni = name.length; ni < w; ni++) { // ni= 4; ni < 6; ni++)
      name += ' ';// "   X  "
    }
    return name;  //name = 'XyXyXy'
  }).join('  ')); // "XyXyXy     X  ";
}


foo('XyXyXy10X3');
//foo('abc5def7g3');