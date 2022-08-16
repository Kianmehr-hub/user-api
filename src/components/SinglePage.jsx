import { useParams } from 'react-router';

const SinglePage = () => {
    const { dataId } = useParams();

    return(
        <p>hello world</p>
    )
}

export default SinglePage;