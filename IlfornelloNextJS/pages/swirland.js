import { useState, useEffect } from 'react'

export default function App() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
  <>
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  <div className="HeadlineContainer">
      <div className="home-button-container">
          <div className="home-button" onClick={() => window.location.href = '/'}>
             <div class="HomeIcon"></div>
    </div>
  </div>
  <span class = "Headline">Swirland</span>
</div>
  <div class="container">
    <div class="row">
      <div class="content">
        <video class="image" autoplay loop muted controls>
            <source src="SwirlandImages/SwirlandVideo.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <div class="description">
          <p>Swirland is a beautiful place to sit with friends or loved ones. It is also an excellent place to talk and enjoy the views.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
          <img class="image" src="SwirlandImages/SwirlandFire.JPG" alt="Image 2"></img>
        <div class="description">
          <p>At Swirland, grill your favorite treats at the fireplace!</p> <p> It's a perfect spot for fun and good food.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
          <img class="image" src="SwirlandImages/SwirlandCoolPic.JPG" alt="Image 2"></img>
        <div class="description">
           <p>"Swirland" got its name since the guests who made it were from Sweden and Ireland.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
        <img class="image" id="nightPic" src="SwirlandImages/SwirlandViewNight.jpg" alt="Image 2"></img>
        <div class="description">
          <p>It is an absolutely breathtaking place to sit and look at the views, especially at night!</p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
