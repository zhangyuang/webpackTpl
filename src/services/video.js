import videoMock from '../mock/video'

const getVideo = () => {
  return Promise.resolve(videoMock)
}

export {
  getVideo
}
