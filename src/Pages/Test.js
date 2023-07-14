import React, { useEffect } from 'react'



export default function Test() {

    useEffect(() => {
        const options = {method: 'GET', headers: {accept: 'application/json'}};

        fetch(`https://api.redeem.xyz/v1/oauth/authorize?response_type=code&client_id=G28DPDCvXq6HVdLEft2xhGsEyO0f6qmqA5raFiIQUYt88GfE20jskbTw2Q47sKtwCDztaPQmBG5&state=Oet2nnkaC8Q5OhT&redirect_uri=https://ed4c-39-34-136-79.ngrok-free.app`, options)
          .then(response => console.log(response.json()))
          .then(response => console.log(response))
          .catch(err => console.error(err));
      }, []);
  return (
    <div>Test</div>
  )
}

