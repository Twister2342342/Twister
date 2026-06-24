// Простая интерактивность: краткая анимация нажатия кнопок
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('click', function(){
    btn.classList.add('pressed');
    setTimeout(()=>btn.classList.remove('pressed'),200);
  });
});