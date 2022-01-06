import axios from 'axios';
import classes from './other.module.css';

function Other(props) {
  const myZips = props.data;
  return (
    <div className={classes.wrapper}>
      <h1>Some area zip codes</h1>
      <ul>
        {myZips.map((item) => {
          return (
            <p className={classes.bodyText} key={item.id}>
              {item.city} - <strong>{item.zip}</strong>
            </p>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const querystring =
    'https://next-js-course-4498a-default-rtdb.firebaseio.com/zip-codes.json';

  const response = await axios.get(querystring).catch((err) => {
    console.log(err);
  });
  if (response) {
    const transformedData = [];
    for (const key in response.data) {
      transformedData.push({
        id: key,
        city: response.data[key].city,
        zip: response.data[key].zip,
      });
    }
    return {
      props: {
        data: transformedData,
      },
    };
  }
}

export default Other;
