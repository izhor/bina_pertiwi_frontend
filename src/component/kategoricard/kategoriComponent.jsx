import { Col } from 'antd';
import React from 'react';

const KategoriComponent = (kategori) => {
    return (
       <>
       <Col key={kategori.id}>
        <div
        style={{
            width: "289px",
            height: "129px",
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
            backgroundImage: kategori.id,

            
        }}
        >
            <h1>{kategori.title}</h1>
        </div>
       </Col>
       </>
    );
}

export default KategoriComponent;
