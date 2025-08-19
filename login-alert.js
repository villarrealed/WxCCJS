<script>
class LoginAlertWidget extends HTMLElement {
  connectedCallback() {
    const message = this.getAttribute('message') || 'Welcome!';
    alert(message);
    // Optionally redirect after dismissing alert:
    // window.location.hash = '#/tasks'; // or another page id
    this.remove();
  }
}
customElements.define('login-alert-widget', LoginAlertWidget);
</script?
