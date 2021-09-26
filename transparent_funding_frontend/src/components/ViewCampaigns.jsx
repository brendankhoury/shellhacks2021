import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import {  getAllCampaigns, getCampaign, getCurrentCampaign, donate } from '../blockstack/transactions';

import { getUserData } from '../blockstack/auth';

export default function ViewCampaigns() {
    const [values, setValues] = React.useState({
        amount: '',
    });
    const [amountRaised, setRaised] = React.useState(0)

    // eslint-disable-next-line
    React.useEffect(() => {
        (async () => {
            const campaignData = await getCampaign("ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5");
            console.log("Campaign data")
            const recievedIndex = campaignData.indexOf("(recieved ");
            var parsedCampaign = campaignData.substr(recievedIndex + "(recieved u".length);
            parsedCampaign = parsedCampaign.substr(0, parsedCampaign.indexOf(')'));

            setRaised(parsedCampaign);
            // const result = await getAllCampaigns(userData.profile.stxAddress.testnet);
            // console.log("Get all donors result");
            // console.log(result);
            // setCampaigns([{name: "Campaign name", address:"Campaign address"}]);
            // console.log(campaigns);
        })()

    }, [])

    const handleChangeForm = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(values);
    };
    const [isSubmitting, setSubmitting] = React.useState(false);

    const onSubmit = () => {
        setSubmitting(true);
        donate("ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5", parseInt(values.ammount) );
    }


    return (
        <Grid  spacing={0}
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
                            Satoshi for Mayor
                        </Typography>
                        <Typography>
                            {amountRaised}
                            </Typography>
                        <TextField
                            required
                            id="donorwallet"
                            label="Amount in MIA (miamicoin)"
                            onChange={handleChangeForm("amount")}
                        />
                    </CardContent>
                    <CardActions>
                        {(values['name'] !== '' && values['url'] !== '') && !isSubmitting ? (
                            <Button onClick={onSubmit} sx={{ width: "100%" }} size="large">Donate</Button>
                        ) : (
                            <Button sx={{ width: "100%" }} size="large" disabled>Donate</Button>
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