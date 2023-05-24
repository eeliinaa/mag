import { useCallback, useMemo, useState } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-big-calendar/lib/addons/dragAndDrop/styles.css"

import { events } from 'src/utils/storage'


import { Container, Typography, Card, CardContent, Stack, Button, ButtonGroup } from '@mui/material'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const newEvent = {
    id: 0,
    title: '',
    location: '',
    // start: new Date(2023, 4, 2),
    // end: new Date(2023, 4, 4) 
}

const navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
}

const DiaryCalendar = ({ content, title, subtitle, maxWidth }) => {
    const [open, setOpen] = useState(false)
    const [activeEvent, setActiveEvnet] = useState(newEvent)

    const handleCreateEvent = () => {
        setActiveEvnet(newEvent)
        setOpen(true);
    };

    const handleEditEvent = (event) => {
        setActiveEvnet(event)
        setOpen(true);
    };

    const handleCloseEvent = () => {
        setOpen(false);
    };


    const localizer = momentLocalizer(moment)


    const eventStyleGetter = (e, start, end, isSelected) => {


        // let current_time = moment().format('YYYY MM DD');
        // let event_time = moment(e.start).format('YYYY MM DD');
        // let background = (current_time > event_time) ? '#DE6987' : '#8CBD4C';
        // let background = category == 0 ? 


        if (e.category === 0) {
            return {
                style: {
                    backgroundColor: '#6d9189'
                }
            }
        }
    }

    const Toolbar = ({ onNavigate, label, date }) => {

        return (
            <div className="calendar-toolbar">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={4}
                >
                    <Stack
                        flex="1"
                    // textAlign={"center"}
                    >
                        <Typography variant="h5">
                            {label}
                        </Typography>
                    </Stack>
                    <Stack >
                        <ButtonGroup
                            size="small"
                        // variant="contained"
                        // aria-label="outlined primary button group"
                        >

                            <Button
                                onClick={() => { onNavigate(navigate.PREVIOUS) }}
                            >
                                PREVIOUS
                            </Button>
                            <Button
                                onClick={() => { onNavigate(navigate.TODAY) }}
                            >
                                TODAY
                            </Button>
                            <Button
                                onClick={() => { onNavigate(navigate.NEXT) }}
                            >
                                NEXT
                            </Button>
                        </ButtonGroup>
                    </Stack>
                </Stack>
            </div>

        )
    }

    return (
        <Card>
            <CardContent>
                <div className="calendar-container">
                    <Calendar
                        popup
                        selectable
                        localizer={localizer}
                        // defaultView={Calendar.Views.MONTH}
                        components={{ toolbar: Toolbar }}
                        views={['month']}
                        // style={{ height: 600 }}
                        events={events}

                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                        // events={this.props.events}
                        eventPropGetter={(eventStyleGetter)}
                        // onSelectEvent={(slotInfo) => this.onSelectEventHandler(slotInfo)}
                        
                        // onSelectEvent={handleEditEvent}
                        // onSelectSlot={handleCreateEvent}

                    // onSelectSlot={(slotInfo) => this.onSelectEventSlotHandler(slotInfo)}
                    />
                    {/* <Popup /> */}
                </div>
                <Dialog open={open} onClose={handleCloseEvent}>
                    <DialogTitle>{activeEvent.id > 0 ? "Edit event" : "Add new event"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {activeEvent.title}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseEvent}>Cancel</Button>
                        <Button onClick={handleCloseEvent}>Save</Button>
                    </DialogActions>
                </Dialog>
            </CardContent>
        </Card>
    )
}

export default DiaryCalendar