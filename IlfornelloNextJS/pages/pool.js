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
      <div class="HomeIcon"></div>
    </div>
  </div>
  <span class = "Headline">The Pool</span>
</div>
  <div class="container">
    <div class="row">
      <div class="content">
        <video class="image" autoplay loop muted>
          <source src="PoolImages/PoolVid.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <div class="description">
          <p>IlFornello is equipped with a pool area! this area is perfect for chilling and cooling off from the Italian heat!</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
          <img class="image" src="PoolImages/PoolImg.JPG" alt="Image 2" id="PoolVid"></img>
        <div class="description">
          <p>The pool is 1.5 meters deep and is 4 meters wide and 10 meters long. It is heated by the sun and is extremely refreshing!</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
          <img class="image" src="PoolImages/PoolHammock.JPG" alt="Image 2"></img>
        <div class="description">
          <p>Behind the pool there is a hammock to lay and relax in</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
          <img class="image" src="PoolImages/PoolShowerImg.JPG" alt="Image 2" id="PoolShower"></img>
        <div class="description">
          <p>Next to the pool there is a shower to shower of after a swim in the pool!</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
          <img class="image" src="PoolImages/PoolSeating.JPG" alt="Image 2"></img>
        <div class="description">
          <p>Next to the pool there are plenty of sunbeds to lay and chill in next to the pool!</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="content">
          <img class="image" src="PoolImages/PoolHouseThing.JPG" alt="Image 2" id="PoolHouse"></img>
        <div class="description">
          <p>Next to the pool there is also a table with some chairs under a sun roof which is a great place to sit and eat or just relax.</p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

