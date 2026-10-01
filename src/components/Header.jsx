const tenQuan = import.meta.env.VITE_TEN_QUAN

function Header({tongPhan}) {
    
    return (
        <div>
            <h1>{tenQuan}</h1>
            <div data-testid="tong-phan">Giỏ: {tongPhan} phần</div>
        </div>
    )
}

export default Header