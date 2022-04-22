import './Card.css'

function Card(props) { 
	return(
	<div className='card'>
<div className='header' style={{backgroundColor:props.wallpaper}}></div>
<img className='avatar' src={props.profilePic} alt="avatar"/>
<div className='bio'>
<h1 className='username'>{props.username}<span>{props.id}</span></h1>
<p className='about'>About</p>
<p className='userInfo'>{props.userInfo}</p>
<div className='web'>
<h2 >web:<a href="https://instagram.com">https://instagram.com</a></h2>
<h2>twitter:<a href="https://twitter.com">https://twitter.com</a></h2>
</div>
</div>
</div>
	
	)
}

export default Card
