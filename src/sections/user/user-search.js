import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import { Card, InputAdornment, OutlinedInput, SvgIcon, Stack, Button, } from '@mui/material'
import PlusIcon from '@heroicons/react/24/solid/PlusIcon'


export const UserSearch = () => (
    // <Card sx={{ p: 2 }}>
        <Stack 
        flexDirection={'row'}
        justifyContent={"space-between"}
        >
            <Stack width="300px">
                <OutlinedInput
                    defaultValue=""
                    fullWidth
                    placeholder="Search user"
                    startAdornment={(
                        <InputAdornment position="start">
                            <SvgIcon
                                color="action"
                                fontSize="small"
                            >
                                <MagnifyingGlassIcon />
                            </SvgIcon>
                        </InputAdornment>
                    )}
                    sx={{ maxWidth: 500 }}
                />
            </Stack>
            <Stack>
                <div>
                    <Button
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <PlusIcon />
                            </SvgIcon>
                        )}
                        variant="contained"
                        // onClick={handleAddNew}
                    >
                        Add
                    </Button>

                </div>
            </Stack>
        </Stack>
    // </Card>
)