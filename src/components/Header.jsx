import logo from '../img/Troll-Face.svg';

export default function Header() {
    return (        
        <header className="flex justify-between items-center p-5 bg-gradient-to-r from-primary via-secondary to-tertialry">
            <div className="flex justify-start">
                <img src={logo} className="w-7 h-7 mr-1.5" alt="react logo" />
                <h3 className="text-white text-xl font-bold">Meme Generator</h3>
            </div>
            <h4 className="text-white mr-4 text-xs font-medium">React Course - Project 3</h4>
        </header>      
    );
} 