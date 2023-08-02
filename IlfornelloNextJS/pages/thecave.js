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
  <span class = "Headline">The Cave</span>
</div>
  <div class="container">
    <div class="row">
      <div class="content">
        <video class="image" autoplay preload="auto" loop muted>
          <source src="TheCaveImages/TheCaveVideo.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <div class="description">
          <p>"The Cave" is mainly a place to sit and work or study. It is the coolest area at the fornello and provides many options of seating.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
          <img class="image" src="TheCaveImages/TheCaveCaveImage.JPG" alt="Image 2"></img>
        <div class="description">
          <p>In "The Cave" you can sit at anything from bigger tables in a darker environment, to desks in natural sunlight.</p>
          <p>There is also, of course, excellent Wi-Fi access everywhere at the fornello including The Cave.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
          <img class="image" src="TheCaveImages/TheCaveCouchImage.JPG" alt="Image 2"></img>
        <div class="description">
          <p>At the back of The Cave there are two comfortable armchairs and is a perfect place to sit if you want to be by yourself when you work</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
        <img class="image" src="TheCaveImages/TheCaveComputer.JPG" alt="Image 2" ></img>
        <div class="description">
          <p>There is also a screen available to connect your computer to if you like to work on a bigger screen.</p>
          <p>The screen already has an HDMI cable to make it easier for you to use it.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="content">
        <img class="image" src="TheCaveImages/TheCaveTable2.JPG" alt="Image 2"></img>
        <div class="description">
          <p>There are also bigger tables available not only in the back of The Cave but also in the front where you get plenty of natural light.</p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
