import * as React from 'react';
import axios from 'axios';
import { Grid, CircularProgress } from '@material-ui/core';
import ProjectCard from './components/card/ProjectCard';
import projectDetailsJSON from './mock/projectDetails.json';
import './App.css';

const App = () => {
    const [ projectDetail, setProjectDetail ] = React.useState(projectDetailsJSON.apps);

    const fetchProjectDetails = React.useCallback(() => {
        axios
            .get('getProjectDetails')
            .then((reponse) => {
                if (reponse === undefined) return;
                else {
                    return reponse.json();
                }
            })
            .then((projectDetailResponse) => {
                if (projectDetailResponse === undefined) return;
                // setProjectDetail(projectDetailResponse)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const postProjectStatus = React.useCallback((parms) => {
        axios
            .post('getProjectDetails', JSON.stringify(parms))
            .then((reponse) => {
                if (reponse === undefined) return;
                else {
                    return reponse.json();
                }
            })
            .then((projectDetail) => {
                if (projectDetail === undefined) return;
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    React.useEffect(
        () => {
            fetchProjectDetails();
        },
        [ fetchProjectDetails ]
    );

    const handleChange = (e, value) => {
        console.log('e, value', e, value);
        const updatedToggleValue = projectDetail.map((item, index) => {
            if (index === value) {
                item.properties.toggle = !item.properties.toggle;
            }
            return item;
        });
        setProjectDetail(updatedToggleValue);
    };

    const handleApplyButtonClick = (event, index) => {
        postProjectStatus(projectDetail[index]);
    };

    const inputHandleChange = (event, index) => {
        const updatedToggleValue = projectDetail.map((item, i) => {
            if (index === i) {
                item.properties = {
                    ...item.properties,
                    [event.target.name]: event.target.value
                };
            }
            return item;
        });
        setProjectDetail(updatedToggleValue);
    };

    return (
        <div>
            {projectDetail && projectDetail.length > 0 ? (
                <Grid container>
                    {projectDetail.map((card, index) => {
                        return (
                            <Grid item xs={12} sm={12} md={3} lg={3} className='cardItem'>
                                <ProjectCard
                                    {...card}
                                    handleApplyButtonClick={(event) => handleApplyButtonClick(event, index)}
                                    handleChange={(event) => handleChange(event, index)}
                                    inputHandleChange={(event) => inputHandleChange(event, index)}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            ) : (
                <div className='circular-progress'>
                    <CircularProgress />
                </div>
            )}
        </div>
    );
};

export default App;
