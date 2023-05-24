import { useCallback } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    TablePagination,
    Stack,
    Typography,
    Unstable_Grid2 as Grid
} from '@mui/material';

export const NotificationList = ({items, title, subtitle}) => {

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
        },
        []
    );

    return (
        // <form onSubmit={handleSubmit}>
        <Card>
            <CardHeader
                subheader={subtitle}
                title={title}
            />
            <Divider />
            <CardContent>
                <Table  size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                // checked={selectedAll}
                                // indeterminate={selectedSome}
                                // onChange={(event) => {
                                //     if (event.target.checked) {
                                //         onSelectAll?.()
                                //     } else {
                                //         onDeselectAll?.()
                                //     }
                                // }}
                                />
                            </TableCell>
                            <TableCell>
                                Text
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => {
                            const isSelected = false//selected.includes(item.id)
                            const createdAt = "aaa"// format(item.createdAt, 'dd/MM/yyyy')

                            return (
                                <TableRow
                                    hover
                                    key={item.id}
                                    selected={isSelected}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isSelected}
                                        // onChange={(event) => {
                                        //     if (event.target.checked) {
                                        //         onSelectOne?.(item.id)
                                        //     } else {
                                        //         onDeselectOne?.(item.id)
                                        //     }
                                        // }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {item.text}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </CardContent>
            {/* <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button variant="contained">
                    Save
                </Button>
            </CardActions> */}
        </Card>
        // </form>
    );
};
