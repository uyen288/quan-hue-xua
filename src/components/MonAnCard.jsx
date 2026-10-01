function MonAnCard({mon, dangChon, onChon, onDat}) {

    function dinhDangGia(price) {
        return Number(price).toLocaleString('vi-VN') + " đ"
    }

    return (
        <article className={dangChon === mon.id ? "dang-chon" : ""} onClick={() => onChon(mon.id)}>
            <h3>{mon.ten}</h3>
            <p>{mon.moTa}</p>
            <p>Giá: {dinhDangGia(mon.gia)}</p>
            {mon.daHet && <span className="het-mon">Hết món</span>}
            <button disabled={mon.daHet}
            onClick={(e) => {
                e.stopPropagation()
                onDat(mon.id)
            }}>Đặt món</button>
        </article>
    )
}

export default MonAnCard