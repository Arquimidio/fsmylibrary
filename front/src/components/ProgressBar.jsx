export default function ProgressBar({ completed }){
    const completedPercentage = `${completed * 100}%`
    return(
        <div>
            <label className="progress-bar-label">{completedPercentage}</label>
            <meter value={completed}/>
        </div>
    )
}