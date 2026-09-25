
import './App.css'

function App() {

  return (
    <div className='main-container'>
      <form>
        <div className='single-form'>
          <label htmlFor="jobTitle">Job Title</label>
          <input type="text" />
        </div>
        <div className='company'>
          <label htmlFor="company">Company</label>
          <input type="text" />
        </div>
        <div className='location'>
          <label htmlFor="location">Location</label>
          <input type="location" />
        </div>
        <div className='website'>
          <label htmlFor="companywebsite">Company Website</label>
          <input type="text" />
        </div>
        <div className='join'>
          <label htmlFor="date">Join Date</label>
          <input type="date" />
        </div>
        <div className='end'>
          <label htmlFor="date">End Date</label>
          <input type="date" />
        </div>
        <div className='description'>
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
