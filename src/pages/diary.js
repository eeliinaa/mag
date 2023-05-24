
import {
    Box,
    Button,
    Container,
    Pagination,
    Stack,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    ButtonGroup,
    List, 
    Card,
    Divider,
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DiaryItem } from 'src/sections/diary/diary-item';

import Banner from 'src/sections/banner'

import { diaryItems, users } from 'src/utils/storage'

const Page = () => {

    return (
        <>
            <Banner
                title="Diary"
                subtitle="Student diaries"
            // content={bannerContent}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                        >
                            <Stack
                                width={'250px'}
                                spacing={1}
                            >
                                <FormControl
                                    // fullWidth
                                    // width={250}
                                    size='small'
                                >
                                    <InputLabel id="demo-simple-select-label">Student</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Age"
                                    // onChange={\wsshandleChange}
                                    >
                                        {users.map(u => (
                                            <MenuItem key={u.id} value={u.id}>{u.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Stack>

                            <ButtonGroup
                                size="small"
                            // variant="contained"
                            // aria-label="outlined primary button group"
                            >

                                <Button
                                // onClick={() => { onNavigate(navigate.PREVIOUS) }}
                                >
                                    PREVIOUS
                                </Button>
                                <Button
                                // onClick={() => { onNavigate(navigate.TODAY) }}
                                >
                                    TODAY
                                </Button>
                                <Button
                                // onClick={() => { onNavigate(navigate.NEXT) }}
                                >
                                    NEXT
                                </Button>
                            </ButtonGroup>
                        </Stack>
                        <Card>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                {diaryItems.map((item, index) => (
                                    <>
                                        <DiaryItem
                                            key={item.id}
                                            date={item.date}
                                            task={item.task}
                                            notes={item.notes}
                                            rate={item.rate}
                                        />
                                        {index + 1 !== diaryItems.length &&
                                            <Divider
                                            // variant="inset" 
                                            // component="li" 
                                            />
                                        }
                                    </>
                                ))}
                            </List>
                        </Card>
                    </Stack>
                </Container>
            </Box>
        </>
    )
};

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
