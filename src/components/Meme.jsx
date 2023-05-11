import {useState} from "react"
import memesData from "../memesData.js"

export default function Meme () {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = useState(memesData) 

    function handleChange(event){
        const { name, value} = event.target
        setMeme( prevMeme => ( {
            ...prevMeme,
            [name]:value
            }
        ))
    }

    function getMemeImage(){
        const memesArr = allMemeImage.data.memes;
        const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)];
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