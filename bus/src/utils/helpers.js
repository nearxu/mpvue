export function formatTransport(segments) {
  // return arr.map(m => m.bus && m.bus.buslines.map(item => item.name));
  const trps = [];
  for (let j = 0, L = segments.length; j < L; j++) {
    const arr = [];
    const segment = segments[j];

    if (segment.bus && segment.bus.buslines && segment.bus.buslines.length) {
      // 公交、地铁，每个片段里都可能有多种线路，所以提供的数据是一个数组
      let buslines = segment.bus.buslines;
      for (let i = 0, Li = buslines.length; i < Li; i++) {
        let name = buslines[i].name;
        arr.push(name);
      }

      arr.length && trps.push(arr);
    } else if (segment.railway && segment.railway.name) {
      // 火车、高铁、动车，提供的数据是一个json对象，也就是只有一条线路
      trps.push([segment.railway.name]);
    }
  }

  return trps;
}

export function formatDistance(meter) {
  return parseInt(meter) > 999
    ? `${(meter / 1000).toFixed(1)}公里`
    : `${meter}米`;
}

export function formatDuration(second) {
  var min = Math.ceil(parseInt(second) / 60); // 总分钟数

  var h = 0;
  var m = 0;

  m = min % 60; // 对总分钟数以60取余，得到不够一小时的分钟数
  h = Math.floor(min / 60); // 除以3600，然后向下取证去掉不够一个小时的分钟数，得到小时

  var res = "";
  h > 0 && (res += h + "小时");
  m > 0 && (res += m + "分钟");

  return res || "<1分钟";
}
