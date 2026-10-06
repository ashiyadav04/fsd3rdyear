const root = ReactDOM.createRoot(
    document.getElementById("root")
);

const ChildComponent = ({ users }) => {
    console.log(users);

    return (
        <div>
            {users?.map((user, index) => (
                <div key={index}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.section}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

const ParentComponent = () => {
    let user = [
        {
            name: "Ashi",
            email: "ashiyadav@gmail.com",
            section: "cse-16"
        },
        {
            name: "Ashu",
            email: "ashi@gmail.com",
            section: "cse-16"
        },
        {
            name: "Ashi",
            email: "ashiyadav@gmail.com",
            section: "cse-16"
        }
    ];

    return (
        <div>
            <ChildComponent
                {...(user ? { users: user } : {})}
            />
        </div>
    );
};

root.render(<ParentComponent />);