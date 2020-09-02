import React from 'react'

const SearchBar = () => {
    return (
        <nav style={{marginBottom: '30px'}} className='blue'>
        <div className="nav-wrapper">
          <form>
            <div class="input-field">
              <input id="search" type="search" />
              <label class="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}

export default SearchBar
