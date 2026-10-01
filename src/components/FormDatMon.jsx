import { useState } from "react";

function FormDatMon({ onGui, choPhepGui }) {
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [ghiChu, setGhiChu] = useState("");
  const [loi, setLoi] = useState({});

  function kiemTra() {
    const loiMoi = {};

    if (hoTen.trim().length < 2) {
      loiMoi.hoTen = "Họ tên phải có ít nhất 2 ký tự";
    }

    if (soDienThoai.trim() === "") {
      loiMoi.soDienThoai = "Vui lòng nhập số điện thoại";
    }

    setLoi(loiMoi);
    return loiMoi;
  }

  function gui(e) {
    e.preventDefault();

    const loiMoi = kiemTra();

    if (Object.keys(loiMoi).length > 0) {
      return;
    }

    if (!choPhepGui) {
      return;
    }

    onGui({
      hoTen: hoTen.trim(),
      soDienThoai: soDienThoai.trim(),
      ghiChu: ghiChu.trim(),
    });
  }

  function blurHoTen() {
    if (hoTen.trim().length < 2) {
      setLoi((loiCu) => ({
        ...loiCu,
        hoTen: "Họ tên phải có ít nhất 2 ký tự",
      }));
    } else {
      setLoi((loiCu) => ({
        ...loiCu,
        hoTen: "",
      }));
    }
  }

  function blurSoDienThoai() {
    if (soDienThoai.trim() === "") {
      setLoi((loiCu) => ({
        ...loiCu,
        soDienThoai: "Vui lòng nhập số điện thoại",
      }));
    } else {
      setLoi((loiCu) => ({
        ...loiCu,
        soDienThoai: "",
      }));
    }
  }

  return (
    <form onSubmit={gui}>
      <div>
        <label>Họ tên</label>
        <input
          type="text"
          value={hoTen}
          onChange={(e) => setHoTen(e.target.value)}
          onBlur={blurHoTen}
        />

        {loi.hoTen && (
          <p className="loi" role="alert">
            {loi.hoTen}
          </p>
        )}
      </div>

      <div>
        <label>Số điện thoại</label>
        <input
          type="text"
          value={soDienThoai}
          onChange={(e) => setSoDienThoai(e.target.value)}
          onBlur={blurSoDienThoai}
        />

        {loi.soDienThoai && (
          <p className="loi" role="alert">
            {loi.soDienThoai}
          </p>
        )}
      </div>

      <div>
        <label>Ghi chú</label>
        <textarea
          value={ghiChu}
          onChange={(e) => setGhiChu(e.target.value)}
        />
      </div>

      <button type="submit">
        Gửi đơn
      </button>
    </form>
  );
}

export default FormDatMon;