import React from 'react';
import './style.scss'
// import {Link} from 'react-router-dom'

const links = [{
   to: '/perfil',
   texto: 'Perfil',
   class: 'fas fa-user'   
},{
   to: '/',
   texto: 'Feed',
   class: 'fas fa-home'   
},{
   to: '/amigos',
   texto: 'Amigos'  ,
   class: 'fas fa-users'   
},{
   to: '/chat',
   texto: 'Chat',
   class: 'fas fa-comment'    
},{
   to: '/notificacoes',
   texto: 'Notificações',
   class: 'fas fa-bell'  
}]

const NavBar = () => {
   const [ open, setOpen] = React.useState();
   return (
      <nav className="menu">
            <button className="bars" onClick={() => setOpen(o => !o)}>
               <i className="fas fa-bars"></i>
            </button>
            <div className="links" style={{ display: open ? "flex" : "none" }}>
               {links.map(l => (
                  <div key={l.toString()} className="cardlink">
                     <i className={l.class}/>
                     <a className="link"  href={l.to} >{l.texto}</a>
                  </div>
               ))}
         </div>
      </nav>
   )
}

export default NavBar;