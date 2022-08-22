import styled from 'styled-components'

const DataCard = ({state, confirmed, admission, discharged, death}) => {
    return (
        <Container>
            <h2>{state}</h2>
            <p>Confirmed cases: {confirmed}</p>
            <p>cases on Admission: {admission}</p>
            <p>Discharged: {discharged}</p>
            <p>Death: {death}</p>

        </Container>
    );
};

const Container = styled.div`
background-color: #eee;
width: 20rem;
min-height: 20rem;
padding: 2rem;
border-radius: 10px;
h2 {
    margin-bottom: 1rem;
}
p {
    margin-bottom: 2rem;
}
`

export default DataCard;