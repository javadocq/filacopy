import leftExhibition from '../assets/Rectangle 141-1.png'
import rightExhibition from '../assets/Rectangle 152.png'
import '../Exhibition.css'

export default function Exhibition() {
    return(<>
    <h1 className='top-text'>기획전</h1>
    <div className='Exhibition-banner'>
        <div>
            <img src={leftExhibition} alt="" className="ex" />
            <div className='img-text'>
                <h1>FILA COUPLE ITEM</h1>
                <p>6.17 Mon - 6.24 Mon</p>
                <button>자세히 보기</button>
            </div>
        </div>
        <div>
            <img src={rightExhibition} alt="" className="ex" />
            <div className='img-text'>
                <h1>FILA WOMAN ITEM</h1>
                <p>6.23 Mon - 6.30 Mon</p>
                <button>자세히 보기</button>
            </div>
        </div>
    </div>
    </>);
}
