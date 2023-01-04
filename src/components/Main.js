import Button from "./Button"


const Tech = ({ techs }) => {
    return (
        <ul>
            {techs.map((e) => (
                <li>{e}</li>
            ))}
        </ul>
    );
};

const UserCard = ({ img, firstname, lastname }) => {
    return (
        <div>
            <img src={img ? img : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fdefault-avatar-profile-icon-vector-social-media-user-image-image182145777&psig=AOvVaw0OPGxEjplXxopFXujjtARr&ust=1672892069278000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPCBteCGrfwCFQAAAAAdAAAAABAp"} alt="user" width={150} />
            <h4>
                {firstname} {lastname}
            </h4>
        </div>
    );
};



export default function Main({ user, techs, greetPeople, showDate }) {
    const userInfo = {
        ...user,
        img: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
    };



    const users = [
        { img: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png", firstname: "Kurosaki", lastname: "Ichigo" },
        {
            img: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png",
            firstname: "Bold",
            lastname: "Dulam"
        },
        {
            img: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png",
            firstname: "Gan",
            lastname: "Lkham"
        },
        {
            img: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png",
            firstname: "Naruto",
            lastname: "Uzumaki"
        },
    ];


    return (
        <div>
            <div>
                <h4>Tech Stack</h4>
                <Tech techs={techs} />
                <UserCard {...userInfo} />

                {users.map((userInfo) => {
                    return <UserCard {...userInfo} />;
                })}
                <Button text="Greet People" status={true} func={greetPeople} />
                <Button text="Show Date" status={false} func={showDate} />

            </div>
        </div>
    );
};