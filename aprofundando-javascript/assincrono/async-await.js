// PROMISE
const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            PromiseRejectionEvent(new Error('error in login'))
        }

        console.log('user logged')
        resolve({email})
    })
}

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getUserVideos')
            resolve(['video1', 'video2', 'video3'])
        }, 2000)
    })
}

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getVideoDetails')
            resolve({ title: 'video title' })
        }, 2500)
    })
}

//loginUser('felipe', '123456')
//    .then(user => getUserVideos(user.email))
//    .then((videos) => getVideoDetails(videos[0]))
//    .then(videoDetails => console.log({ videoDetails }))
//    .catch(e => console.log({ e }))

// async/await
const displayUser = async () => {
    try {
        const user = await loginUser('felipe', '1234')
        const videos = await getUserVideos(user.email)
        const videoDetails = await getVideoDetails(videos[0])
        console.log({ user })
        console.log({ videos })
        console.log({ videoDetails })
    }
    catch (e) {
        console.log({ e })
    }
}

displayUser()