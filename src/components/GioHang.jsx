function GioHang({ gio, dsMon }) {
    return (
        <div>
            {gio.map((item) => {
                const mon = dsMon.find((mon) => mon.id === item.id)

                return (
                    <p key={item.id}>
                        {mon.ten} x {item.soLuong} - {Number(mon.gia * item.soLuong).toLocaleString('vi-VN')} đ
                    </p>
                )
            })}
        </div>
    )
}

export default GioHang