import React from 'react'

export default function About(props) {
  
  let mystyle = {
    color : props.mode === 'dark'?'white':'#042743',
    backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white'
  }

  return (
    <>
    <div class="container" style={ {color : props.mode === 'dark'?'white':'#042743'}}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyse Your Text
      </button>
    </h2>
    <div id="collapseOne" style={mystyle}  className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils gives you a way to Analyse your text quickly and efficiently. Be it word count , character count or many things.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Us
      </button>
    </h2>
    <div id="collapseTwo" style={mystyle}  className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that provieds instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" style={mystyle}  className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter softwere works in any web browser such as Chrome , FireFox , Internet Explorer , Safari and Opera. It sute to count characters in facebook , blog , books , excel document , pdf document etc.
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
