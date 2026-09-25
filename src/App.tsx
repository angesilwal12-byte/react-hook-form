
import './App.css'

function App() {

  return (
    <div className='main-container'>
      <form>
        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="location" />
        </div>
        <div>
          <label htmlFor="companywebsite">Company Website</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="date">Join Date</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="date">End Date</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea name="descriptiom" id="description" rows={3}>
            Description
          </textarea>
        </div>
      </form>
    </div>
  );
}

export default App
