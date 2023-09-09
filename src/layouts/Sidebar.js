import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons';
import logo from './../assets/logo.png';
import './style.css';
import AuthContext from './../context/AuthContext';

export default function Sidebar({ page, dashboard = null, new_gym_member = null, late_tuition = null, gym_member = null, training_sheet = null, exercise = null, academy_plans = null, employee = null }) {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [isDropdownProfileOpen, setIsDropdownProfileOpen] = useState(null);
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const [activeDropdownGymMember, setActiveDropdownGymMember] = useState(null);
  const [activeDropdownTraining, setActiveDropdownTraining] = useState(null);
  const [activeDropdownExercise, setActiveDropdownExercise] = useState(null);
  const [activeDropdownEmployee, setActiveDropdownEmployee] = useState(null);
  const [activeDropdownType, setActiveDropdownType] = useState(null);

  const handleDropdownClick = (index, set, get) => {
    set(index === get ? null : index);
  };

  const handleProfileClick = () => {
    setIsDropdownProfileOpen(!isDropdownProfileOpen);
  };

  const handleToggleSidebar = () => {
    setSidebarHidden(prevSidebarHidden => !prevSidebarHidden);
  };

  const handleSidebarLeave = () => {
    if (sidebarHidden) {
      const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
      const allSideDivider = document.querySelectorAll('#sidebar .divider');

      allDropdown.forEach(item => {
        const a = item.parentElement.querySelector('a:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
      });

      allSideDivider.forEach(item => {
        item.textContent = '-';
      });
    }
  };

  const handleSidebarEnter = () => {
    if (sidebarHidden) {
      const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
      const allSideDivider = document.querySelectorAll('#sidebar .divider');

      allDropdown.forEach(item => {
        const a = item.parentElement.querySelector('a:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
      });

      allSideDivider.forEach(item => {
        item.textContent = item.dataset.text;
      });
    }
  };

  return (
    <body className='h-screen'>
      <section id="sidebar" className={sidebarHidden ? 'hide' : ''} onMouseLeave={handleSidebarLeave} onMouseEnter={handleSidebarEnter}>
        <a href="#" className="brand">
          <img class="w-13 h-12 rounded" src={logo} alt="logo" />
          <span className='pl-[6px] text-primary-green'>Star Fitness</span>
        </a>
        <ul className="side-menu">
          <li className='cursor-pointer' onClick={() => navigate('/')}>
            <a className={(dashboard !== null) && 'active'}>
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </span>
              Dashboard
            </a>
          </li>
          <li className="divider" data-text="Links Rápidos">
            {(sidebarHidden) ? '-' : 'Links Rápidos'}
          </li>
          <li className='cursor-pointer'>
            <a className={(new_gym_member !== null) && 'active'}>
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
              Novo Aluno
            </a>
          </li>
          <li className='cursor-pointer'>
            <a className={(late_tuition !== null) && 'active'}>
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </span>
              Mensalidades Atrasadas
            </a>
          </li>
          <li className="divider" data-text="Principal">
            {(sidebarHidden) ? '-' : 'Principal'}
          </li>
          <li className='cursor-pointer'>
            <a
              onClick={() => handleDropdownClick(0, setActiveDropdownGymMember, activeDropdownGymMember)}
              className={(activeDropdownGymMember === 0 || gym_member !== null) && 'active'}
            >
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </span>
              Aluno{' '}
              <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${(activeDropdownGymMember === 0) && 'show'}`}>
              <li>
                <a>Matrículas e Alunos</a>
              </li>
              <li>
                <a>Recuperar Acesso</a>
              </li>
            </ul>
          </li>
          <li className='cursor-pointer'>
            <a
              onClick={() => handleDropdownClick(0, setActiveDropdownTraining, activeDropdownTraining)} // Chama a função ao clicar
              className={(activeDropdownTraining === 0 || training_sheet !== null) && 'active'}
            >
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </span>
              Ficha de Treino{' '}
              <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${(activeDropdownTraining === 0) && 'show'}`}>
              <li>
                <a>Planejar Treino</a>
              </li>
              <li>
                <a>Gestão e Fichas de Treino</a>
              </li>
              <li>
                <a>Treinos de Introdução</a>
              </li>
            </ul>
          </li>
          <li className='cursor-pointer'>
            <a
              onClick={() => handleDropdownClick(0, setActiveDropdownExercise, activeDropdownExercise)} // Chama a função ao clicar
              className={(activeDropdownExercise === 0 || exercise !== null) && 'active'}
            >
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </span>
              Exercícios{' '}
              <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${(activeDropdownExercise === 0) && 'show'}`}>
              <li>
                <a>Adicionar Exercícios</a>
              </li>
              <li>
                <a>Gerenciar Exercícios</a>
              </li>
            </ul>
          </li>
          <li className='cursor-pointer'>
            <a
              onClick={() => handleDropdownClick(0, setActiveDropdownType, activeDropdownType)} // Chama a função ao clicar
              className={(activeDropdownType === 0 || academy_plans !== null) && 'active'}
            >
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
              </span>
              Planos da Academia{' '}
              <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${(activeDropdownType === 0) && 'show'}`}>
              <li onClick={() => navigate('/academy-plans/form')}>
                <a>Adicionar Plano</a>
              </li>
              <li onClick={() => navigate('/academy-plans')}>
                <a>Meus Planos</a>
              </li>
            </ul>
          </li>
          <li className='cursor-pointer'>
            <a
              onClick={() => handleDropdownClick(0, setActiveDropdownEmployee, activeDropdownEmployee)} // Chama a função ao clicar
              className={(activeDropdownEmployee === 0 || employee !== null) && 'active'}
            >
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </span>
              Funcionários{' '}
              <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${(activeDropdownEmployee === 0) && 'show'}`}>
              <li>
                <a>Cadastrar Funcionários</a>
              </li>
              <li>
                <a>Gestão de Funcionários</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav className='flex justify-between'>
          <i class='bx bx-menu toggle-sidebar' onClick={handleToggleSidebar}></i>
          <div class="profile cursor-pointer" onClick={handleProfileClick}>
            <div className='flex justify-center items-center'>
              <img src={user.photo_url} alt="" />
              <span className='pl-[10px]'>{user.name}</span>
              {
                isDropdownProfileOpen ? (
                  <i className='bx bx-chevron-down icon-right'></i>
                ) : (
                  <i className="bx bx-chevron-right icon-right"></i>
                )
              }
            </div>
            <ul className={`profile-link ${isDropdownProfileOpen ? 'show' : ''}`}>
              <li><a href="#"><i class='bx bxs-user-circle icon' ></i> Perfil</a></li>
              <li><a href="#"><i class='bx bxs-cog' ></i> Configurações</a></li>
              <hr></hr>
              <li><a href="#"><i class='bx bxs-log-out-circle' ></i> Logout</a></li>
            </ul>
          </div>
        </nav>

        <main>
          <div>
            {page}
          </div>
        </main>
      </section>
    </body >
  )
}