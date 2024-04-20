btn = document.querySelector("button");
btn.addEventListener('click', ()=>{

  console.log('buttn clicked')

  greet()

}) 
async function greet(){
try{
  let res= await axios.get('https://catfact.ninja/fact')
  para=document.querySelector('#result')
  para.innerText=res.data.fact
}catch(e){
  console.log("error :",e)
}
}
