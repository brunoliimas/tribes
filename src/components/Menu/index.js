import React from 'react';
import './style.scss'

const links = [{
   to: '/perfil',
   texto: 'Perfil',
   class: 'fas fa-user'   
},{
   to: '/inicio',
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
               <i class="fas fa-bars"></i>
            </button>
            <div className="links" style={{ display: open ? "flex" : "none" }}>
               {links.map(l => (
                  <div className="cardlink">
                     <i class={l.class}></i>
                     <a className="link" key={l.index} href={l.to} >{l.texto}</a>
                  </div>
               ))}
         </div>
      </nav>
   )
}

export default NavBar;