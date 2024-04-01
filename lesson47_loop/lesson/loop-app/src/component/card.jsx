import './style.css';

export default function Card({ user }) {
    function addFavourite(item) {
        console.log(item)
    }

    return (
        <div className={`card ${user.age < 18 && 'card-underage'}`}>
            <h2>Имя: {user.name}</h2>
            <h3>Возраст: {user.age}</h3>
            <a href={`mailto:${user.email}`}>{user.email}</a>
            <br></br>
            {user.age >= 18 && <button onClick={() => addFavourite(user)}>Add</button>}
        </div>
    )

    // return user.age >= 18 ? (
    //     <div className="card">
    //         <h2>Имя: {user.name}</h2>
    //         <h3>Возраст: {user.age}</h3>
    //         <a href={`mailto:${user.email}`}>{user.email}</a>
    //     </div>
    // )
    //     :
    //     (
    //         <div className="card-underage">
    //             <h2>Имя: {user.name}</h2>
    //             <h3>Возраст: {user.age}</h3>
    //             <a href={`mailto:${user.email}`}>{user.email}</a>
    //         </div>
    //     )
}