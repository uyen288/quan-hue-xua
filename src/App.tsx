import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import DanhSachMon from './components/DanhSachMon'
import { dsMon } from './data/monAn'
import GioHang from './components/GioHang'
import { useEffect } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import FormDatMon from './components/FormDatMon'

function App() {
  const [gio, setGio] = useLocalStorage('gio', [])

  const tongPhan = gio.reduce((tong, item) => tong + item.soLuong, 0)

  const [idDangChon, setIdDangChon] = useState(null)

  useEffect(() => {
    document.title = tongPhan === 0 ? import.meta.env.VITE_TEN_QUAN : `(${tongPhan}) ${import.meta.env.VITE_TEN_QUAN}`
  }, [tongPhan])

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

  function xoaGio() {
    setGio([])
}

  return (
    <div>
      <Header tongPhan={tongPhan} />
      <GioHang gio={gio} dsMon={dsMon} onXoaGio={xoaGio} />
      <DanhSachMon dsMon={dsMon} dangChon={idDangChon} onChon={onChon} onDat={datMon} />
      <FormDatMon dsMon={dsMon} onDat={datMon} />
    </div>
  )
}

export default App
