import React, { createContext, useState } from 'react'

export const DataLucroContext = createContext()

export function DataLucro(props) {
    const [dataLucro, setDataLucro] = useState({
        porcentagem_lucro: '',
        data_lancamento: '',
    })

    return (
        <DataLucroContext.Provider value={[dataLucro, setDataLucro]}>
            {props.children}
        </DataLucroContext.Provider>
        
    )
}