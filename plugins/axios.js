export default function ({$axios}) {
  $axios.setHeader('AUTH', 'Bearer asdfkjashdf23094')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
}
