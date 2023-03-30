import React from 'react'

const brandData=[
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/onneibznnitqsn5twumi.png",
        name:"Dabur"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/dekl61bd9thu21vmypkm.png",
        name:"Baidyanath"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/idgjl700nkz6w8lzvjwc.png",
        name:"Dhootapapeshwar"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/yv774ayhbypuxi28dhs0.png",
        name:"TATA 1mg"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/xemgonnppssxvagkjxzd.png",
        name:"Himalaya"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/guiy84rk41kgofd5atft.png",
        name:"Jiva Ayurveda"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/shxhntpjye31tu8frfjs.png",
        name:"Kerala Ayurveda"
    },
 ]

function AyurvedaBrandCards() {
  return (
    <div style={{margin: "40px 0"}}>
        <div style={{display: "flex", width: "87%", justifyContent: "space-between", margin: "auto"}}>
            <p style={{fontSize: "20px", fontWeight: "600" }}>Ayurveda top brands</p>
            <button style={{color: "white", backgroundColor: "#ff6f61", padding: "7px", fontSize: "14px", borderRadius: "5px", }}>SEE ALL</button>
        </div>
        <div style={{display:"flex", margin: "15px 0",flexWrap:"wrap",padding:"20px 10px",justifyContent:'space-evenly',boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            {brandData?.map((el,i)=>{
                return <div style={{margin:"5px"}}>
                    <img style={{maxWidth:"120px",marginBottom:"10px"}} src={el.image} alt="" />
                    <span style={{maxWidth:"120px"}}>{el.name}</span>
                </div>
            })}
        </div>
    </div>
  )
}

export default AyurvedaBrandCards