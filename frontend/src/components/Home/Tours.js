import React from 'react';

export default function Tours() {
    const tours = [
        {
            id: 1,
            date: 'JUL16',
            place: 'DETROIT, MI',
            description: 'DTE ENERGY MUSIC THEATRE'
        },
        {
            id: 2,
            date: 'JUL19',
            place: 'TORONTO',
            description: 'ONBUDWEISER STAGE'
        },
        {
            id: 3,
            date: 'JUL 29',
            place: 'PHOENIX',
            description: 'AZAK-CHIN PAVILION'
        },
        {
            id: 4,
            date: 'AUG 2',
            place: 'LAS VEGAS',
            description: 'T-MOBILE ARENA'
        },
        {
            id: 5,
            date: 'AUG 7',
            place: 'CONCORD, CA',
            description: 'CONCORD PAVILION'
        },
        {
            id: 6,
            date: 'JUL19',
            place: 'TORONTO, CA',
            description: 'ONBUDWEISER STAGE'
        },
    ];

    return (
        <div>
            <span className='d-flex justify-content-center py-4 fw-bold fs-1'>TOURS</span>
            <div className="d-flex  flex-column align-items-center">
                {tours.map((tour) => (
                    <div key={tour.id} style={{maxWidth: "57%", width: "100%"}}>
                        <div className='d-flex'>
                            <span style={{ width: "12%" }}>{tour.date}</span>
                            <span style={{ width: "25%", color: "#777" }}>{tour.place}</span>
                            <p style={{ width: "53%", color: "#777" }}  >{tour.description}</p>
                            
                            <span className='text-nowrap custom-color px-4 rounded-1 fw-bold text-white' style={{height:"30px"}}>BUY TICKET</span>
                        </div>
                        <div className='border-bottom border-1 border-dark mb-2'></div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}
