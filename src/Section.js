import "./Section.css"

function Section({ Icon, title, icolor, selected }) {
    return (
        <div className = {`section ${selected && "section--selected"}`}
            style={{
                borderBottom: `3px solid ${icolor}`,
                icolor: `${selected && icolor}`,
            }}>
                
            <Icon/>
            <h4>{title}</h4>
            
        </div>
    )
}

export default Section
