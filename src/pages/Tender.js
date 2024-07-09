import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, IconButton, Button } from '@material-ui/core';
import { Event, Share, Favorite } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: '100%',
    margin: 'auto',
  },
  statusOpen: {
    color: 'green',
  },
  statusClosed: {
    color: 'red',
  },
});

function TenderCard() {
  const classes = useStyles();

  const [openTenders, setOpenTenders] = useState([
    {
      id: 1,
      title: 'Notice Inviting Limited Tender: (22/05/2024)',
      description: 'Biz value: Refer Document',
      bidBefore: '27 June 2024 17:00',
      deadline: new Date('2024-06-27T17:00:00'), // Deadline with date and time
      detailsVisible: false,
    },
    {
      id: 2,
      title: 'Notice Inviting Limited Tender: (06/05/2024)',
      description: 'Biz value: Refer Document',
      bidBefore: '18 June 2024 17:00',
      deadline: new Date('2024-06-28T17:00:00'), // Deadline with date and time
      detailsVisible: false,
    },
  ]);

  const [closedTenders, setClosedTenders] = useState([
    {
      id: 3,
      title: 'Notice Inviting Limited Tender: (06/05/2024)',
      description: 'Biz value: Refer Document',
      bidBefore: '18 June 2024 17:00',
      deadline: new Date('2024-06-18T17:00:00'), // Deadline with date and time
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpenTenders((prevTenders) => {
        const now = new Date();
        const updatedTenders = prevTenders.map((tender) => {
          const timeRemaining = tender.deadline - now;
          if (timeRemaining <= 0) {
            setClosedTenders((prevClosed) => [...prevClosed, tender]);
            return null;
          } else {
            const daysToGo = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
            return {
              ...tender,
              daysToGo: `${daysToGo} DAYS TO GO`,
            };
          }
        }).filter(tender => tender !== null);

        return updatedTenders;
      });
    }, 1000); // Check every second

    return () => clearInterval(timer);
  }, []);

  const handleDragStart = (e, tender) => {
    e.dataTransfer.setData('tender', JSON.stringify(tender));
  };

  const handleDrop = (e, list) => {
    e.preventDefault();
    const tender = JSON.parse(e.dataTransfer.getData('tender'));
    if (list === 'openTenders') {
      setOpenTenders((prevTenders) => [...prevTenders, tender]);
      setClosedTenders((prevTenders) => prevTenders.filter((t) => t.id !== tender.id));
    } else {
      tender.detailsVisible = false; // Hide details when moved to closed tenders
      setClosedTenders((prevTenders) => [...prevTenders, tender]);
      setOpenTenders((prevTenders) => prevTenders.filter((t) => t.id !== tender.id));
    }
  };

  const toggleDetails = (id) => {
    setOpenTenders((prevTenders) =>
      prevTenders.map((tender) =>
        tender.id === id ? { ...tender, detailsVisible: !tender.detailsVisible } : tender
      )
    );
  };

  return (
    <div>
      <Typography variant="h4" align="center" style={{ margin: '20px 0', marginTop:'200px'}}>
        Open Tenders
      </Typography>
      <Grid container spacing={2} alignItems="center" onDrop={(e) => handleDrop(e, 'openTenders')} onDragOver={(e) => e.preventDefault()}>
        {openTenders.map((tender) => (
          <Grid item xs={12} sm={6} md={3} key={tender.id}>
            <Card
              draggable="true"
              onDragStart={(e) => handleDragStart(e, tender)}
              className={classes.card}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  {tender.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {tender.description}
                </Typography>
                <Typography variant="body1" component="p">
                  Bid Before: {tender.bidBefore}
                </Typography>
                <Typography variant="body1" component="p">
                  {tender.daysToGo}
                </Typography>
                <Typography variant="body1" component="p" className={classes.statusOpen}>
                  Tender is Open
                </Typography>
                <IconButton>
                  <Event />
                </IconButton>
                <IconButton>
                  <Share />
                </IconButton>
                <IconButton>
                  <Favorite />
                </IconButton>
                <Button onClick={() => toggleDetails(tender.id)}>
                  {tender.detailsVisible ? 'Hide Details' : 'Show Details'}
                </Button>
                {tender.detailsVisible && (
                  <Typography variant="body2" component="div">
                    {/* Add your additional details here */}
                    <p>Additional details about the tender...</p>
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
        Closed Tenders
      </Typography>
      <Grid container spacing={2} alignItems="center" onDrop={(e) => handleDrop(e, 'closedTenders')} onDragOver={(e) => e.preventDefault()}>
        {closedTenders.map((tender) => (
          <Grid item xs={12} sm={6} md={3} key={tender.id}>
            <Card
              draggable="true"
              onDragStart={(e) => handleDragStart(e, tender)}
              className={classes.card}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  {tender.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {tender.description}
                </Typography>
                <Typography variant="body1" component="p">
                  Bid Before: {tender.bidBefore}
                </Typography>
                <Typography variant="body1" component="p" className={classes.statusClosed}>
                  Tender is Closed
                </Typography>
                <IconButton>
                  <Event />
                </IconButton>
                <IconButton>
                  <Share />
                </IconButton>
                <IconButton>
                  <Favorite />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TenderCard;
