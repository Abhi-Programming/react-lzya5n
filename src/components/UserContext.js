import React from 'react';

const UserContext = React.createContext('Abhishek');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export default { UserProvider, UserConsumer };

//export default UserContext