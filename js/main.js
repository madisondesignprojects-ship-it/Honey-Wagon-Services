(function(){
  var btn=document.querySelector('.menu-btn'), sheet=document.getElementById('sheet');
  function setOpen(open){
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    sheet.hidden=!open;
    document.body.style.overflow=open?'hidden':'';
  }
  btn.addEventListener('click',function(){setOpen(sheet.hidden)});
  sheet.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!sheet.hidden)setOpen(false)});
  window.matchMedia('(min-width:1100px)').addEventListener('change',function(m){if(m.matches)setOpen(false)});

  var form=document.getElementById('quote-form');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var ok=true;
    form.querySelectorAll('[required]').forEach(function(el){
      var bad=!el.value.trim(); el.classList.toggle('invalid',bad); if(bad&&ok){el.focus();} ok=ok&&!bad;
    });
    if(!ok)return;
    form.querySelector('.form__done').hidden=false;
    form.querySelector('button[type=submit]').disabled=true;
  });
  var y=document.getElementById('yr'); if(y)y.textContent=new Date().getFullYear();
})();
