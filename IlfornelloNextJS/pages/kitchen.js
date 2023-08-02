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
  <span class = "Headline">The Outdoor Kitchen</span>
</div>
  <div class="container">
    <div class="row">
      <div class="content">
        <video class="image" autoplay loop muted controls>
          <source src="KitchenImages/KitchenVid.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <div class="description">
          <p>The Outdoor Kitchen is a communal cooking space at the fornello where everyone can cook their food!</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
        <img class="image" src="KitchenImages/KitchenPizzaOven.JPG" alt="Image 2"></img>
        <div class="description">
          <p>In the outdoor kitchen there is a pizza oven where residents can make pizza. </p>
          <p>Occasionally, the residents also host "pizza nights"</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
        <img class="image" src="KitchenImages/KitchenSeating.JPG" alt="Image 2"></img>
        <div class="description">
          <p>In the outdoor kitchen there is also a large table for dining with families and friends or other residents!</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="content">
        <img class="image" src="KitchenImages/KitchenFridge.JPG" alt="Image 2"></img>
        <div class="description">
          <p>There is also a communal fridge for residents to keep food, there is also a fridge in most apartments.</p>
          <p>There are communal foods and spices, but most foods are bought individually.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="content">
        <img class="image" src="KitchenImages/KitchenDishes.JPG" alt="Image 2"></img>
        <div class="description">
          <p>The kitchen is also supplied with dishes and cutlery for the residents to use!</p>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

