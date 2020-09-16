import * as React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionActions,
    Typography,
    Grid,
    Switch,
    Button,
    TextField,
    Divider
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ProjectCard.css';

const ProjectCard = ({
    appName,
    status,
    version,
    properties,
    handleChange,
    inputHandleChange,
    handleApplyButtonClick
}) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1c-content' id='panel1c-header'>
                <Grid container>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography variant='body3' component='p' className='cardText'>
                            <sapn>App Name: </sapn>
                            <div className='cardTextValue'>{appName}</div>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography variant='body3' component='p' className='cardText'>
                            <span>Status:</span> <div className='cardTextValue'>{status}</div>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography variant='body3' component='p' className='cardText'>
                            <span>Version:</span> <div className='cardTextValue'> {version}</div>
                        </Typography>
                    </Grid>
                </Grid>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
                <Grid container spacing={1}>
                    <Grid item xs={4} className='cardBodyText'>
                        <Typography variant='body3' component='span'>
                            Toggle :
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Switch checked={properties.toggle} onChange={handleChange} color='primary' name='checkedB' />
                    </Grid>

                    <Grid item xs={4} className='cardBodyText'>
                        <Typography variant='body3' component='p'>
                            Property 1 :
                        </Typography>
                    </Grid>

                    <Grid item xs={8}>
                        <TextField
                            id='outlined-basic'
                            label='Outlined'
                            variant='outlined'
                            name={'prop1'}
                            value={properties.prop1}
                            onChange={inputHandleChange}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant='body3' component='p' className='cardBodyText'>
                             Property 2 :
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField
                            id='outlined-basic'
                            label='value'
                            name={'prop2'}
                            variant='outlined'
                            value={properties.prop2}
                            onChange={inputHandleChange}
                        />
                    </Grid>
                </Grid>
            </AccordionDetails>
            <AccordionActions>
                <div className='cardButton'>
                    <Button size='med' variant='contained' color='primary' onClick={handleApplyButtonClick}>
                        Apply
                    </Button>
                </div>
            </AccordionActions>
        </Accordion>
    );
};

export default ProjectCard;
