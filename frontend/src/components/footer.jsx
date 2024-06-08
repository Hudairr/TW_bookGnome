import React from 'react'

function footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a href="/" className="link link-hover">
            Home
          </a>
          <a href="/all-books" className="link link-hover">
            All Books
          </a>
          <a
            href="https://www.youtube.com/@hudairr"
            className="link link-hover"
          >
            YouTube Channel
          </a>
          <a 
            href="https://www.instagram.com/hudairr/"
            className='link link-hover'
          >
            Instagram
          </a>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Hudairr</p>
        </aside>
      </footer>
    </div>
  );
}

export default footer
