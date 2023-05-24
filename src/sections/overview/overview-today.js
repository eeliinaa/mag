import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';
import { format } from 'date-fns';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  SvgIcon,
  TextField,
  Rating
} from '@mui/material';

import { styled } from '@mui/material/styles';

// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
// import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
// import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

// const customIcons = {
//   1: {
//     icon: <ArrowRightIcon color="error" />,
//     label: 'Very Dissatisfied',
//   },
//   2: {
//     icon: <ArrowRightIcon color="error" />,
//     label: 'Dissatisfied',
//   },
//   3: {
//     icon: <ArrowRightIcon color="warning" />,
//     label: 'Neutral',
//   },
//   4: {
//     icon: <ArrowRightIcon color="success" />,
//     label: 'Satisfied',
//   },
//   5: {
//     icon: <ArrowRightIcon color="success" />,
//     label: 'Very Satisfied',
//   },
// };

export const OverviewToday = (props) => {
  const { products = [], sx } = props;

  // const StyledRating = styled(Rating)(({ theme }) => ({
  //   '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
  //     color: theme.palette.action.disabled,
  //   },
  // }));

  // function IconContainer(props) {
  //   const { value, ...other } = props;
  //   return <span {...other}>{customIcons[value].icon}</span>;
  // }
  const now = new Date();
  const todaysDate = format(now, 'dd/MM/yyyy');

  return (
    <Card sx={sx}>
      <CardHeader title={"Daily review " + todaysDate} />
      <List>
        {products.map((product, index) => {
          const hasDivider = index < products.length - 1;
          const ago = formatDistanceToNow(product.updatedAt);

          return (
            <ListItem
              divider={hasDivider}
              key={product.id}
            >
              <ListItemAvatar>
                {
                  product.image
                    ? (
                      <Box
                        component="img"
                        src={product.image}
                        sx={{
                          borderRadius: 1,
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                    : (
                      <Box
                        sx={{
                          borderRadius: 1,
                          backgroundColor: 'neutral.200',
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                }
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={`Updated ${ago} ago`}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <IconButton edge="end">
                <SvgIcon>
                  <EllipsisVerticalIcon />
                </SvgIcon>
              </IconButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      {/* <StyledRating
        name="highlight-selected-only"
        defaultValue={2}
        IconContainerComponent={IconContainer}
        getLabelText={(value) => customIcons[value].label}
        highlightSelectedOnly
      /> */}
      <Box sx={{ padding: 3, textAlign: 'center' }}>

        {/* <Stack spacing={1}> */}
        {/* <Rating name="size-small" defaultValue={2} size="small" />
        <Rating name="size-medium" defaultValue={2} /> */}
        <Rating
          name="size-large"
          // defaultValue={2} 
          size="large"
          sx={{ textAlign: 'center' }}
        />
        {/* </Stack> */}
        <TextField
          label="Task of today"
          id="filled-size-normal"
          // defaultValue="Normal"
          variant="filled"
          sx={{ width: '100%', marginBottom: 2 }}
        />
        <Box sx={{ textAlign: 'right' }}>
          <Button
            color="inherit"
            endIcon={(
              <SvgIcon fontSize="small">
                <ArrowRightIcon />
              </SvgIcon>
            )}
            size="small"
            variant="text"

          >
            Submit
          </Button>
        </Box>
      </Box>
      {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions> */}
    </Card>
  );
};

OverviewToday.propTypes = {
  products: PropTypes.array,
  sx: PropTypes.object
};
