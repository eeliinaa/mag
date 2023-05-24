import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import {
    Box,
    Button,
    Container,
    Pagination,
    Stack,
    SvgIcon,
    Typography,
    List, ListItem, ListItemAvatar, ListItemText,
    Divider, Rating,
    Unstable_Grid2 as Grid
} from '@mui/material';

export const DiaryItem = (props) => {
    const { date, task, rate, notes } = props;

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar className='diary-avatar'>
                <div className="diary-date">
                    <Typography
                        sx={{ display: 'inline' }}
                        // component="span"
                        variant="overline"
                        gutterBottom
                    // color="text.primary"
                    >
                        {date.format('D')}
                    </Typography>
                </div>
                <div className="diary-day">
                    <Typography
                        sx={{ display: 'inline' }}
                        // component="span"
                        variant="overline"
                        gutterBottom
                    // color="text.primary"
                    >
                        {date.format('dddd')}
                    </Typography>
                </div>
            </ListItemAvatar>
            <ListItemText
                // primary="Monday"
                secondary={
                    <>
                        <Typography
                            sx={{ display: 'inline' }}
                            // component="span"
                            variant="overline"
                            gutterBottom
                        // color="text.primary"
                        >
                            Main task:
                        </Typography>
                        {task}
                        <br />
                        <Typography
                            sx={{ display: 'inline' }}
                            // component="span"
                            variant="overline"
                        // color="text.primary"
                        >
                            Notes:
                        </Typography>
                        {notes}
                        <div>
                            <Rating
                                name="read-only"
                                value={rate}
                                readOnly
                            />
                        </div>
                    </>
                }
            />
        </ListItem>
    )
}

DiaryItem.prototypes = {

}