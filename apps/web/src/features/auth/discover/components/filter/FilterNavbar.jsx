import React from 'react'
import './filterNavbar.scss'

const FilterNavbar = () => {
  return (
    <div className="filterNavbar">
        <button>
          All Content
        </button>
        <button>
          Fresh
        </button>
        <button>
          Viral
        </button>
        <button>
          Rising
        </button>
        <button>
          Trending
        </button>
        <div className="anchor">
          

        </div>
    </div>
  )
}

export default FilterNavbar