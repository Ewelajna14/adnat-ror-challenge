function Organizations({organization}){
    return(
        <ul>
          <li>{organization.name}
          <button>Edit</button>
          <button>Join</button>
          </li>
        </ul>
    )
}

export default Organizations