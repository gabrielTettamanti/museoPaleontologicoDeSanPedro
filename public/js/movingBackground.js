window.onload = function() {
    document.onmousemove = function(e) {
        const x = -(e.clientX/10);

        const y = -(e.clientY/10);

      this.body.style.backgroundPosition = x + 'px ' + y + 'px';
    };
  };