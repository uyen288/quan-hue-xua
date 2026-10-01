import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import DanhSachMon from './components/DanhSachMon'
import { dsMon } from './data/monAn'
import GioHang from './components/GioHang'

function App() {
  const [gio, setGio] = useState([])

  const tongPhan = gio.reduce((tong, item) => tong + item.soLuong, 0)

  const [idDangChon, setIdDangChon] = useState(null)

  function onChon(id) {
    setIdDangChon(id)
  }

  function datMon(id) {
    setGio((gioCu) => {
      const daCo = gioCu.some((item) => item.id === id)
      if (daCo) {
        return gioCu.map((item) =>
          item.id === id ? {...item, soLuong: item.soLuong + 1} : item
        )
      } return [...gioCu, {id, soLuong: 1}];
    })
  }

  return (
    <div>
      <Header tongPhan={tongPhan} />
      <GioHang gio={gio} dsMon={dsMon} />
      <DanhSachMon dsMon={dsMon} dangChon={idDangChon} onChon={onChon} onDat={datMon} />
    </div>
  )
}

export default App
