import axios from 'axios';
import classes from './home.module.css';

function Home(props) {
  const myParas = props.data;
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.textCenter}>NextJS Demo</h1>
      <ul>
        {myParas.map((item) => {
          return (
            <div key={item.id} className={classes.textBlock}>
              <h3>{item.title}</h3>
              <p className={classes.bodyText}>{item.paragraph}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const querystring =
    'https://next-js-course-4498a-default-rtdb.firebaseio.com/paragraphs.json';

  const response = await axios.get(querystring).catch((err) => {
    console.log(err);
  });
  if (response) {
    const transformedData = [];
    for (const key in response.data) {
      transformedData.push({
        id: key,
        title: response.data[key].title,
        paragraph: response.data[key].paragraph,
      });
    }
    return {
      props: {
        data: transformedData,
      },
    };
  }
}

export default Home;
