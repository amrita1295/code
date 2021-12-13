import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import { Container } from '@mui/material';

function Carousell(props) {
    const items = [
        {
            name: "",
            description: ""
        },
        {
            name: "",
            description: ""
        },
        {
            name: "",
            description: ""
        }
    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
    );
}

const Item = ({ name, description }) => {
    return (
        <Container marginTop='100px'>
            <Paper  style={{ display:'flex', height: '377px', width: 'auto', backgroundImage: `url(https://user-images.githubusercontent.com/52281814/143683715-bfd8e71b-c367-49b5-99ec-0a53b2475962.png)`}}>
            <h2>{name}</h2>
            <p>{description}</p>
        </Paper>
        </Container>
    );
};

export default Carousell;