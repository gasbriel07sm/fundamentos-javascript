// CALBACK
const loginUser = (email, password, callback, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;

        if (error) {
            return onError(new Error('error in login!'))
        }

        console.log('user logged!');
        callback({ email });
    }, 1500)

    console.log('after setTimeout')
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000)
}

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({ title: 'video title' })
    }, 2500)
}

const user = loginUser('felipe', '1234', 
    (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({ videos })
        getVideoDetails(videos[0], (videoDetails) => {
            console.log(videoDetails)
        })
    })
}, 
    (error) => {
    console.log(error);
})
