import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@mui/material'

export const UserFormAvatar = ({ details }) => (
    <Card>
        <CardContent>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Avatar
                    src={details?.avatar}
                    sx={{
                        height: 80,
                        mb: 2,
                        width: 80
                    }}
                />
                <Typography
                    gutterBottom
                    variant="h5"
                >
                    {details?.name}
                </Typography>
                <Typography
                    color="text.secondary"
                    variant="body2"
                >
                    {details?.role}
                </Typography>
                <Typography
                    color="text.secondary"
                    variant="body2"
                >
                    {/* {details?.timezone} */}
                </Typography>
            </Box>
        </CardContent>
        <Divider />
        <CardActions>
            <Button
                fullWidth
                variant="text"
            >
                Upload picture
            </Button>
        </CardActions>
    </Card>
)