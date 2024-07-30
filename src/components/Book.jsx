const Book = ({ book }) => {
    const { image, isbn13, price, subtitle, title, url } = book;
    return (
        <div className="book">
            <img src={image} alt="{title}" />
            <p>{title}</p>
            <p><b>{price}</b></p>
            <button onClick={() => console.log(`I want to add book with id ${isbn13} to cart`)}>Add to Cart</button>

            
        </div>
    )
}


export default Book;