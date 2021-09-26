import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import { getCampaign, createCampaign } from '../blockstack/transactions';
import { getUserData } from '../blockstack/auth';

export default function StartCampaign() {
    const [values, setValues] = React.useState({
        name: '',
        url: '',
    });

    const handleChangeForm = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(values);
    };
    const [isSubmitting, setSubmitting] = React.useState(false);

    const createCampaignCallback = (data) => {
        console.log(data);
        console.log('Stacks Transaction:', data.stacksTransaction);
        console.log('Transaction ID:', data.txId);
        console.log('Raw transaction:', data.txRaw);
        const explorerTransactionUrl = 'http://http://localhost:8000/txid/' + data.txId;
        console.log('View transaction in explorer:', explorerTransactionUrl);
        const userData = getUserData();
        console.log(userData);
        const userWallet = userData.profile.stxAddress.testnet;
        getCampaign(userWallet);
        // getAllCampaigns(userWallet);

    }
    const onSubmit = () => {
        setSubmitting(true);
        createCampaign(values.name, values.url, createCampaignCallback);
    }


    return (
        <Grid
            spacing={0}
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
                            Start a campaign
                        </Typography>
                        {/* <Stack spacing={2}> */}

                        <TextField
                            required
                            id="name"
                            label="Campaign Name"
                            onChange={handleChangeForm("name")}
                            style={{ margin: "15px" }}
                        />
                        <TextField
                            required
                            id="url"
                            label="Campaign URL"
                            onChange={handleChangeForm("url")}
                        />
                        {/* </Stack> */}
                    </CardContent>
                    <CardActions>
                        {(values['name'] !== '' && values['url'] !== '') && !isSubmitting ? (
                            <Button onClick={onSubmit} sx={{ width: "100%" }} size="large">Start Campaign</Button>
                        ) : (
                            <Button sx={{ width: "100%" }} size="large" disabled>Start Campaign</Button>
                        )}

                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}