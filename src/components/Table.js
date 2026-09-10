export default function Table({ users }) {
    return (
        //
        <div>

        <h2>Table</h2>
            <div className="w-full d-flex flex-col items-center justify-center p-5">
                

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td><a href={`/users/${user.id}`}>{user.name}</a></td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
}
