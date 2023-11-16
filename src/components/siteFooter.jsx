import React from 'react'

function siteFooter() {
  return (
    <>
  {/* Contact */}
  <div id="contact" className="w3-container w3-padding-64">
    <h1>Contact</h1>
    <p className="w3-text-blue-grey w3-large">
      <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
    </p>
    <p>
      You can also contact us by phone 00553123-2323 or email
      catering@catering.com, or send us a message here:
    </p>
    <form action="/action_page.php" target="_blank">
      <p>
        <input
          className="w3-input w3-padding-16"
          type="text"
          placeholder="Name"
          required=""
          name="Name"
        />
      </p>
      <p>
        <input
          className="w3-input w3-padding-16"
          type="number"
          placeholder="How many people"
          required=""
          name="People"
        />
      </p>
      <p>
        <input
          className="w3-input w3-padding-16"
          type="datetime-local"
          placeholder="Date and time"
          required=""
          name="date"
          defaultValue="2020-11-16T20:00"
        />
      </p>
      <p>
        <input
          className="w3-input w3-padding-16"
          type="text"
          placeholder="Message \ Special requirements"
          required=""
          name="Message"
        />
      </p>
      <p>
        <button className="w3-button w3-light-grey w3-section" type="submit">
          SEND MESSAGE
        </button>
      </p>
    </form>
    <img alt="test" src="https://www.w3schools.com/w3css/map.jpg" className="w3-image" style={{ width: "100%" }} />
    <p className="w3-center w3-padding">
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        
      >
        w3.css
      </a>
    </p>
  </div>
  {/* End Content */}
</>

  )
}

export default siteFooter
