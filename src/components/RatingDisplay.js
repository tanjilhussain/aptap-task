import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingDisplay(props) {
  const ratingPercentage = `${props.rating * 100}%`
  const rating = (props.rating / 10) * 50
  return (
      <Stack spacing={1}>
        Rating: {ratingPercentage} <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
      </Stack>
  );
}