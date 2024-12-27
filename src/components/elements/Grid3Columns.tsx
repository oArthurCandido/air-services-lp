import React from 'react'

type Grid3ColumnsProps = {
    children: React.ReactNode
    }

const Grid3Columns: React.FC<Grid3ColumnsProps> = ({ children }) => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {children}
            </div>
        </section>
    )
}

export default Grid3Columns