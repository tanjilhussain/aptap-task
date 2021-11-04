import { React } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RatingDisplay from './RatingDisplay'

export default function DisplayCard(props) {
    const logo = props.deal['provider_logo_image_url']
    const providerName = props.deal['provider_name']
    const dealName = props.deal['deal_name']
    const monthlyCost = props.deal['monthly_price']
    const setupCost = props.deal['set_up_cost']
    const contractLength = props.deal['contract_info']
    const rating = props.deal['provider_rating']

    return (
        <Box sx={{ minWidth: 1000, paddingRight: 5}}>
            <Card variant="outlined">
                <CardContent>
                    <img src={logo} style={{ height: 150 }} alt="Logo" />;
                    <div className="displayCard">
                        <Typography sx={{ fontSize: 25 }}>
                            {providerName} - (Contract Length: {contractLength})
                        </Typography>
                        <Typography color="text.secondary">
                            Deal Name: {dealName} <br />
                            Monthly Cost: {monthlyCost} <br />
                            Setup Cost: {setupCost} <br />
                        </Typography>
                        <RatingDisplay rating={rating} />
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
}