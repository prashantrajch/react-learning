export default function Box({value,onClick}){
    return <div className="box" onClick={onClick}>{value}</div>
}