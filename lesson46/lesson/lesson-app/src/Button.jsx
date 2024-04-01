import './Btn.css'

export default function Button({ item, ClassName }) {
    // ${ClassName или '' что бы небыло undefined }
    return <button className={`button ${ClassName || ''}`}>{item || "Start trading"}</button>
}