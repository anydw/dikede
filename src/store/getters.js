const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  userId: state => state.user.userId,
  username: state => state.user.userInfo.data.userName,
  hrsaasTime: state => state.user.hrsaasTime
}
export default getters
