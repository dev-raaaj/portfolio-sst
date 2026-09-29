function copyEmail(btn) {
  navigator.clipboard.writeText("prithiraj@domain.com");
  const hint = btn.querySelector('.copy-hint');
  hint.textContent = '[copied!]';
  setTimeout(() => hint.textContent = '[copy]', 2000);
}