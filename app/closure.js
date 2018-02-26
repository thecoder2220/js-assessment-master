describe('closure', function() {

  let arr=["elem1e","elem2","elem3","elem4","elem5",];

  for (let i = 0; i<arr.length;i++) {
    window.setTimeout(
      (function (arg1) {

          return function () {
            it(arr[arg1]);
          };

        }
      )(i),1000
    );
  }
});

