const Grid = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', width: '80%', height: '40%', right: '0px', padding: '20px' }}>
            <video controls style={{ objectFit: 'cover', width: '50%' }}>
                <source src="video.mp4" type="video/mp4" />
            </video>
            <video controls style={{ objectFit: 'cover', width: '50%' }}>
                <source src="video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Grid;