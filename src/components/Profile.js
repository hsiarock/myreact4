import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Profile = () => {

    const {
      data: catData,
      isLoading,
      isError,
      refetch,
    } = useQuery(["cat"], () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (isError) {
      return <h1> SOrry, there was an error</h1>;
    }

    if (isLoading) {
      return <h1> Loading ....</h1>
    }

    return (
        <div>
            <h1> THIS IS THE PROFILE PAGE <p>{catData?.fact}</p></h1>

            <button onClick={refetch}> Update Data</button>
        </div>
    );
}