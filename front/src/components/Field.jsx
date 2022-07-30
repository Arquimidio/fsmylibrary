export default function Field({ 
    name,
    placeholder,
    value,
    handler,
    type
}){ 
    const capitalizedName = name[0].toUpperCase() + name.slice(1).toLowerCase()

    return(
        <div className="field-container">
            <label htmlFor={ name }>{ capitalizedName }</label>
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