import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import data from '../data/data.json'

const SinglePage = () => {
  const { dataId } = useParams();
  const user = data.find(item => item.id === dataId)
  console.log(data);
  console.log(user)

  return (
    <>
      <p>{dataId}</p>
      <Link to="/"><button>back</button></Link>
    </>
  );
};

export default SinglePage;
