import React,{useState} from 'react'

export default function About() {
    const[myStyle,setStyle]=useState({
        color:'black',
        backgroundColor:'white',
        shadowColor: "##e5d3f0",
        shadowOpacity: 0.8,
        shadowRadius: 2,
    });
    /*if(document.body.style.color==='white'&&
    document.body.style.backgroundColor==='#1a1d3d'){
setStyle({
    color:'#1a1d3d',
    backgroundColor:'white'
})
}
else{setStyle({
    color:'white',
    backgroundColor:'#1a1d3d'})
}*/

  return (
    <div >
        <h2> About TextUtils</h2>
      <div style={myStyle} className="accordion" id="accordionExample" >
  <div  style={myStyle} className="accordion-item">
    <h2  style={myStyle} className="accordion-header">
      <button  style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Contributor:Karthik Anish Joseph
      </button>
    </h2>
    <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div style={myStyle} className="accordion-body">
        <strong>Karthik Anish Joseph,currently a first year B.tech in CSE(AI&Robotics) student at VIT Chennai,India has developed TextUtils.
            He was born in Kerala,India and has done his schooling in Bangalore,India.At the time of developing this site he was new to react and web developing.This is Karthik's first React  project</strong>
      </div>
    </div>
  </div>
  <div  style={myStyle} className="accordion-item">
    <h2 style={myStyle} className="accordion-header">
      <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Help And Source:CodeWithHarry
      </button>
    </h2>
    <div style={myStyle}  id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.</strong>
      </div>
    </div>
  </div>
  <div style={myStyle} className="accordion-item">
    <h2 style={myStyle} className="accordion-header">
      <button  style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        TextUtils
      </button>
    </h2>
    <div  style={myStyle} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div style={myStyle}  className="accordion-body">
        <strong>TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from Uppercase to lowercase and lowercase to Uppercase</strong>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
