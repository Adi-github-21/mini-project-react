import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1715972898845-62dd6786fb58?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    const HOT_URL ="https://media.istockphoto.com/id/828198028/photo/wood-thermometer.webp?a=1&b=1&s=612x612&w=0&k=20&c=Db111wbzmMrpY5qq5azFXkc5FKEizdb_vIHHPfgvxjA=";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?a=1&b=1&s=612x612&w=0&k=20&c=AqmeafeXtSEbnuq1mxdDr9nSrXunta3huhlXpLRMnes=";

    return (
        <div className="InfoBox">
        <div className='cardContainer'>     
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 ?
          RAIN_URL: info.temp > 15 
          ? HOT_URL: COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color='text.secondary' component={"span"}>
          <p>Tempereture = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>
            The weather can be described as <i>{info.weather}</i> and feels 
            like {info.feelslike}&deg;c
          </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}