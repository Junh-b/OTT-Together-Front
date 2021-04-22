import queryString from 'query-string';

function ContentsPage(props){
    const {search} = props.location;
    const queryObj = queryString.parse(search);
    const {type} = queryObj;

    return (
        <div>
            this is contents page
            <br/>
            {type}
        </div>
    );
}

export default ContentsPage