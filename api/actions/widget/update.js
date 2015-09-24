import load from './load';

export default function update(req) {
  return new Promise((resolve, reject) => {
    // write to database
    setTimeout(() => {
      if (Math.floor(Math.random() * 5) === 0) {
        reject('Oh no! 窗口小部件保存失败的20％的时间。 再试一次.');
      } else {
        const widgets = load(req);
        const widget = req.body;
        if (widget.color === 'Green') {
          reject({
            color: '我们不接受绿色小工具' // example server-side validation error
          });
        }
        if (widget.id) {
          widgets[widget.id - 1] = widget;  // id is 1-based. please don't code like this in production! :-)
        }
        resolve(widget);
      }
    }, 2000); // simulate async db write
  });
}
