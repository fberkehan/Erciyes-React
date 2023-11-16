import React from 'react'

function siteHeader() {
  return (
    <>
  {/* Navigation (Sits on top) */}
  <div className="w3-top w3-bar w3-white w3-padding w3-card w3-wide">
    <a href="#home" className="w3-bar-item w3-button">
      Home
    </a>
    {/* Right-sided navbar links. Hide them on small screens */}
    <div className="w3-right w3-hide-small">
      <a href="/urunler" className="w3-bar-item w3-button">
        Products
      </a>
    </div>
  </div>
</>

  )
}

export default siteHeader
