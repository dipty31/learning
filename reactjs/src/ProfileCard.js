//we can use any name other than props
//1)function ProfileCard(props){

function ProfileCard({title,handle,image}){ // 4)we can also do this, the we won't even need the line 9 code
    //2)const title = props.title;
    //2)const handle = props.handle; 

    // instead of the above two lines we can also simply just write one line which is total equivalent of these
    //3)const{ title, handle} = props; // destructuring feature

    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src ={image}/>
                </figure>
            </div>
        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
        </div>    

        </div>
    );
}

export default ProfileCard;