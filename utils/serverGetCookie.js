/**
 * Created by IntelliJ IDEA.
 * User: Lijie HelloBox@outlook.com
 * Date: 2019/2/12
 * Time: 14:22
 * 服务端获取Cookie
 **/
const cookieparser = require('cookieparser')
const getCookie = function(req) {
  if (req && req.headers && req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie)
    return parsed
  } else {
    return {}
  }
}
export default getCookie
