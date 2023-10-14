const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '')

export const resolve = (path: string) => {
  const pathList = path.split('/').filter((x) => x)
  // ルートのときは/のみ
  if (!pathList.length) {
    return BASE_URL + '/'
  }
  // ファイルのとき
  if (/.*\..*/.test(pathList.at(-1) || '')) {
    return BASE_URL + '/' + pathList.join('/')
  }
  return BASE_URL + '/' + pathList.join('/')
}
