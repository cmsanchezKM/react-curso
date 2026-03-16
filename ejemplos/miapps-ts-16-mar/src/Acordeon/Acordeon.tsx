import { useEffect, useState } from "react";

interface AcordeonProps {
    children: React.ReactNode;
    titulo: string;
    cerrado?: boolean;
}

const Acordeon: React.FC<AcordeonProps> = ({children, titulo, cerrado = true}) => {
    const [isCerrado, setIsCerrado] = useState<boolean>(true);

    useEffect(() => {
        setIsCerrado(cerrado);
    }, [cerrado]);

    return (
        <div className="acordeon">
            <div className="acordeon-heading" onClick={() => setIsCerrado(!isCerrado)}>
                <h3>{titulo}</h3>
            </div>
            <div className={`acordeon-content ${isCerrado ? 'cerrado' : 'abierto'}`}>
                {children}
            </div>
        </div>
    )
}

export default Acordeon