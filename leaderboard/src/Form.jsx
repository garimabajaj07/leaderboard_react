export default function Form({handleSubmit, input, handleChange}){
    return(
        <form action="" onSubmit={handleSubmit}>
            <h1>LEADERBOARD</h1>
            <input type="text" placeholder="First Name" value={input.fname} onChange={handleChange} name="fname"/>
            <input type="text" placeholder="Last Name" value={input.lname} onChange={handleChange} name="lname"/>
            <select value={input.country} onChange={handleChange} name="country">
                <option value="Select Country" >Select country</option>
                        <option value="India">India</option>
                        <option value="South Africa">South Africa</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Australia">Australia</option>
            </select>
            <input type="number" placeholder="Enter Score" value={input.score} onChange={handleChange} name="score" />
            <button type="submit">ADD</button>
        </form>
    )
}