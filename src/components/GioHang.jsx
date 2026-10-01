import { useMemo } from "react";

function GioHang({ gio, dsMon, onXoaGio }) {
  const tongTien = useMemo(() => {
    return gio.reduce((tong, item) => {
      const mon = dsMon.find((mon) => mon.id === item.id);
      return tong + mon.gia * item.soLuong;
    }, 0);
  }, [gio, dsMon]);

  return (
    <div>
      {gio.length === 0 ? (
        <p>Gio hang trong</p>
      ) : (
        <ul>
          {gio.map((item) => {
            const mon = dsMon.find((mon) => mon.id === item.id);
            const thanhTien = mon.gia * item.soLuong;

            return (
              <li key={item.id}>
                {mon.ten} x {item.soLuong} - {thanhTien.toLocaleString("vi-VN")} đ
              </li>
            );
          })}
        </ul>
      )}

      <div data-testid="tong-tien">
        Tổng tiền: {tongTien.toLocaleString("vi-VN")} đ
      </div>
    </div>
  );
}

export default GioHang;
