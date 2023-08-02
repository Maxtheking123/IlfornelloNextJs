import React from "react";
import Link from "next/link";

const View3D = () => {
    const threeDmodel = document.getElementById("3dmodel");
            const twoDmodel = document.getElementById("flex-image-container");
           const  ViewButton = document.getElementById("View3D");

            if (threeDmodel.style.visibility == "visible") {
                threeDmodel.style.visibility = "hidden";
                twoDmodel.style.display = "block";
                ViewButton.textContent = "VIEW 3D";
            } else {
                threeDmodel.style.visibility = "visible";
                twoDmodel.style.display = "none";
                ViewButton.textContent = "VIEW 2D";
            }

            //if landscape
            console.log(1)
            if (window.innerHeight < window.innerWidth) {
            console.log(2)

                if (threeDmodel.src !== "https://render.lucio.se/house/ilfornello_100k#39b0050043bd7251b9383258bfc90fd2400361f200000000") {
                    console.log(3)
                    threeDmodel.src = "https://render.lucio.se/house/ilfornello_100k#39b0050043bd7251b9383258bfc90fd2400361f200000000"
                }
            }
            else {
                if (threeDmodel.src !== "https://render.lucio.se/house/ilfornello_100k#bf669da043bd7199bfedb9e1bfc85d56c02c28a400000000") {
                    threeDmodel.src = "https://render.lucio.se/house/ilfornello_100k#bf669da043bd7199bfedb9e1bfc85d56c02c28a400000000"
                }
            }
  // Your View3D function implementation here
  console.log("Clicked on VIEW 3D");
};

const View3DComponent = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
        rel="stylesheet"
      ></link>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link 
        href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap" 
        rel="stylesheet">
    </link>
      <div className="View3D" id="View3D" onClick={View3D}>
        <span>VIEW 3D</span>
      </div>
      <iframe
        id="3dmodel"
        src="https://render.lucio.se/house/ilfornello_100k#bf669da043bd7199bfedb9e1bfc85d56c02c28a400000000"
      />
      <div className="flex-image-container" id="flex-image-container">
        <div id="ProjectorPin" onClick={() => (window.location = "/projector")}>
          <div className="PinContainer">
            <div className="PinTriangle" />
            <div className="PinTriangleEdge" />
            <div className="PinText">
              <span>PROJECTOR</span>
            </div>
            <div className="PinRectangle"></div>
          </div>
        </div>
        <div id="PoolPin" onClick={() => (window.location = "/pool")}>
          <div className="PinContainer">
            <div className="PinTriangle" />
            <div className="PinTriangleEdge" />
            <div className="PinText">
              <span>POOL</span>
            </div>
            <div className="PinRectangle"></div>
          </div>
        </div>
        <div id="TheCavePin" onClick={() => (window.location = "/thecave")}>
          <div className="PinContainer">
            <div className="PinTriangle" />
            <div className="PinTriangleEdge" />
            <div className="PinText">
              <span>"THE CAVE"</span>
            </div>
            <div className="PinRectangle"></div>
          </div>
        </div>
        <div id="BarPin" onClick={() => (window.location = "/bar")}>
          <div className="PinContainer">
            <div className="PinTriangle" />
            <div className="PinTriangleEdge" />
            <div className="PinText">
              <span>BAR</span>
            </div>
            <div className="PinRectangle" />
          </div>
        </div>
        <div id="SpotPin" onClick={() => (window.location = "/swirland")}>
          <div className="PinContainer">
            <div className="PinTriangle" />
            <div className="PinTriangleEdge" />
            <div className="PinText">
              <span>SWIRLAND</span>
            </div>
            <div className="PinRectangle"></div>
          </div>
        </div>
        <div id="KitchenPin" onClick={() => (window.location = "/kitchen")}>
          <div className="PinContainer">
            <div className="PinTriangle" />
            <div className="PinTriangleEdge" />
            <div className="PinText">
              <span>KITCHEN</span>
            </div>
            <div className="PinRectangle"></div>
          </div>
        </div>
        <div className="image-container">
          <img
            className="image"
            id="mainimage"
            src="Ilfornello.jpg"
            alt="Your Image"
          />
          <div className="fade-out" />
        </div>
      </div>
    </>
  );
};

export default View3DComponent;
