export default function Card({data}){
    const {login,bio,avatar_url,html_url,public_repos,name,followers,following} = data;
    return <div className="card">
        <div className="card-header">
          <img src={avatar_url} alt="" />
          <i className="fa-brands fa-github icon"></i>
        </div>
        <div className="card-body">
            <h2 className="card-title">{name || login}</h2>
            <a href={html_url} target="_blank" className="card-sub-title">@{login}</a>
            <p className="description"> {bio} </p>
            <div className="card-footer">
                <div className="box">
                    <p className="number">{followers}</p>
                    <p className="text">Followers</p>
                </div>
                <div className="box">
                    <p className="number">{following}</p>
                    <p className="text">Followings</p>
                </div>
                <div className="box">
                    <p className="number">{public_repos}</p>
                    <p className="text">Repository</p>
                </div>
            </div>
        </div>
    </div>
}