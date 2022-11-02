import http from '@/lib/http'
const api = {}
const files = require.context('./', false, /api\.js$/)
files.keys().forEach(file => {
  const apiInfo = files(file).api
  const apiFileName = file.replace(/.api.js|\.\//g, '')
  parseApi(apiFileName, apiInfo)
})

function parseApi (apiFileName, apiInfo) {
  api[apiFileName] = {}
  Object.keys(apiInfo).forEach(key => {
    const valueInfo = apiInfo[key] // api文件json的value
    if (typeof valueInfo === 'string') {
      api[apiFileName][key] = http.request.bind(http, { url: valueInfo, method: 'GET' })
    } else {
      api[apiFileName][key] = http.request.bind(http, valueInfo)
    }
  })
}
export default api
