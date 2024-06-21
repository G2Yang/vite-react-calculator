import './Teclas.css'

function Teclas(props) {

    function handleClick(e) {
        props.handleClick(e);
    }

    return (
        <>
            <div className='teclas'>
                <button className='teclasNormlaes' onClick={handleClick}>AC</button>
                <button className='teclasNormlaes' onClick={handleClick}>??</button>
                <button className='teclasNormlaes' onClick={handleClick}>%</button>
                <button className='teclasAmarillas' onClick={handleClick}>/</button>
                <button className='teclasNormlaes' onClick={handleClick}>7</button>
                <button className='teclasNormlaes' onClick={handleClick}>8</button>
                <button className='teclasNormlaes' onClick={handleClick}>9</button>
                <button className='teclasAmarillas' onClick={handleClick}>*</button>
                <button className='teclasNormlaes' onClick={handleClick}>4</button>
                <button className='teclasNormlaes' onClick={handleClick}>5</button>
                <button className='teclasNormlaes' onClick={handleClick}>6</button>
                <button className='teclasAmarillas' onClick={handleClick}>-</button>
                <button className='teclasNormlaes' onClick={handleClick}>1</button>
                <button className='teclasNormlaes' onClick={handleClick}>2</button>
                <button className='teclasNormlaes' onClick={handleClick}>3</button>
                <button className='teclasAmarillas' onClick={handleClick}>+</button>
                <button className='teclasNormlaes' onClick={handleClick} style={{ gridColumn: 'span 2' }}>0</button>
                <button className='teclasNormlaes' onClick={handleClick}>,</button>
                <button className='teclasAmarillas' onClick={handleClick}>=</button>
            </div>
        </>
    )
}

export default Teclas;