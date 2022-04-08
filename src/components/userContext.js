import React from 'react'

const UserContext = React.createContext('Nafiul Islam')

const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}