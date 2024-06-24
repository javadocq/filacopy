import shoes1 from '../assets/Rectangle 141.png'
import shoes2 from '../assets/Rectangle 143.png'
import shoes3 from '../assets/Rectangle 144.png'
import shoes4 from '../assets/Rectangle 145.png'
import shoes5 from '../assets/Rectangle 146.png'
import shoes6 from '../assets/Rectangle 147.png'
import shoes7 from '../assets/Rectangle 148.png'
import shoes8 from '../assets/Rectangle 149.png'

import '../BestItem.css'

export default function BestItem() {
    return(<>
    <div className="top-banner">
        <h1>지금 많이 찾는 상품</h1>
        <div>
            <button># 하루 특가</button>
            <button># 냉감티셔츠</button>
            <button># 에샤페</button>
            <button># 페이토&샌들</button>
            <button># 워터스포츠</button>
            <button># 테니스</button>
        </div>
    </div>
    <div className='Goods-Total'>
        <div className='Goods'>
            <img src={shoes1} alt="" className="shoes-img" />
            <p>공용 라이프스타일</p>
            <h3>(한소희 착용) 휠라 에샤페 실버문</h3>
            <p>99,000원</p>
        </div>
        <div className='Goods'>
            <img src={shoes2} alt="" className="shoes-img" />
            <p>공용 라이프스타일</p>
            <h3>휠라 에샤페 MS</h3>
            <p>89,000원</p>
        </div>
        <div className='Goods'>
            <img src={shoes3} alt="" className="shoes-img" />
            <p>공용 라이프스타일</p>
            <h3>휠라 에샤페 레이스</h3>
            <p>89,000원</p>
        </div>
        <div className='Goods'>
            <img src={shoes4} alt="" className="shoes-img" />
            <p>공용 라이프스타일</p>
            <h3>(한소희 착용) 휠라 에샤페 레이스</h3>
            <p>99,000원</p>
        </div>
        <div className='Goods'>
            <img src={shoes5} alt="" className="shoes-img" />
            <p>공용 라이프스타일</p>
            <h3>휠라 에샤페 레이스</h3>
            <p>89,000원</p>
        </div>
        <div className='Goods'>
            <img src={shoes6} alt="" className="shoes-img" />
            <p>공용 라이프스타일</p>
            <h3>휠라 에샤페 VC</h3>
            <p>89,000원</p>
        </div>
        <div className='Goods'>
            <img src={shoes7} alt="" className="shoes-img" />
            <p>공용 라이프스타일</p>
            <h3>휠라 에샤페 VC</h3>
            <p>89,000원</p>
        </div>
        <div className='Goods'>
            <img src={shoes8} alt="" className="shoes-img" />
            <p>공용 라이프스타일</p>
            <h3>휠라 에샤페 VC</h3>
            <p>89,000원</p>
        </div>
    </div>
    </>);
}
