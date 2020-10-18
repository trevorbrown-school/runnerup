import React from 'react'
import '../scss/TiledGrid.scss';



const TiledGrid: React.FunctionComponent = () => {
                //On click, render content in a modal!!
    const renderGridItems = (amount: number) => {
        const items = []
        for (let i = 0; i < amount; i++) {
            items.push(
                <div key={i} className={`TiledGrid_grid-container_item ${(i % 2 == 0) ? 'bg-primary oh-neutral' : 'bg-neutral oh-primary'}`}>Test</div>
            );
        }

        return items;
    }
    
    return (
        <div className="TiledGrid">
            TiledGrid
            <div className="TiledGrid_grid-container">
                {renderGridItems(5)}

             </div>
        </div>
    )
}

export default TiledGrid
