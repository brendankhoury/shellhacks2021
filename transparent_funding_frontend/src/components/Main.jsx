import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {signOut} from '../blockstack/auth.js'
import StartCampaign from './StartCampaign.jsx';
import ManageCampaign from './ManageCampaign.jsx';
import Mint from './Mint.jsx';
import ViewCampaigns from './ViewCampaigns.jsx';

export default function Main() {
    return (
        <BrowserRouter>

            <Grid container style={{height:'100vh'}} >
                <Grid item xs={12}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" component="div" >Transparent Funding</Typography>
                                <Link to="/viewCampaigns"><Button color='secondary'><p style={{color:'white'}}>View Campaigns</p></Button></Link>
                                <Link to="/manageCampaign"><Button><p style={{color:'white'}}>Manage Campaign</p></Button></Link>
                                <Link to="/startCampaign"><Button><p style={{color:'white'}}>Start Campaign</p></Button></Link>
                                <Typography component="div" sx={{flexGrow:1}}></Typography>
                                <Button onClick={() => signOut()} color="inherit">Sign out</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Switch>
                        <Route path="/" exact>
                            <h1>Path = /</h1>
                        </Route>
                        <Route path="/startCampaign" exact>
                            <StartCampaign/>
                        </Route>
                        <Route path="/manageCampaign" exact>
                            <ManageCampaign/>
                        </Route>
                        <Route path="/viewCampaigns" exact>
                            <ViewCampaigns/>
                        </Route>
                        <Route path="/mint" exact>
                            <Mint></Mint>
                        </Route>
                    </Switch>
                </Grid>
            </Grid>
        </BrowserRouter>
    );
}
