import React, { useState } from "react";
import books from './BooksData.json'
import { IoIosClose } from "react-icons/io"
import { FaSearch } from "react-icons/fa"

export default function SearchBar (){

    const [filterSearch, setFilterSearch] = useState([])
    const [searchWord, setSearchWord] = useState("")

    

    function handleSearchFilter(e){
        setSearchWord(e.target.value)

        const filteredBooks = books.filter((book)=>{
            return book.title.toLowerCase().includes(searchWord.toLowerCase())
        })

        setFilterSearch(filteredBooks)
    }

    function clearSearch() {
        setFilterSearch([])
        setSearchWord("")
    }


    return (
        <div className="search">
           <div className="search-bar">

           <input 
                className="input-section"
                type="text"
                name="search"
                value={searchWord}
                placeholder="Search a book here......." 
                onChange={handleSearchFilter}
            />
            <div className="icons">
                {searchWord.length !=0 ? <IoIosClose onClick={clearSearch} /> : <FaSearch />}
            </div>
           </div>
            {filterSearch.length != 0 && (<div className="search-returns">
                {filterSearch.map((book)=>{
                return (
                    <div className="items">
                        <a className="links" href={`${book.link}`} target="_blank">
                        <p className="texts">{book.title}</p>
                    </a>
                    </div>)
            })}
            </div>)
            }
          
        </div>
    )
}