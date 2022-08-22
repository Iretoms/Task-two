import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidInfo } from '../action/covidAction';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCovidInfo())
    },[dispatch])

const {isLoading, info} = useSelector(state => state)
    return (
        <div>
            {
                info.map(data => (
                    <h3>{data.state}</h3>
                ))
            }
        </div>
    );
};

export default Home;