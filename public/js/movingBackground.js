window.onload = function() {
    document.onmousemove = function(e) {
        const x = -(e.clientX/25);

        const y = -(e.clientY/25);

      this.body.style.backgroundPosition = x + 'px ' + y + 'px';
    };
  };