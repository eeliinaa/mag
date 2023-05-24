import { useCallback, useState } from 'react'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
    Unstable_Grid2 as Grid
} from '@mui/material'

import { roleTypesCollection, roleTypes } from 'src/helpers/collections'

export const UserForm = ({ details, onSave }) => {

    const [values, setValues] = useState({
        name: details?.name,
        surname: details?.surname,
        email: details?.email,
        roleId: details ? details.roleId : roleTypes.user
    })

    const handleChange = (event) => {
        setValues((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const handleChange2 = useCallback(
        (event) => {
            setValues((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value
            }))
        },
        []
    )

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault()

            console.log(values)
            // const newUser = values
            onSave(values)
        },
        []
    )

    return (
        <form
            autoComplete="off"
            noValidate
        // onSubmit={handleSubmit}
        >
            <Card>
                <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                />
                <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    helperText="Please specify the first name"
                                    label="First name"
                                    name="name"
                                    onChange={handleChange}
                                    required
                                    value={values.name}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Last name"
                                    name="surname"
                                    onChange={handleChange}
                                    required
                                    value={values.surname}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                    value={values.email}
                                />
                            </Grid>
                            {/* <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    onChange={handleChange}
                                    type="number"
                                    value={values.phone}
                                />
                            </Grid> */}
                            {/* <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Country"
                                    name="country"
                                    onChange={handleChange}
                                    required
                                    value={values.country}
                                />
                            </Grid> */}
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    label="Select user role"
                                    name="role"
                                    onChange={handleChange}
                                    required
                                    select
                                    SelectProps={{ native: true }}
                                    value={values.roleId}
                                >
                                    {roleTypesCollection.map((item) => (
                                        <option
                                            key={item.id}
                                            value={item.id}
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Save details
                    </Button>
                </CardActions>
            </Card>
        </form>
    )
}