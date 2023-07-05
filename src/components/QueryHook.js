import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const url = "https://excuser-three.vercel.app/v1/excuse/";

export const QueryHook = () => {
    let { category } = useParams();
    
    const { data, isLoading, isError, refetch } = useQuery(["excuse"], () => {
        return Axios.get(`${url}/${category}`).then((res) => res.data);
    });

    if (isLoading) {
        return <h1> Loading ...</h1>;
    }
    
    if (isError) {
        return <h1> SOrry, there was an error</h1>;
      }

    return (
        <div>
        <h2>THIS IS THE Query QueryHook PAGE </h2>
        Id: {data[0]?.id} -
        Excuse: {data[0]?.excuse} -
        Category: {data[0]?.category}

        <button onClick={refetch}> Update Data</button>
        </div>
        );
}