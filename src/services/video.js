import videoMock from '../mock/video'

const getVideo = () => {
  return new Promise(resolve => {
    // 模拟异步调用
    setTimeout(() => {
      resolve(videoMock)
    }, 1000)
  })
}

export {
  getVideo
}
