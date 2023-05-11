import {useState, useEffect} from "react"
//import memesData from "../memesData.js"

export default function Meme () {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([]) 
   /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

    useEffect(() => {
        // async function getMemes() {
        //     const res = await fetch("https://api.imgflip.com/get_memes")
        //     const data = await res.json()
        //     setAllMemes(data.data.memes)
        // }
        // getMemes()
        fetch("https://api.imgflip.com/get_memes")
            .then( res => res.json())
            .then( data => setAllMemes(data.data.memes))
    },[])

    function handleChange(event){
        const { name, value} = event.target
        setMeme( prevMeme => ( {
            ...prevMeme,
            [name]:value
            }
        ))
    }

    function getMemeImage(){
        const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];
        const url = randomMeme.url
        setMeme( preMeme => {
            return {
                ...preMeme,
                randomImage: url
            }
        })
    } 


    return (
       <main className="p-9">
            <div className="grid grid-rows-2 grid-cols-2 gap-4">
                <input 
                    className="border border-gray-300 px-3 py-2 font-normal text-xs" 
                    type="text" 
                    placeholder="Top Text" 
                    value={meme.topText}
                    name="topText"
                    onChange={handleChange}
                    required/>
                <input 
                    className="border border-gray-300 px-3 py-2 font-normal text-xs" 
                    type="text" 
                    placeholder="Bottom Text" 
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={handleChange}
                    required/>
                <button onClick={getMemeImage} className="col-span-2 text-white text-base font-bold bg-gradient-to-r from-startColor from-2% to-endColor to-100% cursor-pointer">Get a new meme image🖼</button>
            </div>
            <div className="relative">
               <img className="mt-7" src={meme.randomImage} alt="" />
               <div className="absolute top-2 flex justify-center w-full"><h2 className="memeText">{meme.topText}</h2></div> 
               <div className="absolute bottom-2 flex justify-center w-full"><h2 className="memeText">{meme.bottomText}</h2></div>
            </div>
            
       </main>
    );
}