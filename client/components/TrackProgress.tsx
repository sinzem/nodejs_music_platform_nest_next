/* (для полосы прогресса трека, также добавляем сюда управление громкостью) */

interface trackProgressProps { /* (типизируем входящие пропсы) */
    left: number; /* (для текущего времени проигрывания / для текущей громкости) */
    right: number; /* (для максимального времени трека / для максимальной громкости) */
    onChange: (e: any) => void; /* (функция изменения, ничего не будет возвращать) */
}

const TrackProgress: React.FC<trackProgressProps> = ({left, right, onChange}) => {
    return (
        <div style={{display: "flex"}}>
            <input
                type="range" /* (типом проставляем бегунок) */
                min={left} /* (минимальное значение - будет меняться в зависимости от позиции бегунка) */
                max={right} /* (максимальное значение) */
                value={left} /* (текущее значение) */
                onChange={onChange} /* (функция изменения) */
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;