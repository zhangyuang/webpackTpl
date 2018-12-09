import Video from '../components/video'
import { getVideo } from '../services/video'
const routes = [
  {
    path: '/',
    exact: true,
    component: Video,
    prefetch: getVideo
  }
]

export default routes
