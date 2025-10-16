
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // stop normal submission

    const form = event.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    })
    .then(response => {
      if (response.ok) {
        form.reset();

        // Show toast
        const toastEl = document.getElementById('successToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(() => alert("Network error. Please try again."));
  });

