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
              <div className="HomeIcon"></div>
          </div>
      </div>
      <span className="Headline">The Bar</span>
  </div>
  <div className="container">
      <div className="row">
          <div className="content">
              <video className="image" autoPlay loop muted controls>
                  <source src="BarImages/BarVideo.mp4" type="video/mp4"></source>
                  Your browser does not support the video tag.
              </video>
              <div className="description">
                  <p>The Ilfornello Bar area exists as a place to work, socialize, and relax while enjoying cold
                      drinks.</p>
              </div>
          </div>
      </div>

      <div className="row">
          <div className="content">
              <img loading="lazy" class="image" id="BarImg" src="/BarImages/BarImage2.JPG" width={400} height={600}
                     alt="Image 2"></img>
              <div className="description">
                  <p>The Bar is supplied with glasses and seats but everything else is brought by the guests.</p>
              </div>
          </div>
      </div>

      <div className="row">
          <div className="content">
              <div class="imagecontainer">
              <img class="image" id="FridgeImg" width={400} height={600} src="/BarImages/BarImage3.JPG"
                     alt="Image 2"></img>
                  </div>
              <div className="description">
                  <p>The Bar has a mini fridge that residents can stock with drinks of their choosing.</p>
              </div>
          </div>
      </div>

      <div className="row">
          <div className="content">
              <img class="image" src="/BarImages/BarImage1.JPG" width={400} height={600} alt="Image 2"></img>
              <div className="description">
                  <p>The Bar area also has plenty of seats, everything from bar stools, to chairs and even a swing and a
                      hanging hammock chair.</p>
                  <p>It's a great place to not only sit and drink but is also a great place to work.</p>
              </div>
          </div>
      </div>
  </div>
  </>
  )
}
