import '../Foot.css';

export default function Foot() {
    return(
    <div className='back'>
    <div className='foot'>
        <div>
            <h1 style={{color : "blue", fondWeight : "bold"}}>FILA</h1>
        </div>
        <div>
            <p className='atmosttop'>FILA IR</p>
            <div className='secondtop'>
                <p>매장안내 | 공지사항 | FILA MEMBERSHIP | 단체 판매 | 대리점 개설문의 | FILA 입찰 참여 안내</p>
            </div>
            <div className='thirdtop'>
                <p>서울특별시 성북구 보문로 35 휠라코리아(주) 대표이사 : 김지헌</p>
                <p>사업자등록번호 : 7116-81-01573 통신판매업신고 : 제 2020-서울강동-0160 호</p> 
                <p>개인정보 관리책임자 : 이학우</p>

                <p>본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.</p> 
                <p>콘텐츠산업진흥법에 의한 콘텐츠보호 안내</p>  
            </div>
            
            <div>
                <p>통합회원 이용약관 | 개인정보 처리방침 | 제보센터</p>
            </div>
        </div>
        <div className='right-foot'>
            <button>CS CENTER</button>
            <h1>1577-3472</h1>
            <h1>filaonline@fila.com</h1>
            <p>평일 월-금 : 09시 ~ 18시 (공휴일 제외)</p>
        </div>
    </div>
    </div>);
}
