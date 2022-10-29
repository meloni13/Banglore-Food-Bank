import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Card sx={{ display: 'flex', flexDirection : "row" ,minWidth: 300 }}>
           <CardMedia
              component="img"
              sx={{ height: 200 }}
              image="https://media-exp1.licdn.com/dms/image/C4D03AQH3irSDU2gxig/profile-displayphoto-shrink_800_800/0/1653633896844?e=1671062400&v=beta&t=zPk3WOOXICCkaw1E3zsOw-qJFT--WHlWqmCme2Nj2gA"
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h5" component="div">
                  Prathamesh
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Team Lead
                </Typography>
              </CardContent>
            </Box>
        </Card>
        <Card sx={{ display: 'flex', flexDirection : "row" ,minWidth: 300 }}>
           <CardMedia
              component="img"
              sx={{ height: 200 }}
              image="https://media-exp1.licdn.com/dms/image/C5603AQE4E9ooJ1ICSA/profile-displayphoto-shrink_800_800/0/1638622172816?e=1671062400&v=beta&t=N5IAnA2_vvAPliIDfMHlqPFpjoR6gqcGmUATzwlmVn8"
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h5" component="div">
                     Harsh
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Frontend Lead
                  </Typography>
              </CardContent>
            </Box>
        </Card>
        <Card sx={{ display: 'flex', flexDirection : "row" ,minWidth: 300 }}>
           <CardMedia
              component="img"
              sx={{ height: 200 }}
              image="/yash.jpg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h5" component="div">
                     Yash
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Project Lead
                  </Typography>
              </CardContent>
            </Box>
        </Card>
      </Stack>
    </div>
  );
}



export default function aboutUs() {
  return (
    <React.Fragment>
      <DividerStack />
      <div class="partnrs">
        <div class="container">
            <h3>A GLOBAL FOODBANKING NETWORK PARTNER</h3>
            <p>The Global FoodBanking Network seeks to create a hunger free world and actively assists food bank operations in over 40 countries across the globe to achieve the same. Bangalore Food Bank will follow and replicate the Global Food Banking Network's globally successful systems and practices in Bengaluru.</p>
            <ul>
              <li><img src="https://seeklogo.com/images/T/the-global-food-banking-network-logo-B316B1B1D2-seeklogo.com.png"/></li>
              <li><img src="https://www.indiafoodbanking.org/sites/default/files/india-food-banking-network-logo.png"/></li>
            </ul>
        </div>
      </div>
      
      <div class="misandvis">
        <div class="container">
          <div class="div_visdetails">
            <h4>OUR vision</h4>
            <p>Our vision is to <strong>Eradicate Hunger, Malnutrition & Prevent Food Wastage</strong></p>
          </div>
          <div class="div_visdetails">
            <h4>OUR MISSION</h4>
            <ul>
              <li><i class="fa fa-angle-double-right"></i> To create a supportive environment that will address the issues of hunger and malnutrition</li>
              <li><i class="fa fa-angle-double-right"></i> To improve nutritional interventions by reinforcing the interaction between the various actors in the programme</li>
              <li><i class="fa fa-angle-double-right"></i> To develop a sustainable system that ends food wastage at all levels of its supply chain from harvest to the consumption phase</li>
              <li><i class="fa fa-angle-double-right"></i> To mobilize various resources and to build a culture of innovations to accomplish zero hunger</li>
              <li><i class="fa fa-angle-double-right"></i> To create and promote nationwide awareness and to lend a voice to those who are not heard</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
