import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      <Typography variant='h4' component="h1">h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>Subtitle1</Typography>
      <Typography variant='subtitle2'>Subtitle2</Typography>

      <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque accusamus assumenda numquam, vero doloremque ullam, corporis cumque architecto officiis repudiandae veritatis, reiciendis unde? Ratione veniam aliquam quo aperiam est?</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, nihil! Esse ut dolores nam excepturi debitis possimus, ad, necessitatibus blanditiis laudantium temporibus, soluta magni eius in deleniti aut eos autem?</Typography>
    </div>
  )
}
