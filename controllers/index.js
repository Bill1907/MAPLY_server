module.exports = {
    githubLogin: require('./users/github'),
    googleLogin: require('./users/google'),
    kakaoLogin: require('./users/kakao'),
    logout: require('./users/logout'),
    getPlaylist: require('./playlist/getPlaylist'),
    createPlaylist: require('./playlist/createPlaylist'),
    modifyPlaylist: require('./playlist/modifyPlaylist'),
    deletePlaylist: require('./playlist/deletePlaylist')
}