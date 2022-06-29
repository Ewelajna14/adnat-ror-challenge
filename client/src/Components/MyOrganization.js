function MyOrganization({user}){

    console.log(user)

    console.log(user.organization.name)
    return(
        <div>
           <h1>{user.organization.name}</h1>
        </div>
    )
}

export default MyOrganization