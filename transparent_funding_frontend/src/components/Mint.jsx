import React from 'react'
import {Button} from '@mui/material'
import {createMiamiCoin, mintMiamiCoin} from '../blockstack/transactions'

export default function Mint() {
    const makeCall = (data) => {
        console.log(data);
        console.log('Stacks Transaction:', data.stacksTransaction);
        console.log('Transaction ID:', data.txId);
        console.log('Raw transaction:', data.txRaw);
        const explorerTransactionUrl = 'http://http://localhost:8000/txid/' + data.txId;
        console.log('View transaction in explorer:', explorerTransactionUrl);
    }
    const mintCall = (data) => {
        console.log(data);
        console.log('Stacks Transaction:', data.stacksTransaction);
        console.log('Transaction ID:', data.txId);
        console.log('Raw transaction:', data.txRaw);
        const explorerTransactionUrl = 'http://http://localhost:8000/txid/' + data.txId;
        console.log('View transaction in explorer:', explorerTransactionUrl);
    }
    
    return (
        <div>
            <Button onClick={()=>{createMiamiCoin(makeCall)}}> Make miami coin </Button>
            <Button onClick={()=>{mintMiamiCoin(mintCall)}}> Mint miami coin </Button> 
        </div>
    )
}
