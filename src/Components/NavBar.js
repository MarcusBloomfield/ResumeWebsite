function NavBar({ className }) {
    return <div className={className}>
        <button className="button" disabled={true}> Home </button>
        <button className="button" disabled={true}> About Me </button>
        <button className="button" disabled={true}> MyProjects  </button>
    </div>
}

export default NavBar