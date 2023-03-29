import React from 'react'

const brandData=[
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/cdb36765-0dc7-43d4-81e8-106dddb9e970.png",
        name:"Cetaphil"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f1c85f6b-737b-4330-87f8-3bb5ad647495.png",
        name:"Organic India"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/d499a94b-a3d9-4ba9-9c1e-b9d233e2ce79.png",
        name:"Dr. Morepen"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b1eb4ea9-0a15-4a45-9c79-63478b73ec4d.png",
        name:"Bournvita"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/3b2f13fc-381b-4306-94f6-65ce3c88cc25.png",
        name:"Baidyanath"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b33da4e8-ed75-422d-9964-a13601bc7285.png",
        name:"Wellness"
    },
    {
        image:"https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c113948e-cb12-4582-aa5e-1b4af442ddc7.png",
        name:"Protinex"
    },
 ]

function BrandCards() {
  return (
    <div style={{display:"flex",flexWrap:"wrap",padding:"10px 10px 20px 10px",justifyContent:'space-around',boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        {brandData?.map((el,i)=>{
            return <div style={{margin:"5px"}}>
                <img style={{maxWidth:"120px"}} src={el.image} alt="" />
                <span style={{maxWidth:"120px"}}>{el.name}</span>
            </div>
        })}
    </div>
  )
}

export default BrandCards