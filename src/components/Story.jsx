import { useState } from "react";
import './Story.css';

const Story = () => {
    const headerTitles = ['Country', 'City', 'Name', 'Address', 'Action'];
    const [users, setUsers] = useState([
        {country: 'Russia', city: 'Krasnodar', name: 'Bushev Danil', address: 'Zelenogradskaya street 38', id: 0},
        {country: 'USA', city: 'California', name: 'Tiger Woods', address: '200 N. Spring Street', id: 1},
        {country: 'England', city: 'London', name: 'David Robert Joseph Beckham', address: '45 Maydwell House', id: 3},
        {country: 'Germany', city: 'Munich', name: 'Thomas Muller', address: 'Salvatorstrasse 5', id: 4},
    ])

    const deleteUser = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);

        setUsers(filteredUsers);
    }

    return (
        <div className="template">
            <div className="table">
                <div className="tb-header">
                  {headerTitles.map((title, i) => {
                      return (
                          <div key={i} className={`${i === headerTitles.length - 2 ? 'max-cell' : 'min-cell'} cell`}>
                              {title}
                          </div>
                      )
                  }
                  )}
                </div>
                {users.map(user => {
                    return (
                        <div className="tb-body" key={user.id}>
                            <div className="min-cell cell">{user.country}</div>
                            <div className="min-cell cell">{user.city}</div>
                            <div className="min-cell cell">{user.name}</div>
                            <div className="max-cell cell">{user.address}</div>
                            <div className="min-cell cell">
                                <div className='delete' onClick={() => deleteUser(user.id)}>Delete</div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
    );
}

export default Story; 