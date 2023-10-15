/**
 * 末尾にスラッシュのつかない BASE_URL
 *
 * @type {string}
 * @example
 * // If import.meta.env.BASE_URL is "/test/"
 * const baseUrl = "/test"
 */
export const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '')

export const resolve = (path: string): string => {
  const pathList = path.split('/').filter((x) => x)
  // ルートのときは/のみ
  if (!pathList.length) {
    return baseUrl + '/'
  }
  // ファイルのとき
  if (/.*\..*/.test(pathList.at(-1) || '')) {
    return baseUrl + '/' + pathList.join('/')
  }
  return baseUrl + '/' + pathList.join('/')
}
