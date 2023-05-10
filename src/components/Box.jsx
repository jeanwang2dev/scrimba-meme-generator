export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="w-28 h-28 border-2  m-4"
            onClick={() => props.toggle(props.id)}
        >
        </div>
    )
}