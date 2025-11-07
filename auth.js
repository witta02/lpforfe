(function(){
  const USERS_KEY = 'sim.users';
  const AUTH_KEY = 'sim.auth.user';

  function readUsers(){
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch(e){ return []; }
  }
  function writeUsers(users){
    try { localStorage.setItem(USERS_KEY, JSON.stringify(users)); } catch(e){}
  }
  function getAuth(){
    try { return JSON.parse(localStorage.getItem(AUTH_KEY)); } catch(e){ return null; }
  }
  function setAuth(user){
    try { if (user) localStorage.setItem(AUTH_KEY, JSON.stringify(user)); else localStorage.removeItem(AUTH_KEY); } catch(e){}
  }

  function injectNavLinks(){
    const nav = document.querySelector('.nav-menu');
    if (!nav) return;
    // Remove existing auth items (LOGIN, REGISTER, LOGOUT, username)
    nav.querySelectorAll('[data-auth]').forEach(el => el.remove());
    const auth = getAuth();
    if (auth){
      const nameLi = document.createElement('li');
      nameLi.setAttribute('data-auth','1');
      nameLi.innerHTML = `<span style="color:#00ADEF;font-weight:900;font-size:14px;text-transform:uppercase;letter-spacing:2px;">${escapeHtml(auth.username)}</span>`;
      const outLi = document.createElement('li');
      outLi.setAttribute('data-auth','1');
      const outA = document.createElement('a');
      outA.href = '#logout'; outA.textContent = 'LOGOUT';
      outA.addEventListener('click', (e)=>{ e.preventDefault(); logout(); });
      outLi.appendChild(outA);
      nav.insertBefore(nameLi, nav.lastElementChild);
      nav.insertBefore(outLi, nav.lastElementChild);
    } else {
      const loginLi = document.createElement('li'); loginLi.setAttribute('data-auth','1');
      const regLi = document.createElement('li'); regLi.setAttribute('data-auth','1');
      const loginA = document.createElement('a'); loginA.href = 'login.html'; loginA.textContent = 'LOGIN';
      const regA = document.createElement('a'); regA.href = 'register.html'; regA.textContent = 'REGISTER';
      loginLi.appendChild(loginA); regLi.appendChild(regA);
      nav.insertBefore(loginLi, nav.lastElementChild);
      nav.insertBefore(regLi, nav.lastElementChild);
    }
  }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
  }

  function register({username, email, fullName, password}){
    username = username.trim(); email = email.trim(); fullName = fullName.trim();
    if (!username || !email || !fullName || !password) throw new Error('All fields are required.');
    if (password.length < 6) throw new Error('Password must be at least 6 characters.');
    const users = readUsers();
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) throw new Error('Username already exists.');
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) throw new Error('Email already registered.');
    const user = { id: Date.now(), username, email, fullName, password }; // demo only
    users.push(user); writeUsers(users);
    return user;
  }

  function login({usernameOrEmail, password}){
    const users = readUsers();
    const user = users.find(u => u.username.toLowerCase() === usernameOrEmail.toLowerCase() || u.email.toLowerCase() === usernameOrEmail.toLowerCase());
    if (!user || user.password !== password) throw new Error('Invalid username/email or password.');
    setAuth({ id: user.id, username: user.username, email: user.email, fullName: user.fullName });
    return user;
  }

  function logout(){ setAuth(null); injectNavLinks(); }

  function handleLoginForm(){
    const form = document.querySelector('[data-login-form]');
    const err = document.querySelector('[data-error]');
    if (!form) return;
    form.addEventListener('submit', (e)=>{
      e.preventDefault(); if (err) err.textContent = '';
      const usernameOrEmail = form.querySelector('[name="username"]')?.value || '';
      const password = form.querySelector('[name="password"]')?.value || '';
      try{ login({usernameOrEmail, password}); window.location.href = 'index.html'; }
      catch(ex){ if (err) err.textContent = ex.message; }
    });
  }

  function handleRegisterForm(){
    const form = document.querySelector('[data-register-form]');
    const err = document.querySelector('[data-error]');
    const ok = document.querySelector('[data-success]');
    if (!form) return;
    form.addEventListener('submit', (e)=>{
      e.preventDefault(); if (err) err.textContent=''; if (ok) ok.textContent='';
      const username = form.querySelector('[name="username"]').value;
      const email = form.querySelector('[name="email"]').value;
      const fullName = form.querySelector('[name="full_name"]').value;
      const password = form.querySelector('[name="password"]').value;
      const confirm = form.querySelector('[name="confirm_password"]').value;
      if (password !== confirm){ if (err) err.textContent = 'Passwords do not match.'; return; }
      try{ register({username, email, fullName, password}); if (ok) ok.textContent='Registration successful!'; setTimeout(()=>window.location.href='login.html', 800); }
      catch(ex){ if (err) err.textContent = ex.message; }
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    injectNavLinks();
    handleLoginForm();
    handleRegisterForm();
  });

  // Expose for debugging
  window.AuthSim = { readUsers, writeUsers, register, login, logout, getAuth };
})();

