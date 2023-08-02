import { useState, useEffect } from 'react'

export default function App() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<div class = "HeadlineContainer">
  <div class="home-button-container">
    <div class="home-button" onClick={() => window.location.href = '/'}>
                        <div className="HomeIcon"></div>
                    </div>
                </div>
                <span className="Headline">Projector</span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="content">
                        <video className="image" autoPlay loop muted>
                            <source src="ProjectorImages/ProjectorVid.mp4"
                                    type="video/mp4"></source>
                                Your browser does not support the video tag.
                        </video>
                        <div className="description">
                            <p>Ilfornello has a projector that the guests can borrow to have community movie night where
                                everyone is invited!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="content">
                        <img className="image"
                             src="ProjectorImages/ProjectorAreaPool.JPG"
                             alt="Image 2" id="ProjectorPoolArea"></img>
                            <div className="description">
                                <p>The Projector can be moved and so can the canvas. </p>
                                <p>There are two common places to place the projector. One is by the pool and is a
                                    perfect place to sit and watch a movie while enjoying the views and the pool.</p>
                            </div>
                    </div>
                </div>

                <div className="row">
                    <div className="content">
                        <img className="image"
                             src="ProjectorImages/ProjectorAreaTop.JPG"
                             alt="Image 2"></img>
                            <div className="description">
                                <p>The other common place to place the projector is a bit higher up and is also a great
                                    place to have it since it is a bit more private and is in range of the hammock
                                    incase you want to lay down and watch a movie.</p>
                            </div>
                    </div>
                </div>
            </div>
  </>
  )
}

