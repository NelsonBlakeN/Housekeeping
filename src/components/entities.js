import React from 'react'

const Entities = ({ entities }) => {
    return (
        <div>
            <center><h1>Scripts</h1></center>
            {entities.map((entity) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{entity.name}: {entity.value}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Entities