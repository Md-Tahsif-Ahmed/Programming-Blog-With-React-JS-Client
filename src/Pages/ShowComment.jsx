const ShowComment = (props) => {
    const { comment, name, photo } = props.comment;
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ marginRight: '16px' }}>
                <img src={photo} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </div>
            <div style={{ backgroundColor: 'gray', borderRadius: '30%', padding: '7px' }}>
                <h5 style={{ margin: '0', marginBottom: '4px' }}>{name}</h5>
                <p style={{ margin: '0' }}>{comment}</p>
            </div>
        </div>
    );
};

export default ShowComment;


