interface CardProps {
    img?: string,
}


export default function Card ({img}: CardProps) {

    return (
        <>
        <div className="card" style={{width: '18rem;'}}>
        {img && <img src={img} className="card-img-top" />}
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>

    )
}