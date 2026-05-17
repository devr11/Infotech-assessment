// ─── MOBILE DRAWER ───

function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  document.body.style.overflow = '';
}