import axios from 'axios';
import classes from './events.module.css';
import Image from 'next/image';
import { Card } from 'semantic-ui-react';

function Events(props) {
  const myEvents = props.data;
  return (
    <div className={classes.wrapper}>
      <h1>Some upcoming events</h1>
      {myEvents.map((item) => {
        return (
          <Card key={item.id} fluid color="blue">
            <div className={classes.event}>
              <h2>{item.title}</h2>
              <p className={classes.bodyText}>{item.description}</p>
              <p className={classes.bodyText}>{item.date}</p>
              <p className={classes.bodyText}>{item.location}</p>
              <Image
                className={classes.image}
                src={item.image}
                alt=""
                width="200"
                height="300"
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const querystring =
    'https://next-js-course-4498a-default-rtdb.firebaseio.com/events.json';

  const response = await axios.get(querystring).catch((err) => {
    console.log(err);
  });
  if (response) {
    const transformedData = [];
    for (const key in response.data) {
      transformedData.push({
        id: key,
        date: response.data[key].date,
        description: response.data[key].description,
        location: response.data[key].location,
        title: response.data[key].title,
        image: response.data[key].image,
      });
    }
    return {
      props: {
        data: transformedData,
      },
    };
  }
}

export default Events;
