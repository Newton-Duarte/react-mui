import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1666346167029-d8bf4466fab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          alt="Newton Duarte"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            quisquam! Quae, laborum modi? Esse soluta natus non aperiam dolores
            quisquam culpa nihil obcaecati maxime sapiente.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
