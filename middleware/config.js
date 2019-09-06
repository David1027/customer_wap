/**
 * Created by IntelliJ IDEA.
 * User: Lijie HelloBox@outlook.com
 * Date: 2019/2/12
 * Time: 14:02
 * 判断浏览器是否手机
 **/
const MobileDetect = require('mobile-detect')

export default function({ store, route, redirect, req }) {
  if (req) {
    const md = new MobileDetect(req.headers['user-agent'])
    if (md.mobile()) {
    // 手机
      if (!(/^m[-]*[\w]*/g).test(route.name)) {
        redirect('/m' + route.fullPath)
      }
    } else {
      if ((/^m[-]*[\w]*/g).test(route.name)) {
        if (route.fullPath.length == 2) {
          redirect(route.fullPath.slice(2) + '/')
        } else {
          redirect(route.fullPath.slice(2))
        }
      } else if (route.name == 'm') {
        redirect(route.fullPath.slice(1))
      }
    }
  }
}
