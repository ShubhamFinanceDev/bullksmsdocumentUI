import { icons } from '@/env/icons'
import React from 'react'
// import AdminAction from '@/components/core/adminAction'

const PageHeading = (props) => {
    const {
        heading = "",
        subHeading = "",

        showSearchInput = true,
        placeholder = "Search",
        searchClassName = "",
        searchQuery = "",
        setSearchQuery = () => { },

        className = "",
        btns = [],
        buttons = [],
        searchBtns = [],
        bypassSecurity = false
    } = props
    return (
        <div className={`page-heading-container mt-4 ${className}`}>
            <div className="page-heading">
                <div>
                    <h2>{heading}</h2>
                    {subHeading && <p>{subHeading}</p>}
                </div>
                    <div className='action-btns isDesktopOnly'>
                        {btns?.map((btn, idx) => {
                            return (
                                <button className={btn?.className}
                                    key={`${heading}_page-heading-action-btn__${idx}`}
                                    onClick={btn.onClick}
                                >
                                    {btn.icon && <img src={btn.icon} alt={btn.label} />}
                                    {btn.label}
                                </button>
                            )
                        })}
                    </div>

            </div>

            <hr />

            {showSearchInput && <div className={"search-input " + searchClassName}>
                <div className="search-input-form">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <img src={icons.Icon18} alt="search" />
                </div>
            </div>}
        </div>
    )
}

export default PageHeading