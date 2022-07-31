export default function Field({ 
    name,
    placeholder,
    value,
    handler,
    type,
    icon
}){ 
    const capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase()

    return(
        <div className="field-container">
            <label htmlFor={ name }>{ capitalizedName }</label>
            <i className={`fa-solid fa-${ icon } input-icon`}></i>
            <input
                id={ name }
                name={ name }
                value={ value }
                onChange={ handler }
                type={ type || 'input' }
                placeholder={ placeholder }
            />
        </div>
    )
}