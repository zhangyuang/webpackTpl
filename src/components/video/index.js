import React, { Component } from 'react'
import { connect } from 'dva'
import './video.css'

class Video extends Component {
  componentDidMount () {
    this.initPlayer(this.props.videoArr)
  }

  getVideo () {
    this.props.dispatch({
      type: 'video/get',
      payload: {}
    })
  }

  initPlayer (videoArr) {
    if (videoArr.length === 0) return
    videoArr.map(item => {
      const vid = item.itemResult.item[1].preview.vid
      if (!vid) return false
      const config = {
        id: 'youku-player',
        vid: vid
      }
      const uiConfig = {
        dash: { // 控制栏按钮隐藏配置
          full: true // 是否隐藏全屏按钮
        }
      }
      return window.YKPlayer.Player(vid, config, uiConfig)
    })
  }
  componentDidUpdate () {
    // this.initPlayer(this.props.videoArr)
  }
  render () {
    const videoArr = this.props.videoArr
    return (
      <div className='videoContainer'>
        <div id='playerWrap' >
          {
            videoArr.map((item, index) => {
              return (
                <div key={`video${index}`}>
                  {
                    item.template.tag !== 'PHONE_AD_B'
                      ? <div>
                        <div className='player' id={item.itemResult.item[1].preview.vid} />
                        <div className='player-footer'>
                          <div className='author'>
                            { item.itemResult.item[1].uploader.name.length > 6 ? item.itemResult.item[1].uploader.name.slice(0, 6) + '...' : item.itemResult.item[1].uploader.name }
                          </div>
                          <div className='comment'>
                            <img alt='' className='wifi-img' src='https://img.alicdn.com/tfs/TB1.XkGkxTpK1RjSZR0XXbEwXXa-72-72.png' />
                            <span className='comment-count'>{ item.itemResult.item[1].comments.count }</span>
                          </div>
                        </div>
                      </div>
                      : ''
                  }
                </div>
              )
            })
          }
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    videoArr: state.video.videoArr
  }
}

export default connect(mapStateToProps)(Video)
