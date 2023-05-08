export default function Meme () {
    return (
       <main className="p-9">
            <form className="grid grid-rows-2 gap-4 grid-cols-2">
                <input className="border border-gray-300 px-3 py-2" type="text" placeholder="Top Text" required/>
                <input className="border border-gray-300 px-3 py-2" type="text" placeholder="Bottom Text" required/>
                <button>Get a new meme image</button>
            </form>
       </main>
    );
}