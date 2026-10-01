import {useEffect, useRef} from "react"

function FormDatMon({dsMon, setGio}) {
    const hoTenRef = useRef(null)

    useEffect(() => {
    hoTenRef.current?.focus()
}, [])

return (
    <div>
        <input
ref={hoTenRef}
type="text"
name="hoTen"
placeholder="Họ tên"
/>
    </div>
)

}

export default FormDatMon