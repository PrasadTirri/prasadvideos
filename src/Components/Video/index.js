import ReactPlayer from 'react-player'

import './index.css'

const Video = props => {
  const {videoDetails, setActiveId} = props
  const {videoUrl, id} = videoDetails

  const onClickButton = () => {
    setActiveId(id)
  }

  return (
    <li className="each-video-container">
      <button type="button" onClick={onClickButton} className="btn">
        <ReactPlayer url={videoUrl} width="100%" height="10%" />
      </button>
    </li>
  )
}

export default Video
