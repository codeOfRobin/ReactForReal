import React from 'react';

export default function Checkbox({checked, onChange, name, label, id}) {
    function onCheck(event) {
        onChange(event.target.checked)
    }

    return (
        <div className="flex mw4">
            <label className="pr2" htmlFor={id}>{label}</label>
            <input 
                type="checkbox"
                name={name}
                id={id}
                onChange={onCheck}
                checked={checked}
            />
        </div>
    )
}