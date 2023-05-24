import Head from 'next/head'
import { subDays, subHours } from 'date-fns'
import { Container, Typography, Card, CardContent, Stack } from '@mui/material'

const Banner = ({ content, title, subtitle, maxWidth }) => {

    return (
        <div className='section-banner'>
            <Container maxWidth={maxWidth ? maxWidth : "xl"}>
                <Typography
                    variant="h5"
                    gutterBottom
                    color="white"
                >
                    {title}
                </Typography>
                <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                    color="white"
                >
                    {subtitle}
                </Typography>
                {content}
            </Container>
        </div>
    )
}

export default Banner