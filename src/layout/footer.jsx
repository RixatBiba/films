function Footer(){
  return  <footer className="page-footer teal darken-2">
    <div className="footer-copyright grey-text text-lighten-4">
      <div className="container">
        © {new Date().getFullYear()} Zvereva Stasy
        <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
      </div>
    </div>
  </footer>
      
}

export {Footer};