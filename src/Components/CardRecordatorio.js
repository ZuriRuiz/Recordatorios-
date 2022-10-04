import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const CardRecordatorio = () => {
    
    return(
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        


      }}>

        <Card sx={{ 
         
          width: 400,
          height: 300,  
          mt: 8,
          bgcolor: '#F5EEDC',

        }}>


          <CardContent>
            <Typography sx={{ ml: 12, fontSize: 20,  fontWeight: 'bold', color: '#2C3333' }} >
             Recordatorios Diarios
            </Typography>
            <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                mt: 6
                
            }}>
            <Typography sx={{  ml: 12, fontSize: 18,  color: '#2C3333' }} >
             * Mejora la postura
            </Typography>
            <Typography sx={{ ml: 12, fontSize: 18,   color: '#2C3333' }} >
             * Estira los musculos
            </Typography>
            <Typography sx={{  ml: 12, fontSize: 18,   color: '#2C3333' }} >
             * Toma agua
            </Typography>

            </Box>

          </CardContent>
     
        </Card>
      </Box>
      
    ) 
    
}


export default CardRecordatorio;