const payBtn = document.getElementById('payBtn');
const modal = document.getElementById('paymentModal');
const closeBtn = document.querySelector('.close');
const gcashForm = document.getElementById('gcashForm');
const message = document.getElementById('message');

payBtn.onclick = () => modal.style.display = 'flex';

closeBtn.onclick = () => {
  modal.style.display = 'none';
  message.textContent = '';
  gcashForm.reset();
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    message.textContent = '';
    gcashForm.reset();
  }
};

gcashForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mobile = document.getElementById('mobile').value;
  const amount = document.getElementById('amount').value;

  // Simulate successful payment
  setTimeout(() => {
    message.textContent = `Payment of ₱${amount} from ${mobile} was successful!`;
  }, 1000);
});
