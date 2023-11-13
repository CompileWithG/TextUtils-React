import React,{useState} from 'react'
export default function Textform(props) {
    const[text,setText]=useState("Enter Text here")
    const changetext=(event)=>{
        setText(event.target.value);
    }
    let uppercase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("You Have Converted Text To UpperCase","success");
        document.title='TextUtils-UpperCase';
    }
    let lowercase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("You Have Converted Text To LowerCase","success");
        document.title='TextUtils-LowerCase';
    }
    let cleartext=()=>{
        setText('')
        props.showAlert("You Have Cleared The Text","success");
    }
    let copytext=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("You Have Cleared The Text","success");
    }
  return (
    <div className='container mx-7'>
<div class="mb-3">
    <h2>Try-TextUtils-Word Conter,Character Counter,UpperCase to LowerCase and LowerCase To UpperCase</h2>
  <label style={{border:'3px',borderColor:'black'}}for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea  style={{border:'3px',borderColor:'black'}}class="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={changetext}></textarea>
  <div className="button-conatiner">
  <button  style={{borderRadius:'10px',borderColor:'#f505b5',shadowColor: "##e5d3f0",
    shadowOpacity: 0.8,
    shadowRadius: 2,}}className="uppercase my-4 mx-2" onClick={uppercase}>Convert To UpperCase</button>
  <button style={{borderRadius:'10px',borderColor:'#f505b5',shadowColor: "##e5d3f0",
    shadowOpacity: 0.8,
    shadowRadius: 2,}} className='lowercase mx-2'onClick={lowercase}> Convert To LowerCase </button>
  <button style={{borderRadius:'10px',borderColor:'#f505b5',shadowColor: "##e5d3f0",
    shadowOpacity: 0.8,
    shadowRadius: 2,}} className='cleartext mx-2 my-2' onClick={cleartext}>Clear Text</button>
    <button style={{borderRadius:'10px',borderColor:'#f505b5',shadowColor: "##e5d3f0",
    shadowOpacity: 0.8,
    shadowRadius: 2,}} className='copytext mx-2 my-2' onClick={copytext}>CopyText</button>
  </div>
<h2> ANALYSIS OF YOUR TEXT</h2>
<p>{text.split(' ').filter((element)=>{
return element.length!==0;
}).length} Words and {text.length} Characters</p>
<p>{text.split(' ').filter((element)=>{
return element.length!==0;
}).length*0.008} Seconds Taken To Read</p>
</div>
<h2><strong>Preview</strong></h2>
<p>{text}</p>
    </div>
  )
}
