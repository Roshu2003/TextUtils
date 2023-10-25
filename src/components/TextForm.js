import React , {useState} from 'react'

export default function TextForm(props) {

    const handleUpclicked = ()=> {
        let newText = Text.toUpperCase();
        setText(newText)
        props.showalert("Converted to Uppercase","success");
    }

    const handleLwclicked = ()=> {
        let newText = Text.toLowerCase();
        setText(newText)
        props.showalert("Converted to Lowercase","success");
    }

    const handleClearclicked = ()=> {
        let newText = "";
        setText(newText)
        props.showalert("Text is cleared","success");
    }
    const handleCopyclicked = ()=> {
        let copytext = document.getElementById("mybox")
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        document.getSelection().removeAllRanges();
        props.showalert("Text is Copied","success");
    }
    const handleExtraspace = ()=> {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra space is removed","success");
    }

    const handleonchange = (event)=> {
      setText(event.target.value);
    }

    const [Text,setText] = useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='light'?'black':'white'}} onChange={handleonchange} value={Text} rows="10"></textarea>
      </div>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpclicked} >Convert To UpperCase</button>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLwclicked} >Convert To LowerCase</button>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearclicked} >Clear</button>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyclicked} >Copy</button>
      <button disabled = {Text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraspace} >Remove Extra spaces</button>
    </div>
   <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
   <h1>Your Text Summary</h1>
    <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {Text.length} Charector</p>
    <p>{0.008*Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
    <h2>Preview</h2>
    <p>{Text}</p>
   </div>
    </>
  )
}
