const BASE = '/test'

export const resolve = (path: string) => {
  const pathList = path.split('/').filter((x) => x)
  // ルートのときは/のみ
  if (!pathList.length) {
    return BASE + '/'
  }
  // ファイルのとき
  if (/.*\..*/.test(pathList.at(-1) || '')) {
    return BASE + '/' + pathList.join('/')
  }
  return BASE + '/' + pathList.join('/') + '/'
}
