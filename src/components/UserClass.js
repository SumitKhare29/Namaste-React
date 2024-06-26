import React from "react"

class UserClass extends React.Component{
    constructor(props){
        console.log("Lifecycle: constructor executed");
        super(props);
        this.state={
            userInfo:{
                login:'Dummy Data',
                avatar_url:'',
                url:'',
                type:''
            }
        }
    }
    async componentDidMount(){
        console.log("Lifecycle: componentDidMount executed");
        const data = await fetch('https://api.github.com/users/sumitkhare29');
        const json = data.json();
        console.log('Lifecycle: API Called');
        const resolvedPromise = Promise.resolve(json);
        resolvedPromise.then((value) => {
        console.log('Lifecycle: Promise Resolved');
        this.setState({
            userInfo: value,
        });
            });
        this.timer = setInterval(()=>{
            console.log('Setting Interval: Sumit is exploring ABOUT US page');
        },1000);
        
    };
    componentDidUpdate(){
        console.log('Lifecycle: componentDidUpdate executed');
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log('Clearing Interval: Sumit moved to different page');
        console.log('Lifecycle: componentWillUnmount executed');
    }
    render(){
        //onsole.log(this.state.userInfo);
        const {login, avatar_url, url, type} = this.state.userInfo;
        const {count1} =this.state;
        return(
           
            <div className='user-card-class'>
                {console.log(`Lifecycle: render method executed with ${this.state.userInfo.login}`)}
            <h1>User Details!!!</h1>
            <img src={avatar_url} className="git-avatar"></img>
            <p>User Name: {login}</p>
            <p>Git URL: {url}</p>
            <p>Type: {type}</p>
            <button onClick={()=>{
                this.setState({
                    count1:this.state.count1 +1
                })
            }}>Change Count</button>
            </div>
            )
        
    }
}
export default UserClass;