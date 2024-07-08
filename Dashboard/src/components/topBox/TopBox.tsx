import "./topBox.scss"
import {topDealUsers} from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Suggested Courses</h1>
      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <div className="userTexts">
                <span className="username">{user.coursename}</span>
              </div>
            </div>
  
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox