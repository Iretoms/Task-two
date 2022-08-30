import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchCovidInfo } from "../action/covidAction";
import DataCard from "../components/DataCard";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidInfo());
  }, [dispatch]);

  const { info, total, isLoading } = useSelector((state) => state);

  return (
    <Section>
      <h2>Covid Update in Nigeria</h2>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <p>Total Sample Tested : {total.totalSamplesTested}</p>
          <p>Total Confirmed Cases : {total.totalConfirmedCases}</p>
          <p>Total Active Cases : {total.totalActiveCases}</p>
          <p>Total Discharged : {total.discharged}</p>
          <p>Total Deaths : {total.death}</p>
          <Cards>
            {info.map((data) => (
              <DataCard
                key={data._id}
                state={data.state}
                confirmed={data.confirmedCases}
                admission={data.casesOnAdmission}
                discharged={data.discharged}
                death={data.death}
              />
            ))}
          </Cards>
        </>
      )}
    </Section>
  );
};
 

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
padding: 2rem;
h4 {
  margin-top: 5rem;
}
 p {
  margin-top: 1rem;
 }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;

`

export default Home;
