import React from 'react'
import Person from './Person'

function NameList() {
    const names= ['Nafiul','Islam','Nayeem']
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
    return (
        
        <div>
            {
                persons.map( person =>
                    <Person key={person.id} person={person}></Person>
                )}
        </div>
    )
}

export default NameList
