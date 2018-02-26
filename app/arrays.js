exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

  indexOf: function (arr, item) {

    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }

  },

  sum: function (arr) {

    let somme = 0;

    for (let i = 0, len = arr.length; i < len; i++) {
      somme += arr[i];
    }

    return somme;
  },

  remove: function (arr, item) {

    let newArr = [];

    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  },


removeWithoutCopy: function (arr, item) {

  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      arr.splice(i,1);
      i--;
      len--;
    }
  }
  return arr;
}
,

append: function (arr, item) {

  arr.push( item);
  return arr;

}
,

truncate: function (arr) {
  arr.pop();
  return arr;
}
,

prepend: function (arr, item) {
  arr.unshift(item);
  return arr;
}
,

curtail: function (arr) {
  arr.shift(arr);
  return arr;
}
,

concat: function (arr1, arr2) {

    return arr1.concat(arr2);

}
,

insert: function (arr, item, index) {

}
,

count: function (arr, item) {

}
,

duplicates: function (arr) {

}
,

square: function (arr) {

}
,

findAllOccurrences: function (arr, target) {

}
}
;
