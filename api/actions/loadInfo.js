export default function loadInfo() {
  return new Promise((resolve) => {
    resolve({
      message: '这来自API服务器',
      time: Date.now()
    });
  });
}
