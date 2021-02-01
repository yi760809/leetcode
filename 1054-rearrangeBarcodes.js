var rearrangeBarcodes = function (barcodes) {
  const map = {};

  for (let i = 0; i < barcodes.length; i++) {
      const barcode = barcodes[i];
      map[barcode] = (map[barcode] || 0) + 1;
  }

  const list = Object.keys(map).map(b => [Number(b), map[b]]);
  list.sort((a, b) => a[1] - b[1])

  const res = Array(barcodes.length);
  let i = 0;

  while (list.length) {
      let [barcode, count] = list.pop();

      while (count-- > 0) {
          if (i >= barcodes.length) i = 1;

          res[i] = barcode;
          i += 2;
      }
  }
  return res;
};