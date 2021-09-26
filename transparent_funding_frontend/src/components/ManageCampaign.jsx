import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import { addDonor } from '../blockstack/transactions';
import { getUserData } from '../blockstack/auth';

export default function ManageCampaign() {
    const [values, setValues] = React.useState({
        name: '',
        wallet: '',
    });

    const handleChangeForm = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(values);
    };
    const [isSubmitting, setSubmitting] = React.useState(false);

    const addDonorCallback = (data) => {
        console.log(data);
        console.log('Stacks Transaction:', data.stacksTransaction);
        console.log('Transaction ID:', data.txId);
        console.log('Raw transaction:', data.txRaw);
        const explorerTransactionUrl = 'http://http://localhost:8000/txid/' + data.txId;
        console.log('View transaction in explorer:', explorerTransactionUrl);
        const userData = getUserData();
        console.log(userData);

    }
    const onSubmit = () => {
        setSubmitting(true);
        addDonor(values.name, values.wallet, addDonorCallback);
    }


    return (
        <Grid
            spacing={1}
            alignItems="center"
            justify="center"
            styles={{
                display: 'flex',
                flexDirection: 'column'
            }}>
            <Grid item xs="12" style={{ textAlign: "center" }}>
                <Card variant="elevation" elevation={4} sx={{ maxWidth: 345, margin: '0 auto', position: "relative" }} >
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                            Add a Donor
                        </Typography>
                        <TextField
                            required
                            id="donorname"
                            label="Donor Name"
                            onChange={handleChangeForm("name")}
                            style={{ margin: "15px" }}
                        />
                        <TextField
                            required
                            id="donorwallet"
                            label="Donor STX Address"
                            onChange={handleChangeForm("wallet")}
                        />
                    </CardContent>
                    <CardActions>
                        {(values['name'] !== '' && values['url'] !== '') && !isSubmitting ? (
                            <Button onClick={onSubmit} sx={{ width: "100%" }} size="large">Approve Donor</Button>
                        ) : (
                            <Button sx={{ width: "100%" }} size="large" disabled>Approve Donor</Button>
                        )}

                    </CardActions>
                </Card>
            </Grid>
            


        </Grid>
    )
}

// {donors.map((val, index) => {
//     (            
//         <Grid item xs="12" style={{ textAlign: "center", marginTop: "13px" }}>
//             <Card variant="elevation" elevation={4} sx={{ maxWidth: 345, margin: '0 auto', position: "relative" }} >
//                 <Typography variant="h6">{val.name} </Typography>
//                 <Typography >{val.wallet}</Typography>
//             </Card>
//         </Grid>
//     )
// })}