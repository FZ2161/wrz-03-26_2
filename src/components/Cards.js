export default function Cards({ users }) {

    // console.log(users);

    return (
        <div className=" ">
            <h2>Cards</h2>
            <div className="justify-content-center d-flex gap-3 flex-wrap">
            {
                users.map((user, idx) => {
                    return (
                        <div className="card" key={idx} style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
                                <p className="card-text">Phone: {user.phone}</p>
                                {/* {console.log(idx)} */}
                                <a href={`/users/${user.id}`} className="card-link">Card link</a>
                                {/* <a href="#" className="card-link">Another link</a> */}
                            </div>
                        </div>

                    )
                })
            }
            </div>
        </div>
    );
}
