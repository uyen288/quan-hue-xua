import MonAnCard from './MonAnCard';

function DanhSachMon({dsMon = [], dangChon, onChon, onDat}) {
    return (
        <div className="danh-sach-mon-container">
            {dsMon.map((mon) => (
                <MonAnCard
                    key={mon.id}
                    mon={mon}
                    dangChon={dangChon}
                    onChon={onChon}
                    onDat={onDat}
                />
            ))}
        </div>
    )
}

export default DanhSachMon