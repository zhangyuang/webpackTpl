import * as videoService from '../services/video'

export default {
  namespace: 'video',
  state: {
    // videoArr: []
  },
  reducers: {
    saveVideo (state, action) {
      return { ...state, ...action.payload }
    }
  },
  effects: {
    * get ({ payload }, {call, put}) {
      const videoArr = yield call(videoService.getVideo)
      yield put({
        type: 'saveVideo',
        payload: {
          videoArr: videoArr
        }
      })
    }
  }

}
