import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import canvasToImage from 'canvas-to-image';

import './generateBill.css';
const GenerateBill = (props) => {

    const ref = React.useRef('canvas');

    const saveCanvas = () => {
        const canvas = document.getElementById('signatureCanvas');
        canvasToImage(canvas, {
            name: 'signature',
            type: 'jpg',
            quality: 0.5
          });
    }
    return ( 
        <React.Fragment>
            <SignatureCanvas penColor='green'
                canvasProps={{width: 400, height: 500, className: 'sigCanvas', id: 'signatureCanvas'}} />
                <button onClick={saveCanvas}>Save Signature</button>
        </React.Fragment>
     );
}
 
export default GenerateBill;