(function(){
  const modal = document.getElementById('modal');
  const openButtons = [document.getElementById('cta'), document.getElementById('ctaTop'), document.getElementById('ctaBottom')].filter(Boolean);
  const close = document.getElementById('modalClose');
  const form = document.getElementById('leadForm');
  const thanks = document.getElementById('formThanks');

  function openModal(){ modal.setAttribute('aria-hidden','false'); }
  function closeModal(){ modal.setAttribute('aria-hidden','true'); }

  openButtons.forEach(b=>b.addEventListener('click', openModal));
  if(close) close.addEventListener('click', closeModal);
  modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    form.style.display='none';
    thanks.hidden=false;
    setTimeout(()=>{ closeModal(); form.reset(); form.style.display='block'; thanks.hidden=true; }, 1800);
  });
})();