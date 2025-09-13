import './SocialSLidebar.css'

export function SocialSlidebar(){
  return(
    <div className="container-buttons">
    <button className="connect-button facebook-button" data-tooltip=" Facebook">
      <img src="icon/facebook.webp" className="icon-image" />
    </button>
    <button className="connect-button threads-button" data-tooltip=" Threads">
      <img src="icon/threads-social-media-logo-threads-icon-free-png.webp" className="icon-image" alt="Gmail" />
    </button>
    <button className="connect-button youtube-button" data-tooltip=" YouTube">
      <img src="icon/youtube-6616310_640.webp" className="icon-image" alt="YouTube" />
    </button>
    <button className="connect-button tiktok-button" data-tooltip=" TikTok">
      <img src="icon/tiktok.webp" className="icon-image" alt="TikTok" />
    </button>
  </div>
  )
}