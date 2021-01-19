function Users({ usersData, isLoading, isError }: any) {

  return (
    <>
      <h1>All your friends : </h1>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ul>{usersData.map((user: any) => {
            return <li key={user.id}>
              <h2>{user.username}</h2>
              <p>{user.name}</p>
              <p>{user.city}</p>
            </li>
          })}
          </ul>)}
    </>
  );
}

export default Users;