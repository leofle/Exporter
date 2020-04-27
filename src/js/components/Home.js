import React from 'react'
import { MyContext } from './App'

export const Home = () => {
    return (
        <div>
        <MyContext.Consumer>
          {value =>
            <h3>{ value }</h3>  
          }
        </MyContext.Consumer>
        </div>
    )
}
