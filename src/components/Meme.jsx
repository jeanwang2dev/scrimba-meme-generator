import {useState} from "react"
import memesData from "../memesData.js"

export default function Meme () {

    const [imgUrl, setImgUrl] = useState("");

    function getMemeImage(){
        const memesArr = memesData.data.memes;
        const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)];
        setImgUrl(randomMeme.url);
    }

    return (
       <main className="p-9">
            <div className="grid grid-rows-2 grid-cols-2 gap-4">
                <input className="border border-gray-300 px-3 py-2 font-normal text-xs" type="text" placeholder="Top Text" required/>
                <input className="border border-gray-300 px-3 py-2 font-normal text-xs" type="text" placeholder="Bottom Text" required/>
                <button onClick={getMemeImage} className="col-span-2 text-white text-base font-bold bg-gradient-to-r from-startColor from-2% to-endColor to-100% cursor-pointer">Get a new meme image🖼</button>
            </div>
            <img className="mt-7" src={imgUrl} alt="" />
       </main>
    );
}